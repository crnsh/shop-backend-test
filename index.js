var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://karanh:binkbonk123@test-db.ymyhm.mongodb.net/test-db?retryWrites=true&w=majority')

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});
var Person = mongoose.model("Person", personSchema);

var things = require('./things.js');

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/first_template', function(req, res) {
    res.render('first_view');
});

app.use('/things', things);

app.get('/things/:id([0-9]{5})', function(req, res) {
    res.send('id: ' + req.params.id);
});

app.get('*', function(req, res) {
    res.send('Sorry, this is an invalid URL');
});

app.listen(3000);