var resObj = require("../common/resObj");
var ArticleTagsModel = require("../model/articleTags")
var ArticleModel = require("../model/article");
const util = require("../common/util")
exports.queryArticleAndTwitter = async (ctx) => {
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
exports.queryArticleDetail = async (ctx,next) => {
    const id = ctx.request.body.id;
    return new Promise((resolved, rejected) => {
        ArticleModel.findOne({
            _id: id
        }).exec((err, doc) => {
            if (err){
                console.log(err)
                resolved({
                    msg: "failed",
                    result: "",
                    status: 404
                })
            } 
            if (doc) {
                var properArr = ["_id","tags","intro","coverPath",
                "mdText","title","like","watch","time"]
                var r = util.getProperty(properArr,doc);
                r.time = util.dateFormat(r.time,"yyyy-MM-dd")
                resolved({
                    msg: "success!",
                    result: r,
                    status: 1
                })
            } else {
                resolved({
                    msg: "failed",
                    result: "",
                    status: 404
                })
            }
        })
    })
}