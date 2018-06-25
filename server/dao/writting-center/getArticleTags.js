var Article = require("../../model/articleTags");
module.exports = (ctx) => {
    return new Promise((resolved,rejected)=>{
        Article.find({}).exec((err, doc) => {
            if (err) {
                throw "warning:articleTags error";
            } else if (doc.length > 0) {
                ctx.body = doc;//在koa-router中，调用上下文需要包含在Promise中
                resolved()
            } else {
                return console.log("articleTags not found")
            }
        })  
    })
}