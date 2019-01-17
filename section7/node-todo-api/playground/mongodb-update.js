const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://192.168.159.129:27017', {
      useNewUrlParser: true
    }, (err, client) => {
      if (err) {
        return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connected to MongoDB server');
      const db = client.db('TodoApp');

      // findOneAndUpdate()
      // db.collection('Todos').findOneAndUpdate({
      // _id : new ObjectID("5c3f4a198ae60d45c020b741")
      // }, {
      //   $set: {
      //     completed: true
      //   }
      // }, {
      //   returnOrignal: false
      // }).then((result) =>{
      //   console.log(result);
      // });

      db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c3f47868ae60d45c020b68e")
      },{
        $set: {
          name: 'Muhammad Furqan'
        },
        $inc: {
          age:1
        }
      }).then((result) => {
        console.log(result);
      });

      // client.close();
});

// ObjectId("5c3f47868ae60d45c020b68e")