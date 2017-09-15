"use strict";

module.exports = {
  context: __dirname + '/app',
  entry: './index',
  output: {
  	path: __dirname + '/dist',
  	filename: 'bundle.js'
  }
};