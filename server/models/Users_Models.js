const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    nama:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["admin", "user", "pitcher"],
        required: true
    }
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel