const express = require('express');
const router = express.Router();
const multer = require('multer');
const PC = require('../controller/product');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.array('images', 5), PC.create); 
router.get('/', PC.show);
router.delete('/:id', PC.delete);
router.patch('/:id', upload.array('images', 5), PC.update);

module.exports = router;
