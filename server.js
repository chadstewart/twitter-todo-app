// Setup server
const express = require("express");
const mongoose = require("mongoose")
const path = require("path");
const app = express();

mongoose.connect('mongodb://localhost:27017/MyDb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {console.log("It worked!!")}
);
// ------------------ Don't change above this line ------------------

//Initialize Routers
// =>>>> aka business logic
const indexRouter = require('./routes/index');
const todoRouter = require('./routes/todo');

//Initialize Request Data Type
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Setup EJS view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Use Routers
app.use('/', indexRouter);
app.use('/api/todo', todoRouter);

//Setup Static assets
app.use(express.static(path.join(__dirname, 'public')));

// -------------------- Don't change below this line ------------------
// Setup where the server listens e.g. which port. Necessary for the browser for example.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
