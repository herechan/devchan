import axios from "~/plugins/axios"
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
    async goLogin({ commit }) {
        commit("goLogin")
    },
    async getEssayMessage({ commit }, essayObj) {//根据ID获取文章的详情
        if(!essayObj){
            return console.error("Arguments must be defined! such as essayId")
        }
        // axios
        //   .post(`${process.env.baseUrl}/getArticleDetail`, {
        //     id: id
        //   })
        //   .then(r => {
        //     if (r.data.status == 1) {
        //       this.essayObj = r.data.result;
        //     }
        //   });
        // const id = essayObj.id;
        
        const r = await axios.post(`${process.env.baseUrl}/getArticleDetail`,{
            id:essayObj.id
        });
        if(r.data.status == 1)
        {
            const essayMessage = r.data.result;
            commit("getEssayMessage", essayMessage)
        }
        
    }
}