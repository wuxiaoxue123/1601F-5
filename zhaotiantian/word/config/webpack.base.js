var path = require("path")
var htmlWebpackPlugin=require("html-webpack-plugin")
var webpack=require("webpack")
var config=require("./config")
module.exports = {
  entry: config.base.entry,
  output:{
    path:config.base.outputPath,
    filename:"js/"+config.base.outputFileName
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: config.base.babel
        }]
      },
      {
        test:/\.vue$/,
        use:["vue-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ["url-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  },
  resolve:{
    extensions: [".js", ".vue"],
    alias:{
      "vue":"vue/dist/vue.js"
    }
  },
  plugins:[
    new htmlWebpackPlugin({
        filename:"index.html",
        template:config.base.templatePath,
        minify:config.base.htmlMinify
      })
  ]
}