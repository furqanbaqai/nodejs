// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://192.168.159.129:27017', {
      useNewUrlParser: true
    }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

  // Fetch all records from the db:
  // db.collection('Todos').find().toArray().then((docs) =>{
  //   console.log('ToDos');
  //   console.log(JSON.stringify(docs, undefined,2))
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });

  // QUERY BY A field in the datastructure:
  // db.collection('Todos').find({completed:false}).toArray().then((docs) =>{
  //   console.log('ToDos');
  //   console.log(JSON.stringify(docs, undefined,2))
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });

  // Query by ID:
  // db.collection('Todos').find({
  //     _id:new ObjectID('5c3f49f68ae60d45c020b733')
  //   }).toArray().then((docs) =>{
  //   console.log('ToDos');
  //   console.log(JSON.stringify(docs, undefined,2))
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });

  // Query Count property of the cursor:
  // ref: http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#count
  // db.collection('Todos').find().count().then((count) =>{
  //   console.log(`ToDos: ${count}`);
  // }, (err) =>{
  //   console.log('Unable to fetch todos', err);
  // });

  // Query the database: Challenege Excercise
  db.collection('Users').find({
      name: 'Muhammad'
    }).toArray().then((docs) =>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined,2))
  }, (err) =>{
    console.log('Unable to fetch todos', err);
  });

  // db.collection('Todos').find({
  //   _id: new ObjectID('57bb36afb3b6a3801d8c479d')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.close();
});
