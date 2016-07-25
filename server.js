var express = require('express');
var path = require('path');
// Mongoose import
var mongoose = require('mongoose');

var router = express.Router();

// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://127.0.0.1', function (error) {
    if (error) {
        console.log(error);
    }
    console.log("successful connect to mongodb");
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String
});

// Mongoose Model definition
var User = mongoose.model('users', UserSchema);

// Bootstrap express
var app = express();
// URLS management


app.get('/', function (req, res) {
    res.send("<a href='/users'>Show Users</a>");
});

app.get('/users', function (req, res) {
    User.find({}, function (err, docs) {
        res.json(docs);
    });
    	
});

app.get('/users/:email', function (req, res) {
    if (req.params.email) {
        User.find({ email: req.params.email }, function (err, docs) {
            res.json(docs);
        });
    }
});

app.listen(4000);
app.use(express.static('public'));
app.get('/about', function(req, res) {
    console.log("-----------------------------",res.sendfile);
    
    res.sendfile(__dirname+'/public/loginSignup.html',function(err){
    	if(err)
    		console.log("error",err);
    });
});