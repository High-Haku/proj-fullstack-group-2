const res = require("express/lib/response");
const Contents = require("../models/Contents_Models")
const cloudinary = require("../config/cloudinary")
const upload = require("../config/multer");


module.exports = {
  getAllContent: async (req, res) => {
    const contents = await Contents.find({}, "-__v");

    try {
      res.json({
        message: "Show All Contents",
        data: contents,
      });
    } catch (err) {
      console.log(err), res.status(500).send(err);
    }
  },

  addContent: async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {resource_type: "video"})
      
      await Contents.create({
        title: req.body.title,
        description: req.body.description,
        video: result.secure_url,
        cloudinaryID: result.public_id,
        userID: req.body.userID,
        reward: req.body.reward,
        category: req.body.category

      })
      res.json({
        message: "Project Created"
      })
     
    } catch (error) {
      console.log(error), res.status(500).send(error)
    }
  },

  getById: async (req, res) => {
    const contents = await Contents.findById(req.params.id, "-__v")
      
    try {
      res.json({
        message: "Showing Contents By ID",
        data: contents,
      });
    } catch (error) {
      console.log(error), res.status(500).send(error);
    }
  },

  editContent: async (req, res) => {
    const data = req.body;
    const contents = await Contents.findById(req.params.id, "-__v")

    try {
      await Contents.updateOne({ _id: req.params.id }, data),
        res.json({
          message: "Project has been updated",
          contents,
        });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  deleteContent: async (req,res) => {
    try {
      const contents = await Contents.findById(req.params.id, "-__v")
      contents.deleteOne();
      res.json({
        message: "Project has been deleted"
      })
    } catch (error) {
      console.log(error);
      res.status(400).send(error)
    }
  }
}