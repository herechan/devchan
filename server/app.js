const Koa = require('koa');
const app = new Koa();
const cors = require("koa2-cors")
const db = require("./db/db");
const koaBody = require("koa-body");
const serve = require("koa-static");
const path = require("path")


const adminRouter = require("./routers/adminRouter");


app.use(cors());
app.use(serve(path.resolve(__dirname,"public")))
app.use(koaBody({
    multipart:true,
    formidable: {
        maxFileSize: 10*1024*1024
    }
}))
app.use(adminRouter.routes())

app.listen(9091,()=>[
    console.log("server start at http://localhost:9091") 
]);
