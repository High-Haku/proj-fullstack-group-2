const multer = require("multer")
const path = require("path")

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb)=>{
    let ext = path.extname(file.originalname);
    // ganti di bawah sesuai file yang mau di upload JPG, mp4, dll
    if (ext !== ".mp4"){
      cb(new Error("File Type is not supported"), false);
      return;
    }
    cb(null,true);
  }
});