const http = require('http');
const { categories, products, productDeatils } = require('./ApiData');

const server = http.createServer((request, response) => {
    if (request.url == '/') {
        response.end('Record Found Succesfully !!')
    } else if (request.url == '/add-category' && request.method == 'GET') {
        const data = {
            status: true,
            message: 'Messeage Goes Here',
            data: 'response'

        }
        response.end(JSON.stringify(data));
    } else if (request.url == '/category' && request.method == 'GET') {
        const data = categories;
        if (data.length > 0) {
            const results = {
                status: true,
                message: 'Record Fetch Sucessfully !!',
                data: data
            }
            response.end(JSON.stringify(results))
        } else {
            const results = {
                status: false,
                message: 'Record Not Found',
                data: []
            }
            response.end(JSON.stringify(results))
        }
    } else if (request.url == '/products' && request.method == 'GET'){
        const data = products;
        if(data.length > 0){
            const results = {
                status : true,
                message : 'Record Fetch Sucessfully !!',
                data : data 
            }
            response.end(JSON.stringify(results))
        }else{
            const results = {
                status : true,
                message :  'Record Not Found',
                data : []
            }
            response.end(JSON.stringify(results))
        }

    } else if (request.url == '/product-details' && request.method == 'GET'){
        const data = productDeatils;
        if(data){
            const results = {
                status : true,
                message : 'Record Fetch Sucessfully !!',
                data : data 
            }
            response.end(JSON.stringify(results))
        }else{
            const results = {
                status : true,
                message :  'Record Not Found',
                data :null
            }
            response.end(JSON.stringify(results))
        }

    }
    else {
        response.end('Record Not Found !!')
    }

})
server.listen('8001', () => {
    console.log('Server is Working Fine.');
})