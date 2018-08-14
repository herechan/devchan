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
              <el-input :readonly="true" placeholder="Search" @focus="showSearchModal" class="header-search hidden-xs-only">
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
              </el-input>
              <div class="user-mini hidden-lg-and-up" @click.stop="triggerUserHeader">
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
          <el-input placeholder="Search" class="header-coll-search fr" :readonly="true" @focus="showSearchModal">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
    </header>
    <el-dialog title="" :fullscreen="isFull" :visible.sync="searchModal" width="30%" :show-close="false" :lock-scroll="false" @open="searchModalOpen" @close="searchModalClose">
      <div class="search-content">
        <div class="search-header">
          <el-input :autofocus="true" @keydown.native.enter="searchTrigger" class="search-input" v-model="searchText" placeholder="键入Enter进行搜索"></el-input>
          <i class="el-icon-circle-close" @click="searchModal = false"></i>
        </div>
        <div class="search-inner">
          <div class="search-panel">
            <p class="search-item search-item-title">文章</p>
            <Loading v-if="searchArticleListResult.length == 0" />
            <ul class="search-result li-none search-article-box" v-else>
              <li v-for="(item, index) in searchArticleListResult" :key="index">
                <p class="elli">
                  <i class="el-icon-document"></i>
                  <span class="search-text">{{item.title}}</span>
                </p>
                <p class="search-item-sub elli">{{item.intro}}</p>
              </li>
            </ul>
          </div>
          <div class="search-panel">
            <p class="search-item search-item-title">标签</p>
            <!-- <Loading v-if="searchTagList.length == 0" />
            <ul class="search-result li-none" v-else>
              <li>
                <p class="elli">
                  <i class="el-icon-document"></i>
                  <span class="search-text">文章title文章title文章title文章title文章title文章title文章title文章title文章title</span>
                </p>
                <p class="search-item-sub elli">subsubsubsub</p>
              </li>
              <li>
                <p class="elli">
                  <i class="iconfont">&#xe68c;</i>
                  <span class="search-text">标签title标签title标签title标签title</span>
                </p>
                <p class="search-item-sub elli">subsubsubsub</p>
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
#container {
  /deep/ .el-dialog {
    min-width: 320px;
    background: $searchBg;
  }
  /deep/ .el-dialog__header {
    display: none;
  }
  /deep/ .search-content {
    input {
      border: none;
      font-size: 16px;
      border-radius: 0;
      padding: 0 20px;
      padding-right: 45px;
    }
  }
  .search-header {
    background-color: #fff;
    .search-input /deep/ input {
      font-size: 15px;
    }
    .search-text {
      font-size: 15px;
    }
    padding: 5px 0;
    position: relative;
    border-bottom: 1px solid #ccc;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    .el-icon-circle-close {
      position: absolute;
      right: 14px;
      top: 15px;
      font-size: 18px;
      cursor: pointer;
    }
  }

  /deep/ .el-dialog__body {
    padding: 0;
  }
  .search-inner {
    .search-article-box {
      overflow: auto;
      height: 295px;
    }
    .search-result {
      padding-left: 0;
      li {
        padding: 8px 20px;
        cursor: pointer;
        &:hover {
          p {
            color: #fff;
          }
          background-color: $mainColor;
          i {
            color: #fff;
          }
          .search-text {
            color: #fff;
          }
          .search-item-sub {
            color: #fff;
          }
        }
        .search-item-sub {
          margin-left: 23px;
          margin-top: 5px;
          color: $searchSub;
        }
        i {
          font-size: 16px;
          margin-right: 8px;
        }
      }
    }

    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    .search-item {
      padding: 0 20px;
      border-bottom: 1px solid #ccc;
    }
    .search-item-title {
      padding-top: 6px;
      padding-bottom: 6px;
      font-size: 15px;
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
import Loading from "~/components/widget/loading";
import axios from "~/plugins/axios";
export default {
  mounted() {
    this.getMiniImage();
    this.getLogoImage();
    // console.log(document.documentElement.clientWidth < 768)
    if (document.documentElement.clientWidth < 330) {
      this.isFull = true;
    } else {
      this.isFull = false;
    }
  },
  components: {
    Loading
  },
  computed: {
    searchArticleListResult() {
      var list =
        this.searchArticleList.length > 0
          ? this.searchArticleList
          : this.$store.state.recentArticles;
      return list;
    }
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
      searchText: "",
      searchArticleList: [],
      searchTagList: [],
      isFull: false,
      lastSearchTime: ""
    };
  },

  methods: {
    searchModalClose() {},
    searchModalOpen() {},
    searchTrigger() {
      if (!this.lastSearchTime) {
        this.lastSearchTime = Date.now();
        this.searchArticles();
      } else if (Date.now() - this.lastSearchTime > 3000) {
        this.searchArticles();
      } else {
        this.$message({
          message: "这手速好像有点快啊！！！",
          type: "warning"
        });
      }
    },
    searchArticles() {
      axios
        .post(`${process.env.baseUrl}/searchArticle`, {
          articleQuery: this.searchText
        })
        .then(r => {
          if (r.data.status == 1) {
            this.lastSearchTime = Date.now();
            this.searchArticleList = r.data.result;
          }
        });
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
