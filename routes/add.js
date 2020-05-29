const express = require('express');
const router = express.Router();
const { data } = require('../data-persistence/data');

router.post('/', function (req, res) {

    data.push(req.body.entry);
    res.send(`You added ${data[data.length - 1]}!`);

    //setTimeout(() => res.redirect('/home'), 5000);

});

module.exports = router;