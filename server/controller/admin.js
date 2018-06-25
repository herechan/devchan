const fs = require("fs")
const path = require("path");
let getArticle = require("../dao/writting-center/getArticleTags")
let uploadWrittingCover = require("../dao/writting-center/uploadAricleCover");

exports.ARTICLE_TAGS = async (ctx) => {
  await getArticle(ctx);
}
//文章封面
exports.ARTICLE_COVER = async (ctx) => {
  const file = ctx.request.files.file;
  const coverName = file.path.split("\\")[file.path.split("\\").length - 1];
  const time = new Date()
  const reader = fs.createReadStream(file.path);
  const stream = fs.createWriteStream(path.resolve(__dirname, "../public/image/article-cover/" + time.getTime() + ".jpg"))
  reader.pipe(stream);
  ctx.body = ""

  //  await uploadWrittingCover(ctx);
}