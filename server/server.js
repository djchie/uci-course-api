var express = require('express');
var bodyParser = require('body-parser');
var db = require(__dirname + '/models/index');

// If true, whole database is dropped on start
var refreshData = false;
// Sync the database models
db.sequelize.sync({
  force: refreshData
}).then(function () {
  if (refreshData) {
    // Writing test data
  }
});

// Create an express app
var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Configure the app to use bodyParser()
// This will let us get the data from post
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Cookie parser
app.use(require('cookie-parser')());

// Set our port
var port = process.env.PORT || 8080;

// ROUTES FOR OUR API
// =============================================================================
var coursesRouter = require('./routers/coursesRouter');
var sessionsRouter = require('./routers/sessionsRouter');

var router = express.Router();

// All of our routes will console log a status
app.use(function (req, res, next) {
  console.log('==========================================');
  console.log(req.method + ': ' + req.url);
  next();
});

// Ideally, this route sends the index.html
app.get('/', function (req, res) {
  // res.sendFile(__dirname + '/public/views/index.html');
  res.json({
    message: 'Welcome to the UCI Course API!'
  });
});

// Routes for api/courses
app.use('/courses', coursesRouter);
// Routes for api/sessions
app.use('/sessions', sessionsRouter);

// All of our routes will be prefixed with /
app.use('/', router);

module.exports = app;









