var Mock = require("mockjs");
var key = Mock.Random.integer(1,10)
var money = Mock.Random.integer(300,1000)

let list = Mock.mock({
        'list|1-10': [{
            'id|+1': 1,
            'text':'@cname',
            'city':'@region',
            'content':"@cparagraph"
        }]
    })
module.exports = function(app){
  app.get("/api",function(req,res,next){
    var data = Mock.mock({
        'list|1-10': [{
            'id|+1': 1,
            'img':'./src/static/img/img'+key+'.png',
            'title':'6G+128G正品官方授权R11s手机全面屏5.8寸',
            'price':money,
            'text':'免运费',
            'pay':'0人付款',
            'city':'@region'
        }]
    })
    res.send(data)
  })

  app.get("/api/list",function(req,res,next){
    res.send(list)
  })

  app.get("/api/detail",function(req,res,next){
    // console.log(data)
    let data = list.list.filter((i)=>{
      return i.id==req.query.id
    })
      res.send(data)
  })

}