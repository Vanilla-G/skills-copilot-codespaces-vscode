// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set port
app.set('port', process.env.PORT || 3000);

// Get all comments
app.get('/api/comments', function(req, res) {
  res.json(comments);
});

// Add a comment
app.post('/api/comments', function(req, res) {
  var comment = {
    id: Date.now(),
    