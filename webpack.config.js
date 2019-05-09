const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { 
        test: /\.css$/, 
        use: [
          'vue-style-loader', 
          'css-loader', 
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
    ]
  },
  devServer: {
    open: true,
    hot: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};