const mongoose = require('mongoose');

const rewardsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  reward: { type: String, required: true },
  price: { type: Number, required: true},
  content: { type: mongoose.Types.ObjectId, ref: "contents"}
})

const Rewards = mongoose.model("rewards", rewardsSchema);
module.exports = Rewards;