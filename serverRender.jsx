'use strict';

console.log('Server-Side Render of ReactJS components');
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var Html = require('./components/Html');

var ServerRender = function(req, res, next) {
  Router.run(routes, req.url, function(Handler, state) {
    var markup = React.renderToString(<Handler />);
    var html = React.renderToStaticMarkup(<Html markup={markup} />);
    res.send('<!DOCTYPE html>' + html);
  });
};

module.exports = ServerRender;
