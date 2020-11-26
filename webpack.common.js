const path = require('path');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'bypass/bypass': './src/bypass/main.ts',
    'popup/popup': './src/popup/popup.ts'
  },
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
        { from: './public', to: './' }
      ]
    })
  ]
};
