let getArticle = require("../servers/getArticleTags")
exports.ARTICLE_TAGS = async (ctx) => {
    var _articleTags = await getArticle(ctx);
}