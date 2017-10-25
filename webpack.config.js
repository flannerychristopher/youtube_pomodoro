var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
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
  plugins: [
    new webpack.DefinePlugin({             
      API_HOST: JSON.stringify(process.env.API_KEY)
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};