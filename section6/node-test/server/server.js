const express = require('express');

var app = express();

app.get('/',(req,res) => {    
    // res.status(404).send('Hello World');
    res.status(200).send({error: 'Page not found', name: 'Todo App v1.0'});
});

app.get('/users', (req,res) =>{
        var users = [
            {name: 'Furqan', id:'T123'},
            {name: 'Shakeel', id:'T124'},
            {name: 'Bhai', id: 'T125'}
        ];
    	res.send(users);
});

app.listen(3000);

module.exports.app = app;