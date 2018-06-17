const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
};

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: false
  }
});


module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
    hot: true
  },

  performance: {
    hints: false
  },

  devtool: '#eval-source-map',

  module: {
    rules: [
      ...[createLintingRule()]
    ],
  },

  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')})
  ]
});
