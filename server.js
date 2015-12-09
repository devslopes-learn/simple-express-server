var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var animals = [
    "puppy",
    "kitten",
    "ferocious bear",
    "penguin"
];


app.get('/animals', function(req, res) {
    res.send(animals);
});

app.listen(6060);
