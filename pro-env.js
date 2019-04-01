

module.exports = function(){
    return {
        baseUrl:process.env.NODE_ENV == "production" ? "https://www.devchan.top/api" :" http://localhost:8009/api",
        staticUrl:process.env.NODE_ENV == "production" ? "https://www.devchan.top" :" http://localhost:8009"
    }
}
