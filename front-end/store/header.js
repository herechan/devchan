export const state = () => ({
  userBannerClass: "",
  bodyScroll: true,
  shadow: false
})

export const mutations = {
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