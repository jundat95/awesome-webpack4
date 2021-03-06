const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
    // another: './src/another.js',
    detail: './src/detail.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management 1',
      filename: 'index.html',
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization: {
    sideEffects: true,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      maxSize: 3000000,
      // cacheGroups: {
      //   vendor: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name(module) {
      //       // get the name. E.g. node_modules/packageName/not/this/part.js
      //       // or node_modules/packageName
      //       const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

      //       // npm package names are URL-safe, but some servers don't like @ symbols
      //       return `npm.${packageName.replace('@', '')}`;
      //     },
      //   },
      // },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.bundle\.js$/,
        use: 'bundle-loader'
      }
    ]
  }
};