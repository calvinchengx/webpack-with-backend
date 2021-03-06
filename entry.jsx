/* entry.js */
'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

document.addEventListener('DOMContentLoaded', function(event) {
  Router.run(routes, Router.HistoryLocation, function(Handler, state) {
    React.render(<Handler />, document);
  });
});
