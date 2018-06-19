export const state = () => ({
  userBannerClass: ""
})

export const mutations = {
  setUserBannerClass(state, text) {
    state.userBannerClass = "user-banner-col-active"
  },
  removeUserBannerClass(state, text) {
    state.userBannerClass = ""
  }
}