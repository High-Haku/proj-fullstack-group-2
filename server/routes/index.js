const express = require("express")
const router = express.Router()
const {authenticateJWT} = require("../config/Auth_and_admin")
const usersRouter = require("./Users_Routers")
const{registerUser, loginUser} = require("../controllers/Users_Controllers")

router.post("/login", loginUser)
router.post("/register", registerUser)

router.use(authenticateJWT)
router.use("/users", usersRouter)



module.exports = router