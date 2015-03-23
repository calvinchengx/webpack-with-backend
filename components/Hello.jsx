'use strict';

var React = require('react');

var Hello = React.createClass({
  render: function() {
    return <div>Hello React, render on client and on server</div>
  }
});

module.exports = Hello;
