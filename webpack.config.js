"use strict";

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
        test: /\.js$/,
        use: ['babel-loader?presets[]=es2015', 'angularjs-template-loader']
     
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }

  
    ]
  },




  plugins: [
     new ExtractTextPlugin('./css/styles.css'),

     new HtmlWebpackPlugin({template: 'index.html'})
  ]

};