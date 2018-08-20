var resObj = require("../common/resObj");
var ArticleTagsModel = require("../model/articleTags")
var ArticleModel = require("../model/article");
var pathHandle = require("../common/pathHandle")
const util = require("../common/util")
exports.queryArticleAndTwitter = async (ctx) => {
    return new Promise(async (resolved, rejected) => {
        const page = Number(ctx.query.page) - 1;
        const isSupportWebp = ctx.query.isSupportWebp == "true" ? true : false;
        const articleLength = await getResultLength({})
        ArticleModel.find({}).limit(9).skip(page * 9).sort({
            time: -1
        }).exec((err, doc) => {
            if (err) ctx.throw("findUser error:" + err);
            if (doc.length > 0) {
                var properArr = ["_id", "tags", "intro", "coverPath",
                    , "title", "like", "watch", "time", "miniImagePath"]
                var r = util.getProperty(properArr, doc);
                r.forEach(element => {
                    if (!element.coverPath) {
                        return;
                    }
                    element.coverPath = pathHandle.articleCoverPathHandle({
                        imagePath: element.coverPath,
                        isSupportWebp: isSupportWebp
                    })
                });
                resolved({
                    status: 1,
                    msg: "success!",
                    result: {
                        articleList: r,
                        articleLength: articleLength
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
    const isSupportWebp = ctx.request.body.isSupportWebp;
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
                if (r.coverPath) {
                    r.coverPath = pathHandle.articleCoverPathHandle({
                        imagePath: r.coverPath,
                        isSupportWebp: isSupportWebp
                    })
                }
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
                    , "title", "miniImagePath", "time", "intro"]
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


exports.queryDateRecentActive = async (ctx, next) => {
    return new Promise(async (resolved, rejected) => {
        var article = ArticleModel.aggregate([
            {
                $project: {
                    title: true,
                    time: {
                        $dateToString: {
                            format: "%Y-%m",
                            date: "$time"
                        }
                    },
                }
            }, {
                $sort: {
                    time: -1
                }
            }
        ])
        article.exec((err, doc) => {
            if (err) ctx.throw("findArticle error:" + err);
            if (doc) {
                let dataArr = [];
                let dataCollection = [];
                for (let i = 0; i < doc.length; i++) {
                    const element = doc[i];
                    if (!dataArr.includes(element.time)) {
                        if (dataArr.length == 3) {
                            break;
                        }
                        dataArr.push(element.time);
                    }
                };
                for (let i = 0; i < dataArr.length; i++) {
                    const date = dataArr[i];
                    var temp = {
                        date: date,
                        list: []
                    }
                    for (let k = 0; k < doc.length; k++) {
                        const ele = doc[k];
                        if (date == ele.time) {
                            temp.list.push(ele)
                        }
                    }
                    dataCollection.push(temp)
                }
                resolved({
                    msg: "ok",
                    result: dataCollection,
                    status: 1
                })
            }
        })
    })
}

exports.searchArticle = async (ctx, next) => {

    return new Promise(async (resolved, rejected) => {
        const articleQuery = ctx.request.body.articleQuery;
        const articleList = await searchArticle(articleQuery);
        resolved({
            msg: "ok",
            result: articleList,
            status: 1
        })
    })
}

function searchArticle(val) {
    const valReg = new RegExp(val, "i");
    return new Promise((resolved, rejected) => {
        ArticleModel.aggregate([
            {
                $match: {
                    $or: [
                        {
                            title: valReg
                        }, {
                            mdText: valReg
                        }, {
                            intro: valReg
                        }
                    ]
                }
            }, {
                $project: {
                    intro: 1,
                    title: 1
                }
            }, {
                $sort: {
                    time: -1
                }
            }
        ]).exec((err, doc) => {
            if (err) console.log("searchArticle error! " + err);
            resolved(doc)
        })
    })
}

function getResultLength(expression) {
    return new Promise((resolved, rejected) => {
        ArticleModel.find(expression).exec((err, doc) => {
            // if (err) ctx.throw("findUser error:" + err);
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