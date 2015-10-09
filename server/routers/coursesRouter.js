var router = require('express').Router();
var validator = require('validator');
var db = require('../models/index');

router.route('/')
  // Returns all courses and relevant sessions
  .get(function (req, res) {
    db.Course.findAll({
      include: [
        {
          model: db.Session,
          as: 'sessions'
        }
      ]
    }).then(function (courses) {
      res.json(courses);
    });
  });

router.route('/title/:title')
  // Returns all courses and relevant sessions by course title
  .get(function (req, res) {
    db.Course.findAll({
      include: [
        {
          model: db.Session,
          as: 'sessions'
        }
      ],
      where: {
        title: {
          ilike: '%' + req.params.title + '%'
        }
      }
    }).then(function (courses) {
      res.json(courses);
    })
  });

router.route('/department/:department')
  // Returns all courses and relevant sessions by department
  .get(function (req, res) {
    db.Course.findAll({
      include: [
        {
          model: db.Session,
          as: 'sessions'
        }
      ],
      where: {
        department: req.params.department
      }
    }).then(function (courses) {
      res.json(courses);
    })
  });

router.route('/number/:number')
  // Returns all courses and relevant sessions by course number
  .get(function (req, res) {
    db.Course.findAll({
      include: [
        {
          model: db.Session,
          as: 'sessions'
        }
      ],
      where: {
        number: {
          ilike: req.params.number
        }
      }
    }).then(function (courses) {
      res.json(courses);
    })
  });

router.route('/department/:department/title/:title')
  // Returns all courses and relevant sessions by department and course title
  .get(function (req, res) {
    db.Course.findAll({
      include: [
        {
          model: db.Session,
          as: 'sessions'
        }
      ],
      where: {
        department: req.params.department,
        title: {
          ilike: '%' + req.params.title + '%'
        }
      }
    }).then(function (courses) {
      res.json(courses);
    })
  });

router.route('/department/:department/number/:number')
  // Returns all courses and relevant sessions by department and course number
  .get(function (req, res) {
    db.Course.findAll({
      include: [
        {
          model: db.Session,
          as: 'sessions'
        }
      ],
      where: {
        department: req.params.department,
        number: {
          ilike: req.params.number
        }
      }
    }).then(function (courses) {
      res.json(courses);
    })
  });

module.exports = router;








