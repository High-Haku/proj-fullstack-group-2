const mongoose = require("mongoose")

const ContentsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        default: ""
    },
    description:{
        type: String,
        required: true,
        default: ""
    },
    video:{
        type: String,
        required: true
    },
    cloudinaryID:{
        type: String,
        required: true
    },
    // userID: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "users"
    // },
    // reward: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "rewards"
    // },
    category: {
        type: String,
        enum: ["kreativitas","barangHarian"],
        required: true
    }
})

const ContentsModel = mongoose.model("contents", ContentsSchema)
module.exports = ContentsModel