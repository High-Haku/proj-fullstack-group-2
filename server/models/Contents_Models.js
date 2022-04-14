const mongoose = require("mongoose")

const ContentsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    video:{
        type: String,
        required: true
    },
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    reward: {
        type: mongoose.Types.ObjectId,
        ref: "rewards",
        required: true
    },
    category: {
        type: String,
        enum: ["kreativitas","barangHarian"],
        required: true
    }
})

const ContentsModel = mongoose.model("contents", ContentsSchema)
module.exports = ContentsModel