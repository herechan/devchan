// const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const resObj = require("../common/resObj");
const config = require("../common/config");
const Users = require("../model/user")
exports.user_token = async (ctx, next) => {
    const token = ctx.cookies.get(config.jwt.secret);
    if (token) {
        try {
            const decode = jwt.verify(token, config.jwt.secret);
            const username = decode.username;
            const id = decode.id;
            let user = await Users.findOne({username:username,_id:id}).exec()
            if(user._id && user.username){
                await next()
            }else{
                ctx.body = resObj(401, "Token is invalid!", "");
            }
        } catch (e) {
            console.log(e)
            ctx.body = resObj(500, "Server error!", "")
        }
    } else {
        return (ctx.body = resObj(401, "Token is invalid!", ""))
    }

}