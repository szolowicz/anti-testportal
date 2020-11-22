const path = require('path');
const copyPlugin = require("copy-webpack-plugin");
const minifyHtmlWebpackPlugin = require('minify-html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'main': './src/main.ts',
    'popup/overlay': './src/popup/overlay.ts'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new copyPlugin({
      patterns: [
        { from: 'public', to: './' }
      ]
    }),
    new minifyHtmlWebpackPlugin({
      src: './public/popup',
      dest: './dist/popup',
      rules: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        minifyJS: true,
      }
    })
  ]
};
