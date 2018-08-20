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
        if (!essayObj) {
            return console.error("Arguments must be defined! such as essayId")
        }
        const r = await axios.post(`${process.env.baseUrl}/getArticleDetail`, {
            id: essayObj.id,
            isSupportWebp:essayObj.isSupportWebp
        });
        if (r.data.status == 1) {
            const essayMessage = r.data.result;
            commit("getEssayMessage", essayMessage)
        }

    },
    async setEassayList({ commit }, queryObj) {//根据查询条件获取文章的列表
        queryObj.pageNumber = queryObj.pageNumber > 0 ? queryObj.pageNumber : 1
        const r = await axios.post(`${process.env.baseUrl}/getArticleList`, {
            essaySortList: queryObj.essaySortList,
            pageNumber: queryObj.pageNumber
        });
        if (r.data.status == 1) {
            const list = r.data.result ? r.data.result : []
            commit("setEssayList", list);
            commit("setEssayPageSize", r.data.length);
        }
    },
    async setEssaySort({ commit }, essaySort) {

        commit("setEssaySort", essaySort)
    },
    async setArticleTagsActive({ commit, state }, arr) {
        commit("setArticleTagsActive", arr);
        var list = [];
        state.articleTagsActive.forEach(element => {
            if (element) {
                list.push(element)
            }
        });
        return list;
    },
    async setRecentArticles({ commit }) {
        axios.get(`${process.env.baseUrl}/getRecentArticle`).then(r => {
            if (r.data.status == 1) {
                const data = r.data.result;
                commit("setRecentArticles", data)
            }
        });
    }
}