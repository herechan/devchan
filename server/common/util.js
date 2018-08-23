const tn = require("tinify");
const path = require("path");
const sharp = require("sharp");
const fs = require('fs');
// const gm = require("gm").subClass({ imageMagick: true })
// tn.key = "C4XInoPhN9cq0l2bjxTpisBlgGu2u9xM";

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

exports.compressImage = async (obj) => {
    //判断当前浏览器是否为chrome
    // const isWebkit = obj.ua.match(/chrome/);
    return new Promise((resolved, rejected) => {
        //首先在本地服务器进行webp格式的转化
        const webpPath = normalizeImgTargetPath("webp", obj)
        sharp(obj.file.path)
            .toFile(webpPath)
        //第二部连接tinyping进行原图的压缩
        fs.readFile(obj.file.path, (err, sendData) => {
            if (err) throw err;
            tn.fromBuffer(sendData).toBuffer((err, resultData) => {
                if (err) throw err;
                //渲染普通格式图片
                const newImgPath = normalizeImgTargetPath("image", obj)
                fs.writeFile(newImgPath, resultData, (err) => {
                    if (err) throw err;
                    console.log("compress!")
                    resolved({
                        msg: "ok",
                        status: 1,
                        result: ""
                    })
                })
            })
        })
    })
}
 */
/**
 * 
 * @param {Object} obj 
 * obj.foldName 图片父级文件夹名称
 * obj.file 文件名称
 * obj.imgPublicPath 文件的公共路径
 * @returns {String} 截取出一个公共路径用于返回前端
 */
exports.compressImage = async (obj) => {
    return new Promise((resolved, rejected) => {
        const random = Date.now();
        const webpPath = normalizeImgTargetPath("webp", obj, random);
        const originPath = normalizeImgTargetPath("image", obj, random);
        //第一步转换webp格式
        // gm(obj.file.path)
        //     .quality(50)
        //     .write(webpPath, (err) => {
        //         if (err) throw err
        //         //第二步按原来的格式压缩
        //         gm(obj.file.path)
        //             .quality(50)
        //             .write(originPath, (err) => {
        //                 if (err) throw err
        //                 const resultPath = originPath.split("public\\image")[1];
        //                 resolved(
        //                     resultPath
        //                 )
        //             })
        //     })
        let quality = 65;
        if (obj.file.path.match(/.png/)) {
            quality = 95
        } else {
            quality = 65;
        }

        var webpState = sharp(obj.file.path)
            .webp({
                quality: 75
            })
            .toFile(webpPath, (err) => {
                if (err) console.log(err)
            })

        sharp(obj.file.path)
            .jpeg({
                quality: quality
            }).toFile(originPath, (err) => {
                if (err) console.log(err);
                const resultPath = originPath.split("public\\image")[1];
                resolved(resultPath)
            })

    })
}

/**
 * 
 * @param {Object} obj 
 * obj.foldName 图片父级文件夹名称
 * obj.file 文件名称
 * obj.imgPublicPath 文件的公共路径
 * @returns {String} 截取出一个公共路径用于返回前端
 */
exports.articleImageCompress = async (obj) => {
    return new Promise((resolved, rejected) => {
        const random = Date.now();
        const webpPath = normalizeImgTargetPath("webp", obj, random);
        const originPath = normalizeImgTargetPath("image", obj, random);
        // gm(obj.file.path)
        //     .quality(50)
        //     .write(originPath, (err) => {
        //         if (err) throw err;
        //         gm(obj.file.path)
        //             .quality(50)
        //             .write(webpPath, (err) => {
        //                 if (err) throw err;
        //                 const resultPath = originPath.split("public\\image")[1];
        //                 resolved(resultPath)
        //             })
        //     })
        let quality = 65;
        if (obj.file.path.match(/.png/)) {
            quality = 95
        } else {
            quality = 65;
        }

        var webpState = sharp(obj.file.path)
            .webp({
                quality: 75
            })
            .toFile(webpPath, (err) => {
                if (err) console.log(err)
            })

        sharp(obj.file.path)
            .jpeg({
                quality: quality
            }).toFile(originPath, (err) => {
                if (err) console.log(err);
                const resultPath = originPath.split("public\\image")[1];
                resolved(resultPath)
            })
    })
}


/**
 * @param {String} type 文件的类型 普通image格式或者webp格式
 * @param {Object} obj  文件对象
 * @returns {String} 处理之后带后缀名的新路径
 */
function normalizeImgTargetPath(type, obj, random) {
    let name = obj.file.name.split(".")[0];
    let nameFormat = "";
    if (type == "webp") {
        nameFormat = name + ".webp";
    } else {
        nameFormat = obj.file.name;
    }
    let resolvedPath = path.resolve(__dirname, path.normalize(`${obj.imgPublicPath}/${type}/${obj.foldName}/${random}_${nameFormat}`))
    return resolvedPath
}