export const state = () => ({
    userBannerClass:0
  })
  
  export const mutations = {
    setuserBannerClass(state,text){
        state.userBannerClass = text
    }
  }