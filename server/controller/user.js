const userDao = require("../dao/userDao");
const jwt = require("jsonwebtoken")
exports.FIND_USER = async (ctx, next) => {
    var result = await userDao.findUser(ctx);
    
    const tocken = jwt.sign({
        username: result.username,
        id: result.id.toString()
    },"user_token",{
        expiresIn:"8h"
    })
}