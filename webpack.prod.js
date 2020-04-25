const path = require('path') 
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
mode: 'production',
entry: './src/client/index.js',
module: {
  rules: [
    {
      test: '/\.js$/',
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
      ],
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  ]
},
plugins: [
  new HtmlWebpackPlugin({
    template: "./src/client/views/index.html",
    filename: "./index.html",
  }),
  new WorkboxPlugin.GenerateSW(),

]
}
