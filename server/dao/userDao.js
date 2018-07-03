const Users = require("../model/user");
const resObj = require("../common/resObj")
exports.findUser = async (ctx) => {
    return new Promise((resolved, rejected) => {
        const username = ctx.request.body.username.replace(/\s/g, "");
        const password = ctx.request.body.password.replace(/\s/g, "");
        Users.findOne({
            username: username,
            password: password
        }, (err, doc) => {
            if (err) ctx.throw("findUser error:" + err);
            if (doc) {
                resolved({
                    username: doc.username,
                    id: doc._id,
                    status:1
                });
                // ctx.body = resObj(1, "find success", "")
            } else {
                resolved({
                    status:0
                });
                // ctx.body = resObj(0, "no found", "")
            }
        })
    })
}