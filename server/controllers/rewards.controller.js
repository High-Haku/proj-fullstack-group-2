const Rewards = require('../models/Rewards');

module.exports = {
  getAllRewards: async (req, res) => {
    const rewards = await Rewards.find({}, "-__v");

    try {
      res.json(rewards);
    } catch (error) {
      console.log(error.message);
    }
  },

  getByIDReward: async (req, res) => {
    const id = req.params.id;
    const reward = await Rewards.findById(id, "-__v").populate("content", "-__v");

    try {
      res.json(reward);
    } catch (error) {
      console.log(error.message);
    }
  },

  addReward: async (req, res) => {
    const data = req.body;

    try {
      await Rewards.create(data)
      res.json({
        message: "Reward Created"
      })
    } catch (error) {
      console.log(error.message);
    }
  },

  updateReward: async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
      await Rewards.findByIdAndUpdate(id, data);
    } catch (error) {
      console.log(error.message);
    }
  },

  deleteReward: async (req, res) => {
    const id = req.params.id;

    try {
      await Rewards.findByIdAndDelete(id);
    } catch (error) {
      console.log(error.message)
    }
  }
}