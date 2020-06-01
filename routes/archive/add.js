const express = require('express');
const router = express.Router();
const { data } = require('../data-persistence/data');

router.post('/add', function (req, res) {

    data.push(req.body.entry);
    res.redirect('/home')
    // return res.send(`You added ${data[data.length - 1]}!`);
    //setTimeout(() => res.redirect('/home'), 5000);
});

module.exports = router;