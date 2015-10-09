var router = require('express').Router();
var validator = require('validator');
var db = require('../models/index');

router.route('/')
  // Gets all users
  .get(function (req, res) {
    db.User.findAll().then(function (users) {
      if (users.length === 0) {
        res.json('There are no users in the database');
      }
      res.json(users);
    });
  });
  // Possible search by other parameters via GET

module.exports = router;