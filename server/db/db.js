let mongoose = require("mongoose");
let db_url = 'mongodb://devchan:Chen9099@47.98.147.199:27017/devchan';
// let db_url = 'mongodb://127.0.0.1:27017/devchan'
mongoose.connect(db_url, { 
    useNewUrlParser: true,
    authSource:"admin"
});
mongoose.connection.on("connected", () => {
    console.log("dataBase connected!")
})

mongoose.connection.on("error", (e) => {
    console.log("dataBase connection error!");
    console.log(e)
})

mongoose.connection.on("disconnected", () => {
    console.log("dataBase disconnected!")
})

module.exports = mongoose;