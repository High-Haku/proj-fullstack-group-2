const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref:"users", required: true },
  reward: { type: mongoose.Types.ObjectId, ref:"rewards", required: true },
})

const Transactions = mongoose.model("transactions", transactionsSchema);
module.exports = Transactions;