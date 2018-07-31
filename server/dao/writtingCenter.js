var resObj = require("../common/resObj");
var ArticleTagsModel = require("../model/articleTags");
var ArticleModel = require("../model/article");
var util = require("../common/util");
const path = require("path")
exports.getArticleTags = (ctx) => {
    return new Promise((resolved, rejected) => {//在koa-router中，调用上下文需要包含在Promise中
        ArticleTagsModel.find({}).exec((err, doc) => {
            if (err) {
                ctx.throw("warning:articleTags error");
            } else if (doc.length > 0) {
                ctx.body = resObj(1, "success!", doc);
                resolved();
            } else {
                return ctx.throw("articleTags not found");
            }
        })
    })
}

exports.saveArticle = (ctx) => {
    return new Promise((resolved, rejected) => {
        var data = ctx.request.body;
        if (!data.coverPath || !data.intro || data.tags.length == 0 || !data.title) {
            ctx.body = resObj(0, "Save error!", "")
        }
        var tagArr = [];
        data.tags.forEach(element => {
            if (element) {
                tagArr.push(element)
            }
        });
        var miniImagePath = "/image/mini-image/" + tagArr[0] + ".png"
        ArticleModel.create({
            coverPath: data.coverPath,
            intro: data.intro,
            mdText: data.mdText,
            tags: tagArr,
            title: data.title,
            like: 0,
            watch: 0,
            time: new Date(),
            miniImagePath: miniImagePath
        }, (err, doc) => {
            if (err) {
                throw err;
                rejected(err);
            } else {
                ctx.body = resObj(1, "Save success!", "");
                resolved();
            }
        })
    })
}

