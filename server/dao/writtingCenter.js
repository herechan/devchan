var resObj = require("../util/resObj");
var ArticleTagsModel = require("../model/articleTags");
var ArticleModel = require("../model/article");
exports.getArticle = (ctx) => {
    return new Promise((resolved, rejected) => {//在koa-router中，调用上下文需要包含在Promise中
        ArticleTagsModel.find({}).exec((err, doc) => {
            if (err) {
                throw "warning:articleTags error";
            } else if (doc.length > 0) {
                ctx.body = resObj(1, "success!", doc);
                resolved()
            } else {
                return console.log("articleTags not found")
            }
        })
    })
}

exports.saveArticle = (ctx) => {
    return new Promise((resolved, rejected) => {
        var data = ctx.request.body;
        console.log(ArticleModel)
        ArticleModel.create({
            coverPath: data.coverPath,
            intro: data.intro,
            mdText: data.mdText,
            tags: data.tags,
            title: data.title,
            like: 0,
            watch: 0
        }, (err,doc) => {
            if (err) {
                throw err;
                rejected(err)
            } else {
                ctx.body = resObj(1, "Save success!", "")
                resolved()
            }
        })
    })
}
