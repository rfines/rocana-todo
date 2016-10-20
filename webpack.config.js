var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var webpack = require('webpack');
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['lodash'],
          presets: [ 'es2015', 'react' ] }
      }
    ]
  },
  'plugins': [
    new LodashModuleReplacementPlugin,
    new webpack.optimize.OccurrenceOrderPlugin,
    new webpack.optimize.UglifyJsPlugin,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ]
};
