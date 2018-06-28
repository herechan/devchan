export const state = () => ({
    articleTags: [],
    articleTagsActive: []
})

export const mutations = {
    getArticleTags(state, arr) {
        state.articleTags = arr;
    },
    setArticleTagsActive(state, arr) {
        state.articleTagsActive = arr;
    }
}