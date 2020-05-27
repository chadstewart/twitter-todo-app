// Setup server
const express = require("express");
const app = express();
// ------------------ Don't change above this line ------------------



//Add Path ibrary
const path = require("path");

//Initialize Routers
const indexRouter = require('./routes/index');
const readRouter = require('./routes/read');
const addRouter = require('./routes/add');
const deleteRouter = require('./routes/delete');
const updateRouter = require('./routes/update');

//Initialize API path
const apiPath = '/api';

//Initialize Request Data Type
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Setup EJS view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Setup Static assets
app.use(express.static(path.join(__dirname, 'public')));

//Use Routers
app.use('/', indexRouter);
app.use(apiPath + '/read', readRouter);
app.use(apiPath + '/add', addRouter);
app.use(apiPath + '/remove', deleteRouter);
app.use(apiPath + '/update', updateRouter);



// -------------------- Don't change below this line ------------------
// Setup where the server listens e.g. which port. Necessary for the browser for example.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
