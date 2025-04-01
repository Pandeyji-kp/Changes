const express = require('express');
const {index} = require('../../controllers/website/color.controller');

const router = express.Router();

module.exports = server => {


    router.post('/view',index);

   

    server.use('/api/website/color',router);
}