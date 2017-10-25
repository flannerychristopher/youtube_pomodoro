var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, "./public"),
    filename: './bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/' },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: '/node_modules/' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};