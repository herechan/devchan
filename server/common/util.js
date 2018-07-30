//dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss");
exports.dateFormat = dateFormat
function dateFormat(time, fmt) {
    //time为getTime()返回的毫秒数
    var o = {
        "M+": time.getMonth() + 1,                 //月份 
        "d+": time.getDate(),                    //日 
        "h+": time.getHours(),                   //小时
        "m+": time.getMinutes(),                 //分
        "s+": time.getSeconds(),                 //秒 
        "q+": Math.floor((time.getMonth() + 3) / 3), //季度 
        "S": time.getMilliseconds()             //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}



exports.getProperty = (array, doc) => {
    var r;
    var isArray = doc instanceof Array;
    if (!isArray) {
        r = {}
        for (i in array) {
            r[array[i]] = doc[array[i]]
            if(array[i] == "time"){
                r[array[i]] = dateFormat(doc[array[i]],"yyyy-MM-dd")
            }
        }
    } else {
        r = [];
        for (var k = 0; k < doc.length; k++) {
            r[k] = {};
            for (i in array) {
                r[k][array[i]] = doc[k][array[i]]
                if (array[i] == "time") {
                    r[k][array[i]] = dateFormat(doc[k][array[i]],"yyyy-MM-dd")
                }

            }
        }

    }
    return r;
}
