const mongoose = require("mongoose")

const ContentSchema = new mongoose.Schema({
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
    
})