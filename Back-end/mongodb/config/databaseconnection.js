const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
// const url = 'mongodb+srv://kp74128717:Ac7WRmtpifjXmSBP@cluster0.dlvla.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const client = new MongoClient(url);

// Database Name
const dbName = 'ecommerce';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return db;
}

module.exports = main;