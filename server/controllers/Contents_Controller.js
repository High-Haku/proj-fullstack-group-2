const res = require("express/lib/response");
const ContentsModel = require("../models/Contents_Models")
const cloudinary = require("../config/cloudinary")
const upload = require("../config/multer")

module.exports = {
  getAllContent: async (req, res) => {
    const contents = await ContentsModel.find({}, "-__v");

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
      const result = await cloudinary.uploader.upload(req.file.path)
      res.json(result)
    } catch (error) {
      console.log(error)
    }
  }
}