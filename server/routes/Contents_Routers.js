const express = require("express")
const upload  = require("../config/multer")
const router = express.Router()
const adminRequired = require("../config/Auth_and_admin")

const {getAllContent,addContent,editContent,deleteContent,getById} = require("../controllers/Contents_Controller")


router.get("/", getAllContent)
router.get("/:id", getById)
router.put("/:id", editContent)
router.delete("/:id", deleteContent)
router.post("/create-a-project",upload.single("video"), addContent)


module.exports = router