const express = require("express");
const router = express.Router();
const { authenticateJWT } = require("../config/Auth_and_admin");
const usersRouter = require("./Users_Routers");
const contentRouter = require("./Contents_Routers");
const { registerUser, loginUser } = require("../controllers/Users_Controllers");
const rewardsRouter = require("./rewards.router");
const transactionsRouter = require("./transactions.router");
require("dotenv").config();

router.post("/login", loginUser);
router.post("/register", registerUser);

// Payment
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/payment", async (req, res) => {
  const amount = req.body.amount;
  console.log("Payment Request recieved for this idr", amount);

  const payment = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "idr",
  });

  res.status(201).send({
    clientSecret: payment.client_secret, payment: payment
  }) 
});

router.use("/videos", contentRouter);
router.use("/rewards", rewardsRouter);
router.use("/transactions", transactionsRouter);

router.use(authenticateJWT);
router.use("/users", usersRouter);
module.exports = router;