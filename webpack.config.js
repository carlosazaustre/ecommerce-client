const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },

  entry: [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index.js')
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Redux Ecommerce',
      filename: 'index.html'
    })
  ],

  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 3000,
    inline: true,
    contentBase: path.join(__dirname, './src')
  }
};
