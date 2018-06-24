const Koa = require('koa');
const app = new Koa();
const db = require("./db/db");

const adminRouter = require("./routers/adminRouter")
app.use(adminRouter.routes())

app.listen(9091,()=>[
    console.log("server start...")
]);
