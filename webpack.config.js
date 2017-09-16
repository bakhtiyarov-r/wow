"use strict";

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/app',
  entry: './index',
  output: {
  	path: __dirname + '/dist',
  	filename: 'bundle.js'
  },

   module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },


/*  {
  		test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
  		loader: 'file?name=[path][name].[ext]'
  	}

  */

  plugins: [
     new ExtractTextPlugin('./css/styles.css'),
  ]

};