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
    }
}