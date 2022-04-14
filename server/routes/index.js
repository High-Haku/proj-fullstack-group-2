const express = require("express")
const router = express.Router()
const {authenticateJWT} = require("../config/Auth_and_admin")
const usersRouter = require("./Users_Routers")
const contentRouter = require("./Contents_Routers")
const {registerUser, loginUser} = require("../controllers/Users_Controllers")
const rewardsRouter = require("./rewards.router");
const transactionsRouter = require("./transactions.router");



router.post("/login", loginUser)
router.post("/register", registerUser)

router.use("/video", contentRouter)
router.use("/rewards", rewardsRouter);
router.use("/transactions", transactionsRouter);

router.use(authenticateJWT)
router.use("/users", usersRouter)
module.exports = router