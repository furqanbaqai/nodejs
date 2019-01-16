const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://192.168.159.129:27017', {
      useNewUrlParser: true
    }, (err, client) => {
      if (err) {
        return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connected to MongoDB server');
      const db = client.db('TodoApp');

      // Operation: Delete Many records using deleteMany
    //   db.collection('Todos').deleteMany({text: 'Eat food'}).then((result) =>{
    //     console.log(result);
    //   });

      // Operation: Delete One record using deleteOne
    //   db.collection('Todos').deleteOne({text: 'Eat lubch'}).then((result) =>{
    //     console.log(result);
    //   });

      // Operation: Find One Record and delete it using findOneAndDelete
    //   db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    //       console.log(result);
    //   });

    // CHALLENGE Excersise
    // db.collection('Users').deleteMany({name: 'Andrew'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5c3f3e39170f34005fd740be")}) 
        .then((result) => {
            console.log(result);
        });



      // client.close();
});
