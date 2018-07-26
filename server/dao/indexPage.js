var resObj = require("../common/resObj");
var ArticleTagsModel = require("../model/articleTags")
var ArticleModel = require("../model/article");

exports.findArticleAndTwitter = async (ctx) => {
    return new Promise((resolved, rejected) => {
        ArticleModel.find({}).exec((err, doc) => {
            if (err) ctx.throw("findUser error:" + err);
            if (doc.length > 0) {
                resolved({
                    status: 1,
                    msg: "success!",
                    result: doc
                })
            } else {
                resolved({
                    status: 0,
                    msg: "no data!",
                    result: ""
                });
            }
        })
    })

}