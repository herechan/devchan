var Article = require("../model/articleTags");
module.exports = async ()=>{
    Article.find({
        name:"css"
    }).exec((err,doc)=>{
        if(err){
            throw "articleTags error"
        }else if(doc.length>0){
            return doc
        }else{
            return console.log("articleTags not found")
        }
    })
}