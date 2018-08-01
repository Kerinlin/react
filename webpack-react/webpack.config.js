const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: /src/,
        exclude: /node_modules/,  //排除
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      { 
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: '/static/images/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      file: 'index.html',
      template: 'public/index.html'
    })
  ],
  devServer: {
    // contentBase:'./public',
    port: 3002,
    open: true
  },
  devtool: 'inline-source-map'
}
