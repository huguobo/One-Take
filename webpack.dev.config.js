const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config')
const path = require('path')
const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: false,
    compress: true,
    port: 9000,
    hot: true,
    publicPath: '/',
    historyApiFallback: {
      rewrites: [
          { from: /.*/, to: path.posix.join('/', 'index.html') },
      ],
  },
  },
})

module.exports=devConfig;