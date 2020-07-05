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

/* router.post('/update', (req, res) => {
  const { record } = req.body;
  // const { data: reqData } = req.body;

  if(record > 0 && record <= reqData.length) {
      data[record - 1] = reqData;
      res.send(`Successfully updated task #${record}
                to ${data[record - 1]}!`);
  }
  
  res.redirect('/home');
  //res.send(`${record} does not exist!`);
}); */

router.post('/remove', async function(req, res) {
  const { remove } = req.body
  let todos;
  
  try {

    todos = await mongoPull(ToDo);
    
  } catch (err) {
      
    return res.status(500).json({ message: err });

  }

  try {

    const removedEntry = await ToDo.remove({ _id: todos[remove]._id });
    res.json(removedEntry);

  } catch (err) {
      
    return res.status(500).json({ message: err });

  }
  
  return res.redirect('/home');
});

module.exports = router;