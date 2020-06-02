// Setup server
const express = require("express");
const app = express();
//Add Path library to join files based on route location
const path = require("path");
// ------------------ Don't change above this line ------------------

//Initialize Routers
// =>>>> aka business logic
const indexRouter = require('./routes/index');
const todoRouter = require('./routes/todo');

//Initialize API path
const apiPath = '/api';

//Initialize Request Data Type
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Setup EJS view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Use Routers
app.use('/', indexRouter);
app.use(apiPath + '/todo', todoRouter);

//Setup Static assets
app.use(express.static(path.join(__dirname, 'public')));

// Hi

// -------------------- Don't change below this line ------------------
// Setup where the server listens e.g. which port. Necessary for the browser for example.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
