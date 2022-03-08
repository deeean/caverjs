const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'source-map',
  entry: './src/index.ts',
  target: 'node',
  output: {
    clean: true,
    filename: 'index.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            compiler: 'ttypescript',
          },
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.ts', '.js', '.json'],
  },
};
