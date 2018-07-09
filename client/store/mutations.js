export default {
    getArticleTags(state, arr) {
        state.articleTags = arr;
    },
    setArticleTagsActive(state, arr) {
        state.articleTagsActive = arr;
    },
    setUserBannerClass(state, text) {
        state.userBannerClass = "user-banner-col-active";
        state.bodyScroll = false;
        state.shadow = true;
    },
    removeUserBannerClass(state, text) {
        state.userBannerClass = "";
        state.bodyScroll = true;
        state.shadow = false;
    },
    setUserToken(state,token){
        state.userToken = token;
    },
    goLogin(store){
        // store.router
        console.log($nuxt)
    }
}