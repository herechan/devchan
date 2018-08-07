import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default () => {
    return new Vuex.Store({
        state: {
            articleTags: [],
            articleTagsActive: [],
            userBannerClass: "",
            bodyScroll: true,
            shadow: false,
            userToken:"",
            essayMessage:"",
            essayList:[],
            essaySort:[],
            essaySortLoading:true,
            essayPageSize:0,
            essayCurrentPage:1
        },
        getters,
        mutations,
        actions
    })
}