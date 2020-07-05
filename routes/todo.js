const express = require('express');
const router = express.Router();
const ToDo = require('../models/ToDo');
//const { data } = require('../data-persistence/data');

router.post('/add', (req, res) => {
    const { entry } = req.body;

    const todo = new ToDo({
      entry: entry,
    });

    todo.save()
        .then(data => {res.status(200).json(data)})
        .catch(err => {res.status(500).json({ message: err })});

    // res.redirect('/home');
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
});

router.post('/remove', function(req, res) {
  const { remove } = req.body

  if(remove > 0 && remove <= data.length) {
      data.splice(remove - 1, 1);
      // return res.send(`Successfully removed ${remove}!`);
  }
  
  res.redirect('/home');
  //return res.send(`${req.body.delete} does not exist!`);
}); */

module.exports = router;