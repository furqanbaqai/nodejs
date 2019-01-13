const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://192.168.139.128:27017', {
      useNewUrlParser: true
    }, (err, client) => {
      if (err) {
        return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connected to MongoDB server');
      const db = client.db('TodoApp');

      // db.collection('Todos').insertOne({
      //   text: 'Something to do',
      //   completed: false
      // }, (err, result) => {
      //   if (err) {
      //     return console.log('Unable to insert todo', err);
      //   }
      //
      //   console.log(JSON.stringify(result.ops, undefined, 2));
      // });

      // Insert new doc into Users (name, age, location)
      // db.collection('Users').insertOne({
      //   name: 'Andrew',
      //   age: 25,
      //   location: 'Philadelphia'
      // }, (err, result) => {
      //   if (err) {
      //     return console.log('Unable to insert user', err);
      //   }

      //   console.log(result.ops);
      // });
      db.collection('Users').insertOne({
        name: 'Muhammad',
        age: 36,
        location: 'Sharjah'
      },(err,result)=>{
        if(err){
          return console.log('Unable to insert user', err);
        }
        console.log(result.ops);
      });

      client.close();
});
