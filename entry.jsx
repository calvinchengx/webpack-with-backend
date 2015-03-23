/* entry.js */
'use strict';

document.write('<h1>Hello World!</h1>');
document.write('<div id="wrap"></div>');

var React = require('react');
var Hello = require('./components/Hello');

React.render(<Hello />, document.getElementById('wrap'));
