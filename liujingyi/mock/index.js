var Mock = require("mockjs");
var Random = Mock.Random;
var data = Mock.mock({
    'list|1-100': [{
        'id|+1': 1,
        'name': "@cname",
        "addr": "@city",
        "content": "@cparagraph"
    }]
})
module.exports = function (app) {
    app.get("/api", function (req, res, next) {
        res.send(data)
    });
    app.get("/api/list", function (req, res, next) {
        res.send(data)
    });
    app.get("/api/detail", function (req, res, next) {
        let datas = data.list.filter((i) => {
            return i.id == req.query.id
        })
        res.send(datas)
    });
}