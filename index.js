var express = require('express');
var qs = require('querystring');
var path = require('path');
var async = require('async');
var bcrypt = require('bcryptjs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var colors = require('colors');
var cors = require('cors');
var logger = require('morgan');
var jwt = require('jwt-simple');
var moment = require('moment');
// var mongoose = require('mongoose');
var request = require('request');
var morgan = require('morgan');
var passport = require('passport');
var port = process.env.PORT || 8080;
// var User = require('./app/models/user');
var config = require('./database');
var massive = require('massive');
var connectionString = "postgres://brandonshepherd@localhost/sandbox";

var massiveInstance = massive.connectSync({connectionString : connectionString});



var app = module.exports = express();

app.use(cookieParser());
app.use(express.static('public'));
app.set('db', massiveInstance);

var databaseCtrl = require('./databaseCtrl.js');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(passport.initialize());
app.get('/', function(req, res) {
  res.send('Hello! The API is at http://localhost:' + port + '/api');
});



/*
 |--------------------------------------------------------------------------
 | Log in with Email
 |--------------------------------------------------------------------------
 */
app.post('/auth/login', databaseCtrl.login);


/*
 |--------------------------------------------------------------------------
 | Create Email and Password Account
 |--------------------------------------------------------------------------
 */
app.post('/auth/signup', databaseCtrl.createUser);



app.get('/user', /*checkToken*/ databaseCtrl.getUser);
app.post('/user', databaseCtrl.addUser);
app.get('/cart', databaseCtrl.getCart);
app.post('/cart', databaseCtrl.addCart);
app.delete('/cart/:id', databaseCtrl.deleteCart);
app.get('/sum/', databaseCtrl.sumCart);
app.put('/cart/:id', databaseCtrl.updateQuantity);
app.put('/update', databaseCtrl.changeNamePassword);


app.listen('3000', function(){
  console.log("Successfully listening on : 3000");
});
