var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname + '/')); //Serves resources from public folder
app.use('/scripts', express.static(__dirname + '/node_modules/'));

var server = app.listen(5000);
