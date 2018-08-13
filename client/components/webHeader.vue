<template>
  <div id="container">
    <header>
      <div class="header-main">
        <el-row>
          <el-col :span="14">
            <div class="header-left">
              <div class="logo" ref="logo">
                <!-- <img src="~assets/img/logo.png" alt=""> -->
              </div>
              <span class="logo-name">Chan</span>
              <div class="header-nav hidden-sm-and-down">
                <span v-for="(item,index) in navList" :key="index" @click="go(item)">{{item.name}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="header-right">
              <el-input placeholder="Search" :readonly="true" @click.native="showSearchModal" class="header-search hidden-xs-only">
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
              </el-input>
              <div class="user-mini hidden-lg-and-up" @click.stop="triggerUserHeader ">
                <div class="user-mini-portrait" ref="userMiniImage">
                  <!-- <img src="~assets/img/user.png" alt=""> -->
                </div>
                <i style="font-size:20px;color:#ccc" class="iconfont">&#xe600;</i>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!--小屏幕二级菜单-->
      <div class="header-coll hidden-sm-and-up">
        <div class="header-coll-nav fl">
          <span @click="go(item)" v-for="(item,index) in navList" :key="index">{{item.name}}</span>
        </div>
        <div class="header-coll-input">
          <el-input placeholder="Search" class="header-coll-search fr">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
    </header>
    <el-dialog title="" :visible.sync="searchModal" width="30%" :lock-scroll="true" @open="searchModalOpen" @close="searchModalClose">
      <div class="search-content">
        <el-input :autofocus="true" class="search-input" v-model="searchText" placeholder="请输入搜索内容"></el-input>
        <div class="search-inner">
          <p class="search-item search-item-title">文章</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
#container {
  /deep/ .el-dialog__header{
    padding-bottom: auto;
  }
  /deep/ .search-content {
    input {
      border: none;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
      border-radius: 0;
      padding: 0 20px;
    }
  }

  /deep/ .el-dialog__body {
    padding: 0;
  }
  .search-inner{
    background: $searchBg;
    .search-item{
      padding: 0 20px;

    }
    .search-item-title{
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
}

header {
  position: relative;
  z-index: 100;
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  .header-main {
    max-width: 1360px;

    height: 64px;
    margin: auto;
    padding: 0 20px;

    .header-left {
      height: 64px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        font-size: 14px;
        margin-right: 30px;
        cursor: pointer;
        user-select: none;
        transition: 0.2s ease;
        &:not(.logo-name):hover {
          color: $mainColor;
        }
      }
      .logo {
        height: 44px;
        width: 44px;
        overflow: hidden;
        border-radius: 50%;
        background-color: $page404;
        img {
          width: 100%;
        }
      }
      .logo-name {
        font-size: 16px;
        font-weight: 600;
        margin-right: 35px;
        margin-left: 10px;
        cursor: text;
      }
    }
    .header-right {
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .header-search {
        width: 205px;
      }
      .header-search /deep/ input {
        border-radius: 25px;
      }
      .user-mini {
        .iconfont {
          transition: all 0.3s;
        }
        &:hover {
          .iconfont {
            color: $mainColor !important;
          }
        }
        height: 100%;
        margin-left: 30px;
        cursor: pointer;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .user-mini-portrait {
          height: 40px;
          width: 40px;
          overflow: hidden;
          border-radius: 50%;
          background-color: $page404;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          transition: 0.2s ease;
        }
      }
    }
  }
  .header-coll {
    height: 49px;
    border-bottom: none;
    background-color: #fff;
    margin-top: 1px;
    padding: 0 20px;
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    .header-coll-nav {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .header-coll-search {
      height: 34px;
      width: 160px;
      line-height: 34px;
      margin-right: 20px;
      flex-shrink: 0;
    }
    .header-coll-search /deep/ input {
      border-radius: 25px;
      height: 34px;
      border-color: $borderColor;
    }
    .header-coll-search /deep/ .el-input__suffix {
      top: -3px;
    }
    span {
      margin-right: 30px;
      flex-shrink: 0;
    }
  }
}
@media screen and(max-width: 768px) {
  .header-main {
    border-bottom: 1px solid $borderColor;
  }
}
</style>
<script>
// import SearchModal from "~/components/searchModal";
export default {
  mounted() {
    this.getMiniImage();
    this.getLogoImage();
  },
  components: {
    // SearchModal
  },
  data() {
    return {
      navList: [
        {
          name: "主页",
          pathName: ""
        },
        {
          name: "文章",
          pathName: "essayIndex"
        },
        {
          name: "推文",
          pathName: "twitter"
        },
        {
          name: "关于",
          pathName: ""
        }
      ],
      searchModal: false,
      searchText: ""
    };
  },
  methods: {
    searchModalClose() {
      // document.body.style.overflow = "auto";
      // this.searchModal = true;
    },
    searchModalOpen() {
      // document.body.style.overflow = "hidden"
    },
    showSearchModal() {
      this.searchModal = true;
    },
    go: function(item) {
      this.$router.push({
        path: `/${item.pathName}`
      });
    },
    triggerUserHeader() {
      var userHeaderState = this.$store.state.userBannerClass;
      if (userHeaderState) {
        this.$store.commit("removeUserBannerClass");
      } else {
        this.$store.commit("setUserBannerClass");
      }
    },
    getMiniImage() {
      var image = new Image();
      image.src = "/img-static/user.png";
      image.height = 40;
      image.width = 40;
      image.onload = () => {
        this.$refs.userMiniImage.appendChild(image);
      };
    },
    getLogoImage() {
      var image = new Image();
      image.src = "/img-static/logo.png";
      image.height = 44;
      image.width = 44;
      image.onload = () => {
        this.$refs.logo.appendChild(image);
        this.$refs.logo.style.background = "#fff";
      };
    }
  }
};
</script>
