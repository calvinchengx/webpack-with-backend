'use strict';

console.log('Server-Side Render of ReactJS components');
var React = require('react');

var Html = require('./components/Html');
var Hello = require('./components/Hello');

var ServerRender = function(req, res, next) {
  var markup = React.renderToString(<Hello />);
  var html = React.renderToStaticMarkup(<Html markup={markup} />);
  res.send('<!DOCTYPE html>' + html);
};

module.exports = ServerRender;
