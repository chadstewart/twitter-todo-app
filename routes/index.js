const express = require('express');
const router = express.Router();
const ToDo = require('../models/ToDo');

router.get('/', (req, res) => res.redirect('/home'));

router.get('/home', async (req, res) => {
  let todos;
  let data = [];
  
  try {
    todos = await ToDo.find().select('entry -_id');
  } catch (err) {
    return res.status(500).json({ message: err });
  }

  for(let i in todos) {
    data.push(todos[i].entry);
  }
  
  return res.status(200).render('index', { result: data });
});

module.exports = router;