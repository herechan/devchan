export default {
    async nuxtServerInit(context, { req, res }) {
        //验证cookie，在中间件中判断state中是否有devchan_token字段进行权限的第一层判断，之后再交给后端decode
        const token = req.headers.cookie ? req.headers.cookie : "";
        context.dispatch("userToken", {
            token: token
        })
    },
    async userToken({ commit }, params) {
        commit("setUserToken", params.token)
    },
    async goLogin({commit}){
        commit("goLogin")
    }
}