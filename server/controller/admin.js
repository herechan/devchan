const fs = require("fs")
const path = require("path");
let writtingCenter = require("../dao/writtingCenter")
let resObj = require("../common/resObj");
const formidable = require("formidable");
const util = require("../common/util")
const imgPublicPath = "../../public/"


exports.ARTICLE_TAGS = async (ctx) => {
  await writtingCenter.getArticleTags(ctx);
}
//上传封面
exports.ARTICLE_COVER = async (ctx, next) => {
  const file = ctx.request.files.file;
  // const format = util.getImageFormat(file);
  const commonPath = await util.compressImage({
    ua: ctx.headers["user-agent"],
    file: file,
    imgPublicPath: imgPublicPath,
    foldName: "article-cover"
  })
  // const time = new Date();
  // const newPath = path.resolve(__dirname, "../../public/image/article-cover/" + time.getTime() + "_" + file.name)
  // const reader = fs.createReadStream(file.path);
  // const stream = fs.createWriteStream(newPath);
  // var renderStream = reader.pipe(stream);
  // ctx.body = await streamFunc(renderStream, newPath);
  ctx.body = resObj(1, "ok", commonPath)
}

//封面删除
exports.ARTICLE_COVER_DELETE = async (ctx) => {
  let fileFullPath = ctx.request.body.coverPath;
  let fileName = fileFullPath.substring(0, fileFullPath.lastIndexOf("."))
  const originPath = path.resolve(__dirname, `../../public/image${fileName}`);
  const webpPath = path.resolve(__dirname, `../../public/webp${fileName}`);
  const deleteOriginPath = await deleteCover(originPath)
  const deleteWebpPath = await deleteCover(webpPath);
  ctx.body = resObj(1, "remove success!", "")
}

//文章内容图片上传
exports.ARTICLE_IMAGE_UPLOAD = async (ctx, next) => {
  var file = ctx.request.files.image;
  // var reader = fs.createReadStream(file.path);
  // var newPath = path.resolve(__dirname, "../../public/image/article-image/" + file.name);
  // var writter = fs.createWriteStream(newPath);
  // var articleImageStream = reader.pipe(writter);
  // ctx.body = await streamFunc(articleImageStream, newPath);
  const articleImagePath = await util.articleImageCompress({
    file: file,
    imgPublicPath: imgPublicPath,
    foldName: "article-image"
  });
  ctx.body = resObj(1, "upload success!", articleImagePath)
}

//文章保存
exports.ARTICLE_SAVE = async (ctx, next) => {
  await writtingCenter.saveArticle(ctx);
}

//验证登录权限
exports.CHECK_AUTH = async (ctx, next) => {
}
function writeArticleImage(ctx) {
  var form = new formidable.IncomingForm();
  return new Promise((reso, reje) => {
    form.parse(ctx.req, async (err, file, files) => {
      if (err) throw err;
    })
  })
}


function streamFunc(s, newPath) {
  return new Promise((reo, rej) => {
    s.on("finish", () => {
      reo(resObj(
        1,
        "upload success!",
        newPath.split("public")[1]
      ))
    })
  })
}


function deleteCover(commonPath) {
  let fileName = commonPath.substring(commonPath.lastIndexOf("\\") + 1);
  let filePath = commonPath.substring(0, commonPath.lastIndexOf("\\"));
  return new Promise((reo, rej) => {
    const files = fs.readdirSync(filePath)
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      let elementName = element.substring(0, element.lastIndexOf("."));
      if (elementName == fileName) {
        fs.unlink(path.resolve(filePath, element), (err, data) => {
          if (err) {
            throw err;
            rej();
          }
          reo()
        })
        break;
      }
    }
  })
}