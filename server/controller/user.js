const userDao = require("../dao/userDao");
const jwt = require("jsonwebtoken");
const resObj = require("../common/resObj");
exports.FIND_USER = async (ctx, next) => {
    var result = await userDao.findUser(ctx);
    if (result.status == 1) {
        const token = jwt.sign({
            username: result.username,
            id: result.id.toString()
        }, "user_token", {
                expiresIn: "8h"
            })
        ctx.body = resObj(1, "login success!", {
            token: token
        })
    } else {
        ctx.body = resObj(0, "login failed!", "")
    }
}