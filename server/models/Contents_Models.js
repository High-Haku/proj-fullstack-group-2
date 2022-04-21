const mongoose = require("mongoose");

const ContentsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "",
  },
  description: {
    type: String,
    required: true,
    default: "",
  },
  video: {
    type: String,
    sparse: true
  },
  cloudinaryID: {
    type: String,
    sparse: true
  },
  category: {
    type: String,
    enum: ["kreativitas", "barang harian"],
    required: true,
  },
  userID: {
    type: mongoose.Types.ObjectId,
    ref: "users",
    sparse: true
  },
  reward: [
    {
      type: mongoose.Types.ObjectId,
      ref: "rewards",
    },
  ],
});

// ContentsSchema.post("save", async (doc) => {
//     const Rewards = require("./Rewards");
//     const UserModel = require("./Users_Models");

//     try {
//       if (doc.userID) {
//         const userID = await UserModel.findById(doc.userID);
//         await UserModel.updateOne(
//           { _id: doc.userID },
//           { users: [...userID.users, doc._id] }
//         );
//       }

//       if (doc.reward) {
//         const reward = await Rewards.findById(doc.reward);
//         await Rewards.updateOne(
//           { _id: doc.reward },
//           { users: [...reward.users, doc._id] }
//         );
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   });

const ContentsModel = mongoose.model("contents", ContentsSchema);
module.exports = ContentsModel;
