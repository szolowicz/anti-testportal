const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const minifyHtmlWebpackPlugin = require('minify-html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new minifyHtmlWebpackPlugin({
      afterBuild: true,
      src: './public/popup',
      dest: './dist/popup',
      rules: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        minifyJS: true
      }
    })
  ]
});
