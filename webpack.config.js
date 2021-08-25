const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();

const isDev = process.env.ENV === 'development';
const entry = ['./src/frontend/index.js'];

if (isDev) {
  entry.push(
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true'
  );
}

module.exports = {
  entry,
  mode: process.env.ENV,
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: 'assets/app.js',
    publicPath: '/',
    assetModuleFilename: 'assets/[hash].[ext]',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[md5:hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
    new MiniCssExtractPlugin({
      filename: 'assets/app.css',
    }),
  ],
};
