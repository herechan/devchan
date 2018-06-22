const Koa = require('koa');
const app = new Koa();
const db = require("./db/db");
const adminRouter = require("./routes/adminRouter")
app.use()

app.listen(9091);
console.log("server start...");