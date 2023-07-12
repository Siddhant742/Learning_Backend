const express = require('express');
router = express.Router();

Note = require('./../models/Note');
    
    router.post('/list', async function(req, res){
      var notes = await Note.find({userid: req.body.userid});
      res.json(notes);
    });

    router.post('/add', async function(req, res){
      await Note.deleteOne({id: req.body.id});
    
      var newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content
      });

       await newNote.save();
       response = {message : 'Note Added Successfully' + ` id: ${req.body.id}`}
      res.json(response);
    });
    
    router.post('/delete', async function(req, res){
      const noteId= req.body._id;
      await Note.deleteOne({id: req.body.id});
      response = {message : 'Note Deleted Successfully'+ `id: ${req.body.id}`}
      res.json(response);
    });

    module.exports = router;