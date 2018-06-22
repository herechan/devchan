<template>
  <div class="container" :class="{'mobile-state':mobileState}">
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
      <i class="iconfont" @click="triggerMenu">&#xe654;</i>
    </header>
    <article>
      <nuxt-child/>
    </article>
    <ToolBox/>
    <div class="shadow" @click="removeShadow"></div>
  </div>
</template>
<script>
import ToolBox from "~/components/widget/toolBox";
export default {
  data() {
    return {
      curIndex: 0,
      mobileState: false,
      shadow: false,
      search: "",
      shadowStyle : "",
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
  components: {
    ToolBox
  },
  methods: {
    triggerAside(item, index) {
      this.curIndex = index;
      this.$router.push(item.path);
      this.removeShadow();
    },
    triggerMenu() {
      this.mobileState = !this.mobileState;
      this.addShadow();
    },
    addShadow() {
      this.shadow = true;
      document.querySelector("body").style.overflow = "hidden";
      this.shadowStyle = document.querySelector(".shadow").style
      this.shadowStyle.display = "block"
      setTimeout(() => {
        this.shadowStyle.opacity = .4;
      }, 20);
    },
    removeShadow() {
      this.shadow = false;
      this.mobileState = false;
      this.shadowStyle.opacity = 0;
      setTimeout(() => {
        this.shadowStyle.display = "none";
      }, 400);
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
}
.shadow {
  transition: 0.3s ease;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  height: 100vh;
  width: 100%;
  display: none;
}
.shadow-active {
  opacity: 0.4;
}
aside {
  height: 100vh;
  width: 260px;
  background-color: #fff;
  box-shadow: 5px 0px 8px -4px rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  z-index: 1999;
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
  padding-right: 20px;
  .iconfont {
    font-size: 26px;
    visibility: hidden;
  }
  .header-title {
    font-size: 24px;
    font-weight: 400;
  }
}
article {
  padding-left: 280px;
}
.mobile-state {
  aside {
    right: 0 !important;
  }
}

@media screen and(max-width: 767px) {
  .container {
    aside {
      transition: 0.3s ease;
      right: -260px;
      left: auto;
    }
    header {
      padding-left: 20px;
      .iconfont {
        visibility: visible;
      }
    }
    article {
      padding-left: 20px;
    }
  }
}
</style>

