'use strict';

require('node-jsx').install({ extension: '.jsx' });
var serverRender = require('./serverRender');
var express = require('express');
var app = express();

app.use('/', serverRender);

//app.get('*', function(req, res) {
  //res.sendFile(__dirname + '/index.html');
//});

var server = app.listen(4000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
