const express = require('express');
const router = express.Router();
const testData = require('../data-persistence/data');

router.get('/', (req, res) => res.redirect('/home'));
router.get('/home', function (req, res) {

    res.render('index', { result: testData });

});

module.exports = router;