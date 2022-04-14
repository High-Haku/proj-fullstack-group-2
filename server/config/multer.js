const multer = require("multer")
const path = require("path")


const videoStorage = multer.diskStorage({})

const upload = multer({
    storage: videoStorage,
    limits: {
        fileSize: 100000000
    },
    fileFilter(req,file,cb){
        if (!file.originalname.match(/\.(mp4|MPEG-4|mkv|webm)$/)) {
            return cb(new Error('Please upload a video'))
        }
        cb(undefined, true)
    }
})

module.exports = {videoStorage, upload}