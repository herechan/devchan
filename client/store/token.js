export const state = () => ({
    token: ""
})

export const mutations = {
    addToken(state, t) {
        state.token = t;
    },
    removeToken(state) {
        state.token = "";
    }
}