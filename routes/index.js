const express = require('express');
const router = express.Router();

//router.get('/', (req, res) => res.redirect('/home'));
router.get('/home', function (req, res) {

    res.render('index', { title: 'Express' });

});

module.exports = router;