var ArticleTagsModel = require("../model/articleTags");
var resObj = require("../util/resObj");

exports.getArticle = (ctx) => {
    return new Promise((resolved, rejected) => {//在koa-router中，调用上下文需要包含在Promise中
        ArticleTagsModel.find({}).exec((err, doc) => {
            if (err) {
                throw "warning:articleTags error";
            } else if (doc.length > 0) {
                ctx.body = resObj(1,"success!",doc);
                resolved()
            } else {
                return console.log("articleTags not found")
            }
        })
    })
}

exports.saveArticle = (ctx) => {
    return new Promise((resolved, rejected) => {

    })
}