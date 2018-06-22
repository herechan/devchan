let mongoose = require("mongoose");
let db_url = "mongodb://localhost:27017/devchan";
mongoose.connect(db_url, {
    // autoReconnect: true,
    // poolSize: 10
});
mongoose.connection.on("connected", () => {
    console.log("dataBase connected!")
})

mongoose.connection.on("error", () => {
    console.log("dataBase connection error!")
})

mongoose.connection.on("disconnected", () => {
    console.log("dataBase disconnected!")
})

module.exports = mongoose;