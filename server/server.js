// server.js

// BASIC SETUP
// =============================================================================

// Call the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var db = require(__dirname + '/models/index');

// Sync the database models
db.sequelize.sync({
  // force: true
});

// Create an express app
var app = express();

app.use(express.static(__dirname + '/client'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// Configure the app to use bodyParser()
// This will let us get the data from post
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Set our port
var port = process.env.PORT || 8080;

// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();

// All of our routes will console log a status
app.use(function (req, res, next) {
  console.log('==========================================');
  console.log(req.method + ': ' + req.url);
  next();
});

// Ideally, this route sends the index.html
router.get('/', function (req, res) {
  // res.sendFile(__dirname + '/public/views/index.html');
  res.json({
    message: 'Node-Express-Sequelize Server!'
  });
});

// On routes that end in /product
router.route('/product')

  // Ideally post will create a product
  .post(function (req, res) {
    db.Product.findOrCreate({
      where: {
        name: req.body.name,
        pictureUrl: req.body.pictureUrl,
        description: req.body.description,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        type: req.body.type
      }
    }).spread(function (product, created) {
      if (!created) {
        console.log('Product already exists and was not created');
      } else {
        console.log('Product created!');
      }
      res.json(product);
    });
    
  });

// On routes that end in /products
router.route('/products/:location/:searchTerm/:category')

  // Ideally get will retrieve all products given search parameters in url
  // .get(function (req, res) {

  //   var search = {
  //     'searchParams' :{
  //       'location': req.params.location,
  //       'searchTerm': req.params.searchTerm,
  //       'category': req.params.category
  //     }
  //   }

  //   res.json(search);

  //   // db.Product.findAll().then(function (products) {
  //   //   // Ideally, this sends an html response via res.sendFile()
  //   //   res.json(products);
  //   // });
  // });

  .get(function (req, res) {

    db.Product.findAll().then(function (products) {
      // Ideally, this sends an html response via res.sendFile()
      res.json(products);
    });

  });


// REGISTER OUR ROUTES -------------------------------

// All of our routes will be prefixed with /api in the future when we want to build
// an api
// Right now, to retrieve products, the '/products' route handles getting products 
// and rendering the html
// Ideally, the '/products' route would make a call to the '/api/products' route
// which handles the databases interactions and retrieves data for the '/products'
// route to use to use the data to render
// app.use('/api', router);

// All of our routes will be prefixed with /
app.use('/', router);

module.exports = app;