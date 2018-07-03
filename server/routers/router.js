const Router = require('koa-router');
const router = new Router();
const admin = require("../controller/admin");
const user = require("../controller/user");
//admin
router.get("/articleTags",admin.ARTICLE_TAGS)
    .post("/admin/articleCover", admin.ARTICLE_COVER)
    .post("/admin/articleCoverDelete", admin.ARTICLE_COVER_DELETE)
    .post("/admin/articleImageUpload", admin.ARTICLE_IMAGE_UPLOAD)
    .post("/admin/saveArticle", admin.ARTICLE_SAVE)
    .get("/admin",admin.INDEX_CHECK)
    .get("/auth",admin.CHECK_AUTH)

//login
router.post("/login", user.FIND_USER)
module.exports = router;