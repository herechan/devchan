const Router = require('koa-router');
const router = new Router();
const admin = require("../controller/admin");
router.get("/admin/articleTags", admin.ARTICLE_TAGS)
router.post("/admin/articleCover",admin.ARTICLE_COVER);
module.exports = router;