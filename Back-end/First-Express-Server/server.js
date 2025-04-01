const express = require('express');
const { categories, products, productDetails } = require('./apiData');
const server = express();
server.use(express.json());
server.use(express.urlencoded({extended: true}));
const validation =require('./middleware.js')
route = express.Router();
route.use(validation);

server.get('', (request, response) => {
    response.send('Server is Working fine !!')
})

server.get('/categories',validation, (request, response) => {
    const data = categories

    if (data.length > 0) {
        const result = {
            status: true,
            message: 'Record Fetch Successfully',
            data: data
        }
        response.send(result);
    } else {
        const result = {
            status: false,
            message: 'No Record Found !!',
            data: []
        }
        response.send(result);
    }


})

route.get('/products', (request, response) => {
    const data = products

    if (data.length > 0) {
        const result = {
            status: true,
            message: 'Record Fetch Successfully',
            data: data
        }
        response.send(result);
    } else {
        const result = {
            status: false,
            message: 'No Record Found !!',
            data: []
        }
        response.send(result);
    }



})

server.get('/product-details', (request, response) => {

    console.log(request.query);

    const data = productDetails

    if (data) {
        const result = {
            status: true,
            message: 'Record Fetch Successfully',
            data: data,
            info : request.body
        }
        response.send(result);
    } else {
        const result = {
            status: false,
            message: 'No Record Found !!',
            data: null
        }
        response.send(result);
    }



})

server.use('/',route);

server.get('*', (request, response) => {
    response.send('Page Not Found !!')
})





server.listen(7000, () => {
    console.log('Server is Working fine !!')
})
