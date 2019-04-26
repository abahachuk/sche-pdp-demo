var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname + '/')); //Serves resources from public folder
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(5000);
