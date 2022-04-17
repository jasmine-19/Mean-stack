
//Ques2: Configuring an express application
//"process.env" is a global variable that allows you to access predeined environment variables
// The "NODE_ENV" environment variable is often used for environment-speciic conigurations
var express = require('express'),

//the morgan module provides a simple logger middleware
 morgan = require('morgan'),

 //the compression module will provides response compression
 compress = require('compression'),

 //the body-parser module provides several middleware to handle request data
 bodyParser = require('body-parser'),

 //the method-override module provides DELETE and PUT HTTP verbs legacy support
 methodOverride = require('method-override');

module.exports = function() {
 var app = express();
 // the process.env.NODE_ENV variable are used to determine the environment
 if (process.env.NODE_ENV === 'development') {

    //We simply used the app.use() method to load the morgan() middleware in a development environment
 app.use(morgan('dev'));
 } else if (process.env.NODE_ENV === 'production') {
     // the compress() middleware is used in a production environment
 app.use(compress());
 }
 app.use(bodyParser.urlencoded({
 extended: true
 }));
 app.use(bodyParser.json());
 app.use(methodOverride());
 require('C:\Users\Dell\mean-demo\Ques2\server.js>')

};