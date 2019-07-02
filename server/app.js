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
app.use(serve(path.resolve(__dirname, "../public")))
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 10 * 1024 * 1024
    },
    formLimit: 10 * 1024 * 1024
}))


app.use(router.routes());


// nuxtConfig.dev = process.env.NODE_ENV === "production" 
// 生产,环境,开发都为同一个打包模式，之前没有使用koa中间件渲染nuxt,所以这里暂时将三种模式用同一种方式打包
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' ||  process.env.NODE_ENV === 'test') {
    nuxtConfig.dev = true
} else {
    nuxtConfig.dev = false
}
nuxtConfig.srcDir = path.resolve(__dirname, "../client");
const nuxt = new Nuxt(nuxtConfig)


app.use(nuxt.render)
//当前为开发模式
if (!nuxtConfig.dev) {
    const builder = new Builder(nuxt)
    builder.build().then(listen());
}else {
    listen()
}


function listen (){
    app.listen(8009,"127.0.0.1",() => {
        console.log("server start at http://127.0.0.1:8009")
    });
}
