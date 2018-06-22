let getArticle = require("../servers/getArticleTags")
exports.ARTICLE_TAGS =async (ctx)=>{
    var _articleTags = await getArticle();
    // return _articleTags
    console.log(_articleTags)
}