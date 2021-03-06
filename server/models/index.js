var fs = require("fs");
var path = require("path");
var Sequelize = require('sequelize');
var environment = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../../config/config.js')[environment];
var sequelize;

if (environment === 'production') {
  sequelize = new Sequelize(config.database);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
var db = {};

fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  }).forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    console.log('Imported ' + model.name);
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;