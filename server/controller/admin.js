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
  const reader = fs.createReadStream(file.path);
  const stream = fs.createWriteStream(path.resolve(__dirname, "../public/image/article-cover/" + time.getTime() + "_" + file.name))
  var renderStream = reader.pipe(stream);
  ctx.body = await streamFunc(renderStream);
}

function streamFunc(s) {
  return new Promise((reo, rej) => {
    s.on("finish", () => {
      reo("success")
    })
  })
}