//首页文章和推文的集合
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let pageMainListSchema = new Schema({
    
})
module.exports = mongoose.model("pageMainList",pageMainListSchema,"pageMainLists");