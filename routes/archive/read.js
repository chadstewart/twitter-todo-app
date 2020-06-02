const express = require('express');
const router = express.Router();
const { data } = require('../../data-persistence/data');

router.get('/read', (req, res) => {

    if(testData.data.length) {
        let output = ``;
        let count = 0;

        for(let item of data) {
            output = output.concat(`${count + 1}. ${item} `);
        }

        return res.send(`${output}`);

    }

    return res.send('Hiho!!');
});

module.exports = router;