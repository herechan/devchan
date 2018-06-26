const fs = require("fs")
const path = require("path");
let getArticle = require("../dao/writting-center/getArticleTags")
let uploadWrittingCover = require("../dao/writting-center/uploadAricleCover");
let resObj = require("../util/resObj")

exports.ARTICLE_TAGS = async (ctx) => {
  await getArticle(ctx);
}
//文章封面
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
//封面删除
exports.ARTICLE_COVER_DELETE = async (ctx) => {
  var filePath = path.resolve(__dirname, `../public${ctx.request.body.coverPath}`);
  ctx.body = await deleteCover(filePath)
}

function deleteCover(path) {
  fs.unlink(path, (err) => {
    return new Promise((reo, rej) => {
      if (err) {
        throw err;
        rej();
      }
      reo(resObj(1, "remove success!", ""))
    })
  })
}