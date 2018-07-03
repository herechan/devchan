export const state = () => ({

})

export const mutations = {

}

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        console.log("-----------------------------------------------");
        console.log(req)
    }
}