var Mock=require("mockjs")
var Random = Mock.Random
module.exports=function(app){
  var List = [{
    "id": "1",
    "images": "./src/static/img/img_01.png",
    "quantity": 1,
    "subtitle": "不用排队就能吃到“网红团子”",
    "name": "【网红】沈大成蛋黄肉松青团240克",
    "vip_price": 2860,
    }, {
        "id": "2",
        "images": "./src/static/img/img_02.png",
        "quantity": 1,
        "subtitle": "鹿晗+关晓彤 明星同款口罩 对抗病毒",
        "name": "PITTA MASK 口罩深灰色3枚装",
        "vip_price": 5800,
    
    }, {
        "id": "3",
        "images": "./src/static/img/img_03.png",
        "quantity": 1,
        "subtitle": "集合7种营养的补给站 开张啦",
        "name": "每日坚果25g*5包",
        "vip_price": 1890,
    }, {
        
        "id": "4",
        "images": "./src/static/img/img_03.png",
        "quantity": 2,
        
        "subtitle": "要不要来一口92年的摩奇",
        "name": "摩奇桃汁饮料250ml*4",
        "vip_price": 1290,
}]
    app.get("/list",(req,res,next)=>{
        
        res.send(List)
    })

    app.get("/detail",(req,res,next)=>{
      let data = List.filter((i)=>{
        return i.id == req.query.id
      })
      res.send(data)
    })

}