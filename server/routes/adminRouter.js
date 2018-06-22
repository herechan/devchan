const router = require('koa-route');
const admin = require("../controller/admin");
router.get("/admin/articleTags", admin.ARTICLE_TAGS);
module.exports = router;