

module.exports = function(){
    return {
        baseUrl:process.env.NODE_ENV == "production" ? "http://www.devchan.top/api" :" http://192.168.10.68:8009/api",
        staticUrl:process.env.NODE_ENV == "production" ? "http://www.devchan.top" :" http://192.168.10.68:8009"
    }
}
