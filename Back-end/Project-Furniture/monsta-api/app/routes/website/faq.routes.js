const express = require('express');
const {  index } = require('../../controllers/website/faq.controller');

const router = express.Router();

module.exports = server => {

  

    router.post('/view',index);

    server.use('/api/website/faqs',router);
}