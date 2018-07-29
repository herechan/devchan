const Koa = require('koa');
const app = new Koa();
const cors = require("koa2-cors")
const db = require("./db/db");
const koaBody = require("koa-body");
const serve = require("koa-static");
const path = require("path");
const token = require("./common/token");
const jwt = require("koa-jwt");
const { Nuxt, Builder } = require("nuxt");
const nuxtConfig = require("../nuxt.config.js");
const router = require("./routers/router");


// app.use(jwt({
//     secret: "devchan_token"
// }).unless({
//     path: [/^((?!\/admin).)*$/, /\/login/]
//     // path: [/\/twitter/, /\/login/,/\/essay/,/\/articleTags/]
// }))

app.use(cors({
    credentials: true,
    // origin:"http://localhost:8008"
}));
app.use(serve(path.resolve(__dirname, "public")))
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 10 * 1024 * 1024
    },
    formLimit: 10 * 1024 * 1024
}))


app.use(router.routes());

nuxtConfig.dev = process.env.NODE_ENV === "production"
nuxtConfig.srcDir = path.resolve(__dirname, "../client");
const nuxt = new Nuxt(nuxtConfig)

//当前为开发模式
if (!nuxtConfig.dev) {
    const builder = new Builder(nuxt)
    builder.build();
}
app.use(nuxt.render)
app.listen(8009,"127.0.0.1",() => {
    console.log("server start at http://127.0.0.1:8009")
});