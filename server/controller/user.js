const userDao = require("../dao/userDao")
exports.FIND_USER = async(ctx,next)=>{
    var result =await userDao.findUser(ctx);
    
}