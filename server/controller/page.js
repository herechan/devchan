const indexPage = require("../dao/indexPage");
exports.ARTICLE_AND_TWITTER = async (ctx) => {//获取首页的文章与推文列表
    var result = await indexPage.queryArticleAndTwitter(ctx);
    ctx.body = result;
}

exports.GET_ARTICLE_DETAIL = async (ctx, next) => {
    var result = await indexPage.queryArticleDetail(ctx, next);
    ctx.body = result;
}

exports.GET_ARTICLE_LIST = async (ctx, next) => {
    var result = await indexPage.queryArticleList(ctx, next);
    ctx.body = result;
}

exports.GET_RECENT_ARTICLE = async (ctx, next) => {
    var result = await indexPage.queryRecentArticle(ctx, next);
    ctx.body = result;
}

exports.GET_INDEX_PAGE = async (ctx,next)=>{
    var result = await indexPage.queryIndexPage(ctx, next);
    ctx.body = result;
}

exports.GET_DATE_RECENT_ACTIVE = async(ctx,next)=>{
    const result = await indexPage.queryDateRecentActive(ctx,next);
    ctx.body = result;
}