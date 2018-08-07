const Router = require('koa-router');
const router = new Router();
const admin = require("../controller/admin");
const user = require("../controller/user");
const page = require("../controller/page");
const check_token = require("../middleware/check_user_token")
//admin
router.get("/api/articleTags", admin.ARTICLE_TAGS)
    .post("/api/admin/articleCover", check_token.user_token, admin.ARTICLE_COVER)
    .post("/api/admin/articleCoverDelete", admin.ARTICLE_COVER_DELETE)
    .post("/api/admin/articleImageUpload", admin.ARTICLE_IMAGE_UPLOAD)
    .post("/api/admin/saveArticle", admin.ARTICLE_SAVE)
    .get("/api/admin", admin.INDEX_CHECK)
    .get("/api/auth", admin.CHECK_AUTH)

//login
router.post("/api/login", user.FIND_USER);

//page
router.get("/api/getArticleTwitterList", page.ARTICLE_AND_TWITTER)
.post("/api/getArticleDetail", page.GET_ARTICLE_DETAIL)
.post("/api/getArticleList", page.GET_ARTICLE_LIST)
.get("/api/getRecentArticle", page.GET_RECENT_ARTICLE)
.post("/api/getIndexPage",page.GET_INDEX_PAGE)

module.exports = router;