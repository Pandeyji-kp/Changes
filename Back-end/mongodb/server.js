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

server.post('/categories/add', async (request, response) => {


    const db = await database();
    const insertData = await db.collection('categories').insertOne({
        name: request.body.name
    });
    const result = {
        status: true,
        message: 'Record Fetch Successfully',
        data: insertData
    }
    response.send(result);



})

server.get('/categories', async (request, response) => {


    const db = await database();
    const categoryData = await db.collection('categories').find().toArray();

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


server.get('/categories/details/:id', async (request, response) => {

    var id = new mongodb.ObjectId(request.params.id)
    const db = await database();
    const categoryData = await db.collection('categories').findOne(id);

    if (categoryData) {
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

server.put('/categories/update/:id', async (request, response) => {


    const db = await database();
    const UpdateData = await db.collection('categories').updateOne({
        _id: new mongodb.ObjectId(request.params.id)
    }, {
        $set: {
            name: request.body.name
        }
    });
    const result = {
        status: true,
        message: 'Record Updated Successfully',
        data: UpdateData
    }
    response.send(result);



})

server.delete('/categories/delete/:id', async (request, response) => {


    const db = await database();
    const deleteData = await db.collection('categories').deleteOne({
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





server.listen(7000, () => {
    console.log('Server is Working fine !!')
});
