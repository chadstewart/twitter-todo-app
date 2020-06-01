const express = require('express');
const router = express.Router();

// CommonJS format
const { data } = require('../data-persistence/data');

// ES6 Modules-ish (Babel format)
// NPM Package for this: https://www.npmjs.com/package/esm
// import { data } from ('../data-persistence/data')

router.get('/', (req, res) => res.redirect('/home'));

router.get('/home', (req, res) => {
  res.render('index', { result: data });
});

module.exports = router;