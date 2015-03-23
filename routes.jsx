'use strict';

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

/* Components */
var App = require('./App');
var Hello = require('./components/Hello');

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="hello" handler={Hello} />
  </Route>
);

module.exports = routes;
