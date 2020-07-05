// Setup server
const express = require("express");
const path = require("path");
const app = express();

//Setup Local MongoDB Instance connection
/* require('dotenv/config');
const mongoose = require("mongoose");
mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {console.log("DB Connection Established Successfully")}
); */
// ------------------ Don't change above this line ------------------

//Initialize Routers
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
