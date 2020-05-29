const express = require('express');
const router = express.Router();
const { data } = require('../data-persistence/data');

router.post('/', function(req, res) {

    if(req.body.record > 0 && req.body.record <= data.length) {
        data[req.body.record - 1] = req.body.data;
        res.send(`Successfully updated task #${req.body.record}
                  to ${data[req.body.record - 1]}!`);
    } else {
        res.send(`${req.body.record} does not exist!`);
    }
});

module.exports = router;