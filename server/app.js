const Koa = require('koa');
const app = new Koa();
const cors = require("koa2-cors")
const db = require("./db/db");
const koaBody = require("koa-body");
const serve = require("koa-static");
const path = require("path")
const bodyParser = require('koa-bodyparser');

// const koaRouter = require("koa-router");
// const formidable = require("formidable");
// const r = new koaRouter()
// r.post("/admin/articleImageUpload", async (ctx, err) => {
//     var form = new formidable.IncomingForm();
//     form.parse(ctx.req, (err, files) => {
//         if (err) throw err;
//         console.log(files.get("image"));
//         reso(999)
//     })
//     ctx.body = "end"
// })






app.use(cors());
// app.use(bodyParser())
app.use(serve(path.resolve(__dirname, "public")))
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 10 * 1024 * 1024
    },
    formLimit: 10 * 1024 * 1024
}))

const router = require("./routers/router");
app.use(router.routes())

app.listen(9091, () => [
    console.log("server start at http://localhost:9091")
]);
