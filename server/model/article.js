let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ArticleSchema = new Schema({
    title: String,
    tags: Array,
    intro: String,
    coverPath: String,
    mdText: String,
    like: Number,
    watch: Number
})
module.exports = mongoose.model("Article", ArticleSchema, "Articles");