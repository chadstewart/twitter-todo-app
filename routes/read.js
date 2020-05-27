const express = require('express');
const router = express.Router();
const testData = require('../data-persistence/data');

router.get('/', function (req, res) {
    
    if(!testData.data.length) {
        res.send('Hiho!!');
    } else {
        let output = ``;

        for(let i = 0; i < testData.data.length; i++) {
            output = output.concat(`${i + 1}. ${testData.data[i]} `);
        }

        res.send(`${output}`);
    }

});

module.exports = router;