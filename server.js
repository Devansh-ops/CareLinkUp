var express = require('express');

var app = express();

app.use(express.static('templates'));

app.listen(8080);