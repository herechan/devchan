const fs = require("fs")
const path = require("path");
let getArticle = require("../dao/writting-center/getArticleTags")
let uploadWrittingCover = require("../dao/writting-center/uploadAricleCover");
let resObj = require("../util/resObj");
const formidable = require("formidable");

exports.ARTICLE_TAGS = async (ctx) => {
  await getArticle(ctx);
}
//封面
exports.ARTICLE_COVER = async (ctx, next) => {

  const file = ctx.request.files.file;
  const coverName = file.path.split("\\")[file.path.split("\\").length - 1];
  const time = new Date()
  const newPath = path.resolve(__dirname, "../public/image/article-cover/" + time.getTime() + "_" + file.name)
  const reader = fs.createReadStream(file.path);
  const stream = fs.createWriteStream(newPath);
  var renderStream = reader.pipe(stream);
  ctx.body = await streamFunc(renderStream, newPath);
}

//封面删除
exports.ARTICLE_COVER_DELETE = async (ctx) => {
  var filePath = path.resolve(__dirname, `../public${ctx.request.body.coverPath}`);
  ctx.body = await deleteCover(filePath)
}

//文章内容图片上传
exports.ARTICLE_IMAGE_UPLOAD = async (ctx, next) => {
  var file = ctx.request.files.image;
  var reader = fs.createReadStream(file.path);
  var newPath = path.resolve(__dirname, "../public/image/article-image/" + file.name);
  var writter = fs.createWriteStream(newPath);
  var articleImageStream = reader.pipe(writter);
  ctx.body = await streamFunc(articleImageStream,newPath)
}

function writeArticleImage(ctx) {
  var form = new formidable.IncomingForm();
  return new Promise((reso, reje) => {
    form.parse(ctx.req, async (err, file, files) => {
      if (err) throw err;
      console.log(file)
      console.log(files)
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
  fs.unlink(path, (err) => {
    return new Promise((reo, rej) => {
      if (err) {
        throw err;
        rej();
      }
      reo(resObj(1, "remove success!", ""));
    })
  })
}