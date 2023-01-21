// Import express package
const express = require('express');

let indexRouter = require('./routes/index');
let search_router = require('./routes/search');

// Initialize express
const app = express();

// Set up a view engine
app.set('view engine', 'ejs');

// Set a static folder
app.use(express.static('public'));

// formData => req.body
app.use(express.json()); // application/json
app.use(express.urlencoded({extended: true}));

