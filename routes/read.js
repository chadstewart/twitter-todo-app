const express = require('express');
const router = express.Router();
const testData = require('../data-persistence/data');

router.get('/', function (req, res) {
    
    if(!testData.data.length) {
        res.send('Hiho!!');
    } else {
        let output = ``;
        let count = 0;

        for(let item of testData.data) {
            output = output.concat(`${count + 1}. ${item} `);
        }

        res.send(`${output}`);
    }

});

module.exports = router;