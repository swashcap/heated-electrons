'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './app/'),
  devServer: {
    clientLogLevel: 'error',
    contentBase: path.resolve(__dirname, './app/'),
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    publicPath: 'http://localhost:8080/',
  },
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './render/index.js',
  ],
  module: {
    rules: [{
      loader: 'babel-loader',
      include: path.join(__dirname, 'app'),
      options: {
        cacheDirectory: true,
        presets: ['env'],
      },
      test: /\.(js|jsx)$/,
    }, {
      rules: [{
        loaders: [
          'style-loader',
          'css-loader',
        ],
        test: /\.css$/,
      }],
    }],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '.tmp'),
    pathinfo: true,
    publicPath: 'http://localhost:8080/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  // target: 'electron-renderer',
};

