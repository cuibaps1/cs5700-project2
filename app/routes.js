var express = require('express');
var path = require('path');

var router = express.Router();

module.exports = router;

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../home.html"));
});

router.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, "../home.html"));
});

router.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, "../about.html"));
});

router.get('/menus', function(req, res) {
  res.sendFile(path.join(__dirname, "../menus.html"));
});

router.get('/group-dining', function(req, res) {
  res.sendFile(path.join(__dirname, "../group-dining.html"));
});

router.get('/happenings', function(req, res) {
  res.sendFile(path.join(__dirname, "../happenings.html"));
});
