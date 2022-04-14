const express = require('express');
const rewards = express.Router();

const {getAllRewards, getByIDReward, addReward, updateReward, deleteReward} = require('../controllers/rewards.controller');

rewards.get("/", getAllRewards);
rewards.get("/:id", getByIDReward);
rewards.post("/", addReward);
rewards.put("/:id", updateReward);
rewards.delete("/:id", deleteReward);

module.exports = rewards;