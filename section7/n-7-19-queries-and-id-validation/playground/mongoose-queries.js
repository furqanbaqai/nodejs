const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c41bb7f1fd2760820750ef5';
// Check if the ID is valid or not
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Can pss _id as it
// NOte: THis will return array
// Todo.find({
//   _id: id
// }).then((todos) => {
//   // Will get array here
//   console.log('Todos', todos);
// });


// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) { // Gracefull check
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


// Challenge Case:
User.findById('5c414524523fe900a37da518').then((user) => {
   if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});

