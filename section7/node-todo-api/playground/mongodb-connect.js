//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://192.168.159.129:27017', {
      useNewUrlParser: true
    }, (err, client) => {
      if (err) {
        return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connected to MongoDB server');
      const db = client.db('TodoApp');


      client.close();
});
