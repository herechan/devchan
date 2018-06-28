const Router = require('koa-router');
const router = new Router();
const admin = require("../controller/admin");
router.get("/admin/articleTags", admin.ARTICLE_TAGS)
.post("/admin/articleCover", admin.ARTICLE_COVER)
.post("/admin/articleCoverDelete", admin.ARTICLE_COVER_DELETE)
.post("/admin/articleImageUpload", admin.ARTICLE_IMAGE_UPLOAD)
.post("/admin/saveArticle",admin.ARTICLE_SAVE)
module.exports = router;