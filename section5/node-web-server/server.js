const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();


hbs.registerPartials(__dirname + '/views/partials') // Seting up partials
app.set('view engine', 'hbs'); // Sets express related configurations
app.use(express.static(__dirname + '/public')); // Express middleware


app.use((req,res,next) =>{ // Triggers
    var now = new Date().toString();

    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log',log + '\n', (err) => {
        if(err){
            console.log('Unable to append to server.log');
            console.log(err.message);
        }
    }) ;
    next();
});

app.use((req,res,next) => {
    res.render('maintenance.hbs');
});

hbs.registerHelper('getCurrentYear', () =>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) =>{
    return text.toUpperCase();
});


/**
 * HTTP Method: GET
 * Context Root: /
 */
app.get('/',(req, res) => {
    //res.send('<h1>Hello express</h1>');
    /*res.send({
        name: 'Muhammad FUrqan',
        likes: [
            'Biking',
            'Gaming'
        ]
    });*/
    res.render('home.hbs',{
        pageTitle: 'Home Page',        
        welcomeMessage: 'Compared to a SOAP note (an acronym for subjective, objective, assessment, and plan), a welcome note employs a simple method. Its main purpose is to provide that welcoming energy to the guests. It gives a feeling of ease and comfort to anyone who reads it. Let us then delve further on the details of a welcome note.'
    });
});

app.get('/about', (req, res) =>{
    // res.send('About page');
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

/**
 * Error
 */
app.get('/bad', (req,res) =>{
    res.statusCode = 500;
    res.send({
        error: 'Some error messasge'
    });
});
/**
 * Bind application to a port on the 
 * machine
 */
app.listen(3000, () =>{
    console.log("Server is up on port 3000");
});