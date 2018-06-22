let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ArticleTagsSchema = new Schema({
    name:String
})
module.exports = mongoose.model("ArticleTag",ArticleTagsSchema,"ArticleTags");