const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();  // Executable Function

// parse requests of content-type - application/json
server.use(express.json());

server.use(bodyParser.json());

server.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

server.get('/', (request, response) => {
    response.send('Server is working fine !!');
});

server.use('/uploads/categories',express.static('./uploads/categories'));
server.use('/uploads/subcategories',express.static('./uploads/subcategories'));
server.use('/uploads/subsubcategories',express.static('./uploads/subsubcategories'));

// Admin URLS
require('./app/routes/admin/default.routes.js')(server);
require('./app/routes/admin/material.routes.js')(server);
require('./app/routes/admin/color.routes.js')(server);
require('./app/routes/admin/faq.routes.js')(server);
require('./app/routes/admin/parentCategory.routes.js')(server);
require('./app/routes/admin/subCategory.routes.js')(server);  
require('./app/routes/admin/subsubcategory.routes.js')(server);  


// Website URLS
require('./app/routes/website/material.routes.js')(server);
require('./app/routes/website/color.routes.js')(server);
require('./app/routes/website/faq.routes.js')(server);

server.get('*', (request, response) => {
    response.send('404 Page not found !!');
});

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_new')
.then(() => {
    server.listen('5000');
    console.log('Connected!')
})
.catch(() => {
    console.log('Not Connected!');
});
