const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.TOKEN, (error, user) => {
      if (error) return res.sendStatus(403);

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

const adminRequired = (req,res,next) => {
    if (req.user.role !== "admin") return res.sendStatus(401);
  next();
};

module.exports = {authenticateJWT, adminRequired}