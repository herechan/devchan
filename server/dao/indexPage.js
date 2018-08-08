var resObj = require("../common/resObj");
var ArticleTagsModel = require("../model/articleTags")
var ArticleModel = require("../model/article");
const util = require("../common/util")
exports.queryArticleAndTwitter = async (ctx) => {
    return new Promise(async (resolved, rejected) => {
        const page = Number(ctx.query.page) - 1;
        const articleLength = await getResultLength({})
        ArticleModel.find({}).limit(9).skip(page * 9).sort({
            time: -1
        }).exec((err, doc) => {
            if (err) ctx.throw("findUser error:" + err);
            if (doc.length > 0) {
                var properArr = ["_id", "tags", "intro", "coverPath",
                    , "title", "like", "watch", "time", "miniImagePath"]
                var r = util.getProperty(properArr, doc);
                resolved({
                    status: 1,
                    msg: "success!",
                    result: {
                        articleList:r,
                        articleLength:articleLength
                    }
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
exports.queryArticleDetail = async (ctx, next) => {
    const id = ctx.request.body.id;
    return new Promise((resolved, rejected) => {
        ArticleModel.findOne({
            _id: id
        }).exec((err, doc) => {
            if (err) {
                console.log(err)
                resolved({
                    msg: "failed",
                    result: "",
                    status: 404
                })
            }
            if (doc) {
                var properArr = ["_id", "tags", "intro", "coverPath",
                    "mdText", "title", "like", "watch", "time"]
                var r = util.getProperty(properArr, doc);
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

exports.queryArticleList = async (ctx, next) => {
    return new Promise(async (resolved, rejected) => {
        var pageNumber = Number(ctx.request.body.pageNumber) - 1;
        var essaySortList = ctx.request.body.essaySortList;
        var essaySortExpre = {};
        if (essaySortList.length > 0) {
            essaySortExpre = {
                tags: {
                    $all: essaySortList
                }
            }
        }
        if (!pageNumber && pageNumber < 0) {
            resolved({
                status: 404,
                msg: "faild!",
                result: ""
            })
        }


        var resultLength = await getResultLength(essaySortExpre)

        ArticleModel.find(essaySortExpre).limit(9).skip(pageNumber * 9).sort({
            time: -1
        }).exec((err, doc) => {
            if (err) ctx.throw("findUser error:" + err);
            if (doc.length > 0) {
                var properArr = ["_id", "tags",
                    , "title", "time", "miniImagePath"]
                var r = util.getProperty(properArr, doc);
                resolved({
                    status: 1,
                    msg: "success!",
                    result: r,
                    length: resultLength
                })
            } else {
                resolved({
                    status: 1,
                    msg: "success! but no result",
                    result: ""
                });
            }
        })
    })
}

exports.queryRecentArticle = async (ctx, next) => {
    return new Promise((resolved, rejected) => {
        ArticleModel.find({}).limit(3).sort({
            time: -1
        }).exec((err, doc) => {
            if (err) ctx.throw("findUser error:" + err);
            if (doc.length > 0) {
                var properArr = ["_id", "tags",
                    , "title", "miniImagePath", "time"]
                var r = util.getProperty(properArr, doc);
                resolved({
                    status: 1,
                    msg: "success!",
                    result: r
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
exports.queryIndexPage = async (ctx, next) => {
    return new Promise(async (resolved, rejected) => {
        const postLength = await getResultLength({})//获取文档的数量
        resolved({
            msg: "success!",
            result: {
                postLength: postLength
            },
            status: 1
        })

    })
}

function getResultLength(expression) {
    return new Promise((resolved, rejected) => {
        ArticleModel.find(expression).exec((err, doc) => {
            if (err) ctx.throw("findUser error:" + err);
            if (doc.length > 0) {
                resolved(doc.length)
            } else {
                resolved({
                    status: 1,
                    msg: "success! but no result",
                    result: ""
                });
            }
        })
    })
}

