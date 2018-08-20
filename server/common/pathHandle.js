const path = require("path");
/**
 * 
 * @param {Object} obj 
 * obj.imagePath {String} 封面图片的路径
 * obj.isSupportWebp {Boolean} 是否支持webp格式图片
 * @returns {String} fullPath 图片路径
 */
exports.articleCoverPathHandle =  (obj) => {
    const isSupportWebp = obj.isSupportWebp;
    const folderFormat = isSupportWebp ? "webp" : "image"
    let imagePath = obj.imagePath;
    let fullPath = "";
    if (isSupportWebp) {
        let imageFilePath = imagePath.substring(0, imagePath.lastIndexOf("."));
        fullPath = path.normalize(path.join("\\webp\\", imageFilePath+".webp"));
    } else {
        fullPath = path.normalize(path.join("\\image\\", imagePath));
    }
    return fullPath;
}

exports.test = (obj) => obj