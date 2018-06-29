const Users = require("../model/user");
const resObj = require("../common/resObj")
exports.findUser = async (ctx, next) => {
    return new Promise((resolved, rejected) => {
        const username = ctx.request.body.username.replace(/\s/g, "");
        const password = ctx.request.body.password.replace(/\s/g, "")
        Users.findOne({
            username: username,
            password: password
        }, (err, doc) => {
            if (err) ctx.throw("findUser error:" + err);
            resolved({
                username: doc.username,
                id: doc._id
            });
            ctx.body = resObj(1, "find success", "")
        })
    })
}