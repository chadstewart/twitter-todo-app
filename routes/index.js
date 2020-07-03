const express = require('express');
const router = express.Router();
const { data } = require('../data-persistence/data');

router.get('/', (req, res) => res.redirect('/home'));

router.get('/home', (req, res) => {
  res.render('index', { result: data });
});

module.exports = router;