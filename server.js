
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');




/*const express = require('express');
//const path = require('path');
const app = express();

app.route('/').get(function(req, res) {
    res.send('Welcome to my home page');
   }).post(function(req, res) {
    res.send('This is a POST request');
   });

app.get("/about",(req,res) => {
    res.send("Welcome to my about page");
});

app.get("/about/contactus",(req,res) => {
    res.send("Contact here: 4789934686");
});

app.get("/Feedback",(req,res) => {
    res.send("Give your feedback here");
});





/*
app.get('/', function(req, res){
   res.sendFile(path.join(dirname, '/home.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(dirname, '/about.html'));
 });

app.get('/contact', function(req, res){
    res.sendFile(path.join(dirname, '/contact.html'));
});

//app.use(express.static(path.join(dirname, 'public')));
*/
app.listen(4000);
console.log('listening to port 4000')





/* Set express as Node.js web application
// server framework.
// To install express before using it as
// an application server by using
// "npm install express" command.
var express = require('express');
var app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{

    // The render method takes the name of the html
    // page to be rendered as input.
    // This page should be in views folder
    // in the root directory.
    var data = {name:'Akashdeep',
        hobbies:['playing football', 'playing chess', 'cycling']}
    
    res.render('home', {data:data});
    });
    
    var server = app.listen(4000, function() {
        console.log('listening to port 4000')
    });
  



















/*const express = require('express');

const app = express();

const posts = require('./routes/posts');
app.use('/posts', posts);


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodemongo');
const db = mongoose.connection;

db.once('open', function(){
 console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
 console.log(err);
});

app.get('/', function (req, res) {
res.send('hello world')
});

app.listen(3000, function(){
 console.log("Server started on localhost:3000");
});
*/
