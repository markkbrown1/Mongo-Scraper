var express = require('express');
//var db = require('../models');
var router = express.Router();
// Routes
// ======
var request = require('request');
// And we bring in our Note and Article models
var Note = require('../models/Note.js');
var Article = require('../models/Articles.js');
// Mongoose
var mongoose = require('mongoose');
var cheerio = require('cheerio');

// Database configuration with mongoose

mongoose.connect('mongodb://localhost/Mongo-Scraper');
var db = mongoose.connection;

// show any mongoose errors
db.on('error', function(err) {
    console.log('Mongoose Error: ', err);
});

// once logged in to the db through mongoose, log a success message
db.once('open', function() {
    console.log('Mongoose connection successful.');
});

