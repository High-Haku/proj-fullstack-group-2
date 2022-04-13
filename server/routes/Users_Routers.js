const express = require("express")
const router = express.Router()
const {adminRequired} = require("../config/Auth_and_admin")

const{getAllUsers,getUsersById,updateUser,deleteUser} = require("../controllers/Users_Controllers")


router.get("/:id",getUsersById)
router.patch("/:id",updateUser)

router.use(adminRequired)
router.get("/", getAllUsers)
router.delete("/:id",deleteUser)

module.exports = router