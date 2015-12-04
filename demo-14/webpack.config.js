'use strict';

// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var outPath = __dirname;

require('es6-promise').polyfill();

module.exports = {

  entry: './js/main.js',

  output: {
    path: outPath,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      // },
      // {
      //   css: /\.css$/,
      //   loader: ("style?css!csslint")
      // },
      // {
      //   scss: /\.scsss$/,
      //   loader: ExtractTextPlugin.extract("style", "css!postcss!csslint!sass")
      },
      {
          test: /\.(woff|woff2|eot|ttf)$/i,
          loader: "file-loader?name=fonts/[name]-[hash].[ext]"
      },
    ]
  },

  postcss: [autoprefixer({browsers: ['last 2 versions']})],

  // plugins: [
  //     new ExtractTextPlugin("styles.css")
  // ],

  stats: {
    // Colored output
    colors: true
  },

  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};