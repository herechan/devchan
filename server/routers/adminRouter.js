const Router = require('koa-router');
const router = new Router();
const admin = require("../controller/admin");
router.get("/admin/articleTags", admin.ARTICLE_TAGS)
router.post("/admin/articleCover",admin.ARTICLE_COVER);
router.post("/admin/articleCoverDelete",admin.ARTICLE_COVER_DELETE)
module.exports = router;