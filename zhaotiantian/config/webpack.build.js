var path = require("path")
var webpack=require("webpack")
var config=require("./config")
const merge = require('webpack-merge')
const baseWebpack=require("./webpack.base.js")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(baseWebpack, {
  devtool:config.build.devtool,
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
        name:"common.js",
        filename:"js/common.js"
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        include: /\/src/,
        compress: {
          warnings: false
        },
        sourceMap:config.build.uglifyJsSourceMap,
        parallel: true  
      },
    })
  
  ],

})
