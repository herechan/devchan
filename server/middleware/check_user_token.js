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
            const password = decode.password;
            Users.findOne({
                username: username,
                password: password
            }, (err, doc) => {
                if (err) {
                    console.log(err);
                    throw err;
                    ctx.body = resObj(500, "server error!", "");
                }
                if (doc) {
                    next();
                } else {
                    res.body = resObj(401, "There is no matching user!", "")
                }
            })
        } catch (e) {
            console.log(e)
            ctx.body = resObj(500, "server error!", "")
        }
    } else {
        // ctx.body = resObj(401, "no auth!", "");
        // console.log(`${ctx.req.headers.origin}/auth`);
        // console.log(ctx.redirect)
        // ctx.set('Access-Control-Allow-Origin', `${ctx.req.headers.origin}`);
        // ctx.redirect(`${ctx.req.headers.origin}/auth`);
        console.log("no auth")
        return (ctx.body = resObj(401, "no auth!", ""))
    }

}