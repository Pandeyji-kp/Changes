const http = require('http');
const { categories, products, productDetails } = require('./apiData');

// http.createServer(()=>{

// })
// .listen('1628');

const server = http.createServer((request, response) => {

    if (request.url == '/') {
        response.end('<h1>Server is Working Fine.</h1>');
    } else if (request.url == '/add-category' && request.method == 'GET') {
        const data = {
            status: true, //true or false
            messege: 'Messege Goes Here..',
            data: 'response'
        }
        response.end(JSON.stringify(data));

    }
    else if (request.url == '/categories' && request.method == 'GET') {
        const data = categories;
        if (data.length > 0) {
            const results = {
                status: true,
                messgae: 'Record Fetch Sucessfully !!',
                data: data
            }
            response.end(JSON.stringify(results));
        } else {
            const results = {
                status: false,
                messgae: 'Record Not Found',
                data: []
            }
            response.end(JSON.stringify(results));

        }

    }
    else if (request.url == '/products' && request.method == 'GET') {
        const data = products;
        if (data.length > 0) {
            const results = {
                status: true,
                messgae: 'Record Fetch Sucessfully !!',
                data: data
            }
            response.end(JSON.stringify(results));
        } else {
            const results = {
                status: false,
                messgae: 'Record Not Found',
                data: []
            }
            response.end(JSON.stringify(results));

        }

    }

    else if (request.url == '/product-details' && request.method == 'GET') {
        const data = productDetails;
        if (data) {
            const results = {
                status: true,
                messgae: 'Record Fetch Sucessfully !!',
                data: data
            }
            response.end(JSON.stringify(results));
        } else {
            const results = {
                status: false,
                messgae: 'Record Not Found',
                data: null
            }
            response.end(JSON.stringify(results));

        }

    } else {
        response.end('<h1>Page Not Found.</h1>');
    }

});

server.listen('1628', () => {
    console.log('Server is Working Fine.');
});

