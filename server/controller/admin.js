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
  // const coverName = file.path.split("\\")[file.path.split("\\").length - 1];
  const format = util.getImageFormat(file)
  util.compressImage({
    ua:ctx.headers["user-agent"],
    file:file,
    imgPublicPath:imgPublicPath,
    foldName:"article-cover"
  })
  const time = new Date();
  const newPath = path.resolve(__dirname, "../../public/image/article-cover/" + time.getTime() + "_" + file.name)
  const reader = fs.createReadStream(file.path);
  const stream = fs.createWriteStream(newPath);
  var renderStream = reader.pipe(stream);
  ctx.body = await streamFunc(renderStream, newPath);
}

//封面删除
exports.ARTICLE_COVER_DELETE = async (ctx) => {
  var filePath = path.resolve(__dirname, `../../public${ctx.request.body.coverPath}`);
  ctx.body = await deleteCover(filePath)
}

//文章内容图片上传
exports.ARTICLE_IMAGE_UPLOAD = async (ctx, next) => {
  var file = ctx.request.files.image;
  var reader = fs.createReadStream(file.path);
  var newPath = path.resolve(__dirname, "../../public/image/article-image/" + file.name);
  var writter = fs.createWriteStream(newPath);
  var articleImageStream = reader.pipe(writter);
  ctx.body = await streamFunc(articleImageStream, newPath);
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


function deleteCover(path) {
  return new Promise((reo, rej) => {
    fs.unlink(path, (err) => {
      if (err) {
        throw err;
        rej();
      }
      reo(resObj(1, "remove success!", ""));
    })
  })
}