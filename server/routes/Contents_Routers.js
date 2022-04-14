const express = require("express")
const upload  = require("../config/multer")
const router = express.Router()

const {getAllContent,addContent} = require("../controllers/Contents_Controller")


router.get("/", getAllContent)
router.post("/",upload.single("video"), addContent)
module.exports = router