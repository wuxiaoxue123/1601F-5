let bus = {
    eventObj: {},
    $emit(event, ...arg) {
        sessionStorage.setItem(event, arg);
        if (this.eventObj[event]) {
            this.eventObj[event].forEach(function(item) {
                item(arg)
            }, this);
        }
    },
    $on(event, callback) {
        var val = sessionStorage.getItem(event);
        console.log(val, '66666666666')
        if (this.eventObj.hasOwnProperty(event)) {
            this.eventObj[event].push(callback(val))
        } else {
            let obj = {
                [event]: [callback(val)]
            }
            Object.assign(this.eventObj, obj)
        }
    },
    $destory(event) {
        delete this.eventObj[event] //注销
    }
};
module.exports = bus

