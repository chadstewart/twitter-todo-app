const express = require('express');
const router = express.Router();
const testData = require('../data-persistence/data');

router.post('/', function(req, res) {

    if(req.body.delete > 0 && req.body.delete <= testData.data.length) {
        testData.data.splice(req.body.delete - 1, 1);
        res.send(`Successfully removed ${req.body.delete}!`);
    } else {
        res.send(`${req.body.delete} does not exist!`);
    }

});

module.exports = router;