
module.exports = {
  entry: [
    './src/index.js'
  ],
  
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/' },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: '/node_modules/' }
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
  }
};