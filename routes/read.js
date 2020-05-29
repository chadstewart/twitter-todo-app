const express = require('express');
const router = express.Router();
const { data } = require('../data-persistence/data');

router.get('/', function (req, res) {
    
    if(!testData.data.length) {
        res.send('Hiho!!');
    } else {
        let output = ``;
        let count = 0;

        for(let item of data) {
            output = output.concat(`${count + 1}. ${item} `);
        }

        res.send(`${output}`);
    }

});

module.exports = router;