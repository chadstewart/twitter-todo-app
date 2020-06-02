const express = require('express');
const router = express.Router();
const { data } = require('../data-persistence/data');

router.post('/add', (req, res) => {
  // ES6 Destructuring
    const { entry } = req.body;

    data.push(entry);
    res.redirect('/home');
});

router.post('/update', (req, res) => {
  // ES6 Destructuring
  const { record } = req.body;
  const { data: reqData } = req.body;

  if(record > 0 && record <= reqData.length) {
      data[record - 1] = reqData;
      /* res.send(`Successfully updated task #${record}
                to ${data[record - 1]}!`); */

  }
  
  res.redirect('/home');
  //res.send(`${record} does not exist!`);
});

router.post('/remove', function(req, res) {
  // ES6 Destructuring
  const { remove } = req.body

  if(remove > 0 && remove <= data.length) {
      data.splice(remove - 1, 1);
      // return res.send(`Successfully removed ${remove}!`);
  }
  
  res.redirect('/home');
  //return res.send(`${req.body.delete} does not exist!`);
});

module.exports = router;