'use strict';
console.log('Load base webpack.config.js');

var config = {
  entry: {
    app: [
      './entry.js'
    ]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  }
};

console.log(config);
module.exports = config;
