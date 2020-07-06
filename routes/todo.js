const express = require('express');
const router = express.Router();
const ToDo = require('../models/ToDo');
const mongoPull = require('../utility/mongo-pull');
const mongoPush = require('../utility/mongo-push');

router.post('/add', async (req, res) => {
    const { entry } = req.body;

    const todo = new ToDo({
      entry: entry,
    });

    try {

      mongoPush(todo);

    } catch (err) {

      return res.status(500).json({ message: err });

    }
    
    return res.status(200).redirect('/home');
});

router.post('/update', async (req, res) => {
  const { record, entry } = req.body;
  let todos;
  
  try {

    todos = await mongoPull(ToDo);
    
  } catch (err) {
      
    return res.status(500).json({ message: err });

  }

  try {

    const updatedEntry = await ToDo.updateOne(
      { _id: todos[record - 1]._id},
      {$set: {
        entry: entry
      }});

  } catch (err) {
      
    return res.status(500).json({ message: err });

  }
  
  return res.status(200).redirect('/home');
});

router.post('/remove', async function(req, res) {
  const { remove } = req.body
  let todos;
  
  try {

    todos = await mongoPull(ToDo);
    
  } catch (err) {
      
    return res.status(500).json({ message: err });

  }

  try {

    const removedEntry = await ToDo.remove({ _id: todos[remove - 1]._id });

  } catch (err) {
      
    return res.status(500).json({ message: err });

  }
  
  return res.status(200).redirect('/home');
});

module.exports = router;