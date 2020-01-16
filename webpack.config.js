const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: path.resolve(__dirname, './example/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  mode: "development",
  devtool: 'source-map',
  resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(scss|css)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[name]--[hash:base64:5]',
              },
              localsConvention: 'camelCase',
              // localIdentName: "[name]__[local]___[hash:base64:5]"
            },
          },
          'postcss-loader',
          'sass-loader'
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html'
    }),
    new ForkTsCheckerWebpackPlugin(),
  ]
};
