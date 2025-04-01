const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const server = express(); // To Excutable Function
const database = require('./config/databaseconnection.js');
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('', (request, response) => {
    response.send('Server is Working fine !!')
})

server.post('/colors/add', async (request, response) => {


    const db = await database();
    const insertData = await db.collection('colors').insertOne({
        color: request.body.color
    });
    const result = {
        status: true,
        message: 'Record Fetch Successfully',
        data: insertData
    }
    response.send(result);



})

server.get('/colors', async (request, response) => {


    const db = await database();
    const categoryData = await db.collection('colors').find().toArray();

    if (categoryData.length > 0) {
        const result = {
            status: true,
            message: 'Record Fetch Successfully',
            data: categoryData
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


server.get('/colors/details/:id', async (request, response) => {

    var id = new mongodb.ObjectId(request.params.id)
    const db = await database();
    const colorData = await db.collection('colors').findOne(id);

    if (colorData) {
        const result = {
            status: true,
            message: 'Record Fetch Successfully',
            data: colorData
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

server.put('/colors/update/:id', async (request, response) => {


    const db = await database();
    const UpdateData = await db.collection('colors').updateOne({
        _id: new mongodb.ObjectId(request.params.id)
    }, {
        $set: {
            color: request.body.color
        }
    });
    const result = {
        status: true,
        message: 'Record Updated Successfully',
        data: UpdateData
    }
    response.send(result);



})

server.delete('/colors/delete/:id', async (request, response) => {


    const db = await database();
    const deleteData = await db.collection('colors').deleteOne({
        _id: new mongodb.ObjectId(request.params.id)
    });
    const result = {
        status: true,
        message: 'Record Deleted Successfully',
        data: ''
    }
    response.send(result);



})


server.get('*', (request, response) => {
    response.send('Page Not Found !!')
})





server.listen(7001, () => {
    console.log('Server is Working fine !!')
});
