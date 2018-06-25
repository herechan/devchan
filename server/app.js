const Koa = require('koa');
const app = new Koa();
const cors = require("koa2-cors")
const db = require("./db/db");

const adminRouter = require("./routers/adminRouter")
app.use(cors())
app.use(adminRouter.routes())

app.listen(9091,()=>[
    console.log("server start...") 
]);
