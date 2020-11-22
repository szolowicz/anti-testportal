import path from 'path';
import copyPlugin from 'copy-webpack-plugin';

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
          loader: ['babel-loader', 'ts-loader'],
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
    })
  ]
};
