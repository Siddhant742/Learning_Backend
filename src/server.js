//Initializing Express
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note.js');

const BodyParser = require('body-parser');
app.use(BodyParser.urlencoded({extended: false}));
app.use(BodyParser.json());

mongodbPath = 'mongodb+srv://Siddhant:Sid123@mycluster.wxsharb.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongodbPath).then(function(){

  app.get('/', function(req, res){
    const response = {status-code: res.statusCode ,message : "API Works!"}
    res.json(response)});

    const NotesRouter = require('./routes/NoteRoute');
  app.use('/Notes', NotesRouter)
}
);

//port number to execute the server
const Port = process.env.Port || 5000;
app.listen(Port,function(){
  console.log('Server is initialized at PORT:5000')});