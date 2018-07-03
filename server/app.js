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
// const nuxtConfig = require("./../front-end/nuxt.config.js");
app.use(jwt({
    secret: "user_token"
}).unless({
    path: [/^((?!\/admin).)*$/, /\/login/]
    // path: [/\/twitter/, /\/login/,/\/essay/,/\/articleTags/]
}))
app.use(cors());
// console.log(process.env.NODE_ENV)
app.use(serve(path.resolve(__dirname, "public")))
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 10 * 1024 * 1024
    },
    formLimit: 10 * 1024 * 1024
}))

const router = require("./routers/router");
app.use(router.routes());


// nuxtConfig.dev = process.env.NODE_ENV === "production"
// const nuxt = new Nuxt(nuxtConfig)

//当前为开发模式
// if (!nuxtConfig.dev) {
//     const builder = new Builder(nuxt)
//     builder.build()
// }
// app.use(nuxt.render)

app.listen(9091, () => [
    console.log("server start at http://localhost:9091")
]);
