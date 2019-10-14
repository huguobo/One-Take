const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin }  = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  // mode: 'development',
  // devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"],
          plugins: [
           'transform-class-properties'
            ]
        }
      },
      {
        test: /\.s?css$/,
        include: [path.resolve(__dirname, 'src')],
        use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
      },
    ]
  },
  plugins:[
     // 该插件能将生成的入口js文件注入到模板html内
     new HtmlWebpackPlugin({
       template:'./index.html'
    }),
    new ManifestPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new CleanWebpackPlugin({ verbose: true }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
          from: 'src/assets/',
          to: 'assets',
          ignore: ['.*']
      }
  ])
  ],
  performance: {
    // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
    hints: false,
  } 
}