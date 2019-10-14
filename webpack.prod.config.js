const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config')

const prodConfig = merge(baseConfig, {
  mode: 'production',
  devtool: false,
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
     cacheGroups: {
        vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
})

module.exports=prodConfig;