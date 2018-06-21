<template>
    <div class="container">
        <aside class="">
            <div class="admin-logo">
                <img src="~/assets/img/user.png" alt="">
                <p class="admin-user">ChanAdmin</p>
            </div>
            <div class="devider"></div>
            <div class="search-box">
                <el-input v-model="search" class="search"></el-input>
            </div>
            <ul class="aside-list">
                <li @click="triggerAside(item,index)" :class="{'aside-item-active':curIndex == index}" class="aside-item" v-for="(item, index) in asideList" :key="index">
                    <i class="iconfont" v-html="item.icon"></i>{{item.name}}</li>
            </ul>
        </aside>
        <header>
            <p class="header-title">Writting Center</p>
        </header>
        <article>
            <nuxt-child/>
        </article>
    </div>
</template>
<script>
export default {
  data() {
    return {
      curIndex: 0,
      search: "",
      asideList: [
        {
          name: "Writting Center",
          icon: "&#xe633;",
          path: "/admin"
        },
        {
          name: "Twitter",
          icon: "&#xe749;",
          path: ""
        },
        {
          name: "Draft",
          icon: "&#xe64e;",
          path: ""
        }
      ]
    };
  },
  methods: {
    triggerAside(item, index) {
      this.curIndex = index;
      this.$router.push(item.path);
    }
  }
};
</script>
<style lang="scss" scoped>
aside {
  height: 100vh;
  width: 260px;
  background-color: #fff;
  box-shadow: 5px 0px 8px -4px rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  .admin-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    img {
      height: 56px;
      width: 56px;
      border-radius: 50%;
    }
    .admin-user {
      font-size: 18px;
      font-weight: bold;
      margin-left: 10px;
    }
  }
  .devider {
    height: 1px;
    background-color: $asideDevider;
    margin: auto;
    margin-bottom: 20px;
  }
  .search-box {
    text-align: center;
    padding: 0 20px 20px 20px;
  }
  .aside-list {
    padding-left: 0;
    .aside-item {
      padding: 15px 20px;
      transition: 0.1s ease;
      user-select: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      .iconfont {
        margin-right: 10px;
        font-size: 18px;
      }
    }
    .aside-item-active {
      color: #fff;
      background-color: $mainColor;
    }
  }
}
header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 280px;
  .header-title {
    font-size: 24px;
    font-weight: 400;
  }
}
article {
  padding-left: 280px;
//   padding-right: 20px;
}
</style>

