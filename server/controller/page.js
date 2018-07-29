const fs = require("fs")
const path = require("path");
let resObj = require("../common/resObj");
const indexPage = require("../dao/indexPage")
const util = require("../common/util")
exports.ARTICLE_AND_TWITTER = async (ctx)=>{//获取首页的文章与推文列表
    var result = await indexPage.queryArticleAndTwitter(ctx);
    ctx.body = result;
}

exports.GET_ARTICLE_DETAIL = async (ctx,next)=>{
    var result = await indexPage.queryArticleDetail(ctx,next);
    ctx.body = result;
}