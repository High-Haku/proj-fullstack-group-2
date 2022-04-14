const mongoose = require('mongoose');

const rewardsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  reward: { type: String, required: true },
  price: { type: Number, required: true},
  post: { type: mongoose.Types.ObjectId, ref: "posts", required: true}
})

const Rewards = mongoose.model("rewards", rewardsSchema);
module.exports = Rewards;