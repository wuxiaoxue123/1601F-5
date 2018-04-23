var Mock = require("mockjs")
var Random = Mock.Random
module.exports = function(app) {
    app.get("/api", function(req, res, next) {
        var data = require("../mock/data")
        res.send(data)
    })
}