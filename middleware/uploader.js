const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage ({
    destination: "files/",
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.random(Math.random * 1E9)
        cb(null, uniqueSuffix + "-" + file.originalname)
    }
})

const uploader = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const suppertedFile = /png|jpg /;
        const extension = path.extname(file.originalname);
        if(suppertedFile.test(extension)){
            cb(null, true)
        }
        else{
            cb(new Error("Must be a pdf"))
        }
    },
    limits: {
        fileSize: 500000
    }
})

module.exports = uploader;