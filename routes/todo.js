const express = require('express');
const router = express.Router();
const { data } = require('../data-persistence/data');

router.post('/add', (req, res) => {

    data.push(req.body.entry);
    // res.send(`You added ${data[data.length - 1]}!`);
    res.redirect('/home')
    //setTimeout(() => res.redirect('/home'), 5000);
});

router.post('/update', (req, res) => {
  // ES6 Destructuring
  const { record  } = req.body

  if(record > 0 && record <= data.length) {
      data[record - 1] = req.body.data;
      return res.send(`Successfully updated task #${record}
                to ${data[record - 1]}!`);

  }

  return res.send(`${record} does not exist!`);
});

module.exports = router;