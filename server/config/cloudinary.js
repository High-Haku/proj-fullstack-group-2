const cloudinary = require("cloudinary").v2
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// cloudinary.uploader.upload(
//     "sample.txt",
//     { resource_type: "raw" },
//     function(error,result){console.log(error,result)}
// );

module.exports = cloudinary
