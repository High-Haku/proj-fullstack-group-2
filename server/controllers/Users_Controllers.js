const UserModel = require("../models/Users_Models");
const validator = require("validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await UserModel.find({}, "-__v").populate("content", "-__v");

    try {
      res.json({
        message: "Get All Users Data",
        data: users,
      });
    } catch (err) {
      console.log(err), res.status(500).send(err);
    }
  },

  getUsersById: async (req, res) => {
    const users = await UserModel.findById(req.params.id, "-__v").populate(
      "content",
      "-__v"
    );

    try {
      res.json({
        message: "Get Users By ID",
        data: users,
      });
    } catch (err) {
      console.log(err), res.status(500).send(err);
    }
  },

  registerUser: async (req, res) => {
    const data = req.body;
    const alldata = await UserModel.find({}, "-__v");
    try {
      const result = alldata.find(({ email }) => email === req.body.email);
      console.log(result);

      if (!result) {
        if (!validator.isEmail(req.body.email))
          return res.status(400).json({ messege: "Invalid Email" });

        data.password = await bcrypt
          .hash(data.password, saltRounds)
          .catch((err) => console.log(err));

        await UserModel.create(data);
        res.json({
          message: "New User Added",
          data: data,
        });
      } else {
        res.json({
          message: "Email already exist, try another",
        });
      }
    } catch (err) {
      console.log(err), res.status(500).send(err);
    }
  },

  loginUser: async (req, res) => {
    const user = await UserModel.findOne({ email: req.body.email });
    const passwordVerify = await bcrypt.compare(
      req.body.password,
      user.password
    );

    try {
      if (req.body.email === user.email && passwordVerify) {
        const accessToken = jwt.sign(
          { email: user.email, role: user.role, id: user._id },
          process.env.TOKEN
        );
        res.cookie("cookie", accessToken, {
          maxAge: 15 * 60 * 1000,
        });
        return res.json({
          message: "Login Successful",
          token: accessToken,
          id: user.id,
          role: user.role,
        });
      } else {
        res.json({ message: "email / password invalid" });
      }
    } catch (err) {
      res.status(404).json({ msg: "email not found", err });
    }
  },

  updateUser: async (req, res) => {
    const data = req.body;

    if (req.body.password) {
      data.password = await bcrypt
        .hash(data.password, saltRounds)
        .catch((err) => console.log(err));
    }

    if (req.body.email) {
      if (!validator.isEmail(req.body.email))
        return res.status(400).json({ message: "Invalid Email" });
    }

    try {
      await UserModel.updateOne({ _id: req.params.id }, data);
      res.json({
        message: "User Updated",
        data: data,
      });
    } catch (err) {
      console.log(err), res.status(500).send(err);
    }
  },

  deleteUser: async (req, res) => {
    const users = await UserModel.findById(req.params.id, "-__v");

    try {
      await UserModel.deleteOne({ _id: req.params.id });
      res.json({
        message: "User Deleted",
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
