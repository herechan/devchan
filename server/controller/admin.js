let getArticle = require("../dao/writting-center/getArticleTags")
let uploadWrittingCover = require("../dao/writting-center/uploadWrittingCover")
exports.ARTICLE_TAGS = async (ctx) => {
  await getArticle(ctx);
}
//文章封面
exports.ARTICLE_COVER = async (ctx) => {
   await uploadWrittingCover(ctx);
}