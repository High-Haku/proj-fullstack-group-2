const express = require("express")
const upload  = require("../config/multer")
const router = express.Router()

const {getAllContent,addContent} = require("../controllers/Contents_Controller")


router.get("/", getAllContent)
router.post("/",upload.single("video"), addContent)
module.exports = router

// const {addContent,getAllContent} = require("../controllers/Contents_Controller"),
//   upload = require("../config/multer"),
//   router = require("express").Router();

// router
//   .post("/postVideo", upload.single("video"), addContent)
//   .get("/", getAllContent)

// module.exports = router;