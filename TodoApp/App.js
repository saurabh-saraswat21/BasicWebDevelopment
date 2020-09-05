//require dependencies
const express = require ('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

// initializig app
const app = express();

//  require controllers

const todoController = require('./Controllers/todo')

//port number to be used 
const port = 80;

//setting static directory
app.use(express.static('public'))

//templating engine
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))

//using controllers
todoController(app);

//listen server
app.listen(port,()=>{
    console.log("Listening..")
})
