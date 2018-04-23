// webpack  配置借口before
// 不用mock数据的话就不需要引入
// commonjs规范
module.exports = function(app){
  app.get("/api/picture",(req,res,next)=>{
        var picture = [
             "../../static/img/img3.jpg",
              "../../static/img/img4.jpg",
              "../../static/img/img5.jpg",
              "../../static/img/img6.jpg",
              "../../static/img/img7.jpg"
        ]
        res.send(picture)
  })
}