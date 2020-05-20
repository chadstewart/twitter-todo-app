// Setup server
const express = require("express");
const app = express();
// ------------------ Don't change above this line ------------------

//Request Data Type
app.use(express.urlencoded());

//Iniitalize Data Storage
let data = ['test1', 'test2', 'test3'];

// First route. Go to http://localhost:5000 and you should see Hello World in the
// browser. Remember the project has no UI, so this is just for you to experience
// that this all works.

//Initial Landing
app.get('/', (req, res) => res.redirect('/home'));
app.get('/home', function (req, res) {
    
    if(!data.length) {
        res.send('Hiho!!');
    } else {
        let output = ``;

        for(let i = 0; i < data.length; i++) {
            output = output.concat(`${i + 1}. ${data[i]} `);
        }

        res.send(`${output}`);
    }

});

//New Entry
app.post('/add', function (req, res) {

    data.push(req.body.entry);
    res.send(`You added ${data[data.length - 1]}!`);

    setTimeout(() => res.redirect('/home'), 5000);

});

//Delete Entry
app.delete('/remove', function(req, res) {

    if(req.body.delete > 0 && req.body.delete <= data.length) {
        data.slice(req.body.delete, 1);
        res.send(`Successfully removed ${req.body.delete}!`);
    } else {
        res.send(`${req.body.delete} does not exist!`);
    }

});

//Update Entry
app.post('/update', function(req, res) {

    if(req.body.update > 0 && req.body.update <= data.length) {
        data[req.body.record] = req.body.data;
        res.send(`Successfully updated ${req.body.record}!`);
    } else {
        res.send(`${req.body.record} does not exist!`);
    }
});



// -------------------- Don't change below this line ------------------
// Setup where the server listens e.g. which port. Necessary for the browser for example.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
