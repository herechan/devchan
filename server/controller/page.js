const fs = require("fs")
const path = require("path");
let resObj = require("../common/resObj");
const indexPage = require("../dao/indexPage")

exports.ARTICLE_AND_TWITTER = async (ctx)=>{//获取首页的文章与推文列表
    var result = await indexPage.findArticleAndTwitter(ctx);
    ctx.body = result;
}