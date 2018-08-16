const tn = require("tinify");
const path = require("path");
const sharp = require("sharp");
const fs = require('fs')
tn.key = "C4XInoPhN9cq0l2bjxTpisBlgGu2u9xM";

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
            if (array[i] == "time") {
                r[array[i]] = dateFormat(doc[array[i]], "yyyy-MM-dd")
            }
        }
    } else {
        r = [];
        for (var k = 0; k < doc.length; k++) {
            r[k] = {};
            for (i in array) {
                r[k][array[i]] = doc[k][array[i]]
                if (array[i] == "time") {
                    r[k][array[i]] = dateFormat(doc[k][array[i]], "yyyy-MM-dd")
                }

            }
        }

    }
    return r;
}


exports.getImageFormat = (file) => {
    const length = file.name.split(".").length
    return file.name.split(".")[length - 1]
}

/**
 * 
 * @param {*} obj
 * obj.foldName 图片父级文件夹名称
 * obj.file 文件名称
 * obj.imgPublicPath 文件的公共路径
 */
exports.compressImage = async (obj) => {
    //判断当前浏览器是否为chrome
    // const isWebkit = obj.ua.match(/chrome/);
    return new Promise((resolved, rejected) => {
        fs.readFile(obj.file.path, (err, sendData) => {
            if (err) throw err;
            tn.fromBuffer(sendData).toBuffer((err, resultData) => {
                if (err) throw err;
                //渲染普通格式图片
                const newImgPath = path.resolve(__dirname, path.normalize(`${obj.imgPublicPath}/image/${obj.foldName}/${obj.file.name}`))
                fs.writeFile(newImgPath, resultData, (err) => {
                    if (err) throw err;
                    resolved("success!")
                })
            })
        })
    })

}

