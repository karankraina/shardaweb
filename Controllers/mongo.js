var express = require('express');
var router = express.Router();
// mong

function test(req, res){
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://kay:dbKaranMongo@testkarandb.mongodb.net/admin";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        if(err) console.log(err)
      const collection = client.db("test").collection("devices");
     // perform actions on the collection object
     console.log(collection)
      client.close();
    });
}


module.exports = {
    test
};