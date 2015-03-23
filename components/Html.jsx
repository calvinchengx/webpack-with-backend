'use strict';

var React = require('react');

// Handle the HTML rendering on the server
var Html = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>HelloReact</title>
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.markup}}>
        </body>
        <script src="./bundle.js"></script>
      </html>
    );
  }
});

module.exports = Html;
