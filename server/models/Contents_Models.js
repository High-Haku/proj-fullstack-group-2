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

// booksSchema.post("save", async (doc) => {
//     const Rewards = require("./Rewards");
//     const UserModel = require("./Users_Models");

//     try {
//       if (doc.writer) {
//         const writer = await Writers.findById(doc.writer);
//         await Writers.updateOne(
//           { _id: doc.writer },
//           { books: [...writer.books, doc._id] }
//         );
//       }

//       if (doc.publisher) {
//         const publisher = await Publishers.findById(doc.publisher);
//         await Publishers.updateOne(
//           { _id: doc.publisher },
//           { books: [...publisher.books, doc._id] }
//         );
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   });

const ContentsModel = mongoose.model("contents", ContentsSchema);
module.exports = ContentsModel;
