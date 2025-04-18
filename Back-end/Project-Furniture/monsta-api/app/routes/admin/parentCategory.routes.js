const express = require('express');
const { create, index, update, destroy, details, changeStatus } = require('../../controllers/admin/parentCategory.controller');
const multer = require('multer') 
const path = require('path');
const upload = multer({ dest: 'uploads/categories' })

const router = express.Router();

module.exports = server => {

    

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/categories')  
        },
        filename: function (req, file, cb) {
            // console.log(file);
            // console.log(req); 
            const uniqueSuffix = Date.now();
            var imagepath = path.extname(file.originalname);
            cb(null, file.fieldname + '-' + uniqueSuffix+imagepath )
        }
    })

    const uploadImage = multer({ storage: storage })

    var singleImage = uploadImage.single('image');
    var multipleImages = uploadImage.array('images', 6);
    var singlemultiple = uploadImage.fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 8 }])


    router.post('/add', singleImage, create);

    router.post('/view', upload.none(), index);

    router.post('/details/:id', upload.none(), details);

    router.put('/update/:id',singleImage, update);

    router.post('/delete', upload.none(), destroy);

    router.post('/change-status', upload.none(), changeStatus);

    server.use('/api/admin/parent-categories', router);
}