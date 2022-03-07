const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/avatars'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
        req.fileValidationError = "Sólo imágenes (.jpg, .jpeg, .png, .gif, .webp)";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}

const uploadFileAvatar = multer({storage, fileFilter});

module.exports = uploadFileAvatar;