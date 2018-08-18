const path = require("path");
/**
 * 
 * @param {Object} obj 
 * obj.imagePath {String} 封面图片的路径
 * obj.ctx ctx对象
 * @returns {String} fullPath 图片路径
 */
exports.articleCoverPathHandle = async (obj) => {
    const isSupportWebp = true;
    const folderFormat = isSupportWebp ? "webp" : "image"
    let imagePath = obj.imagePath;
    let fullPath = "";
    if (isSupportWebp) {
        let imageFilePath = imagePath.substring(0, imagePath.lastIndexOf("."));
        fullPath = path.normalize("\\wbep\\", imageFilePath);
    } else {
        fullPath = path.normalize("\\image\\", imageFilePath);
    }
    return fullPath;
}