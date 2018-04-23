var path=require("path")
module.exports={
  base:{
    entry:path.join(__dirname,"../src/app.js"),
    outputPath:path.join(__dirname,"../dist"),
    outputFileName:"[id]-[name]-[hash].js",
    templatePath:"./index.html",
    htmlMinify: {
      removeComments: true,         
      collapseWhitespace: true,   
      removeAttributeQuotes: true,  
      removeEmptyAttributes:true,  
    }
  },
  dev:{
    host:"localhost",
    port:8080,
    browserOpen:true,
    devtool:"cheap-module-eval-source-map",
  },
  build:{
    uglifyJsSourceMap:false,
    devtool:false
  },
  babel:{
    presets: [
      "env"
    ]
  }
}