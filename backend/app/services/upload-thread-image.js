const path = require('path')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/thread-image')
    },
    filename: function (req, file, cb){
        const name = Date.now() + path.extname(file.originalname)
        cb(null, name)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}

const upload = multer({storage, fileFilter})

module.exports = upload

module.exports = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: fileFilter,
});