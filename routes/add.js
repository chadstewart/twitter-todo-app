const express = require('express');
const router = express.Router();
const testData = require('../data-persistence/data');

router.post('/', function (req, res) {

    testData.data.push(req.body.entry);
    res.send(`You added ${testData.data[testData.data.length - 1]}!`);

    //setTimeout(() => res.redirect('/home'), 5000);

});

module.exports = router;