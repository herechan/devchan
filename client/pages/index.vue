<template>
  <div id="wrap" :class="triggerBody" @click="removeShadow">
    <WebHeader/>
    <main>
      <div class="shadow" v-if="$store.state.shadow"></div>
      <el-row>
        <el-col :lg="5" class="user-banner-col" :class="userBanner" @click.stop.native>
          <div class="user-banner">
            <div class="user-info">
              <div class="user-box skeleton-bg" v-html="userImageObj" ref="userImage">
              </div>
              <p class="username">Chan</p>
              <p class="career">Web Developer</p>
              <p class="user-location">
                <i class="iconfont">&#xe615;</i> Chengdu, China
              </p>
              <div class="follow-btn">FOLLOW</div>
            </div>
            <div class="article-info">
              <div class="article-info-item">
                <p>{{postLength}}</p>
                <p>POSTS</p>
              </div>
              <div class="article-info-item">
                <p>{{$store.state.articleTags.length}}</p>
                <p>TAGS</p>
              </div>
            </div>
            <div class="user-social">
              <ul class="li-none">
                <li>
                  <a href="">
                    <i class="iconfont">&#xe7ab;</i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="iconfont">&#xe6b6;</i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="iconfont">&#xe749;</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :lg="14" :sm="17" class="timeline-col">
          <nuxt-child/>
        </el-col>
        <el-col :lg="5" :sm="7" class="aside-col">
          <div class="aside-box">
            <p class="aside-title">近期文章</p>
            <div class="recent-article">
              <div class="recent-article-item" v-for="(item, index) in $store.state.recentArticles" :key="index" v-if="$store.state.recentArticles.length > 0">
                <a class="recent-article-cover" @click="goDetail(item._id)" :style="'background-image: url('+staticUrl+item.miniImagePath+');'"></a>
                <div class="recent-article-info">
                  <a class="recent-article-tag elli">{{item.tags.join(" / ")}}</a>
                  <a class="recent-article-title" @click="goDetail(item._id)" :title="item.title">{{item.title}}</a>
                  <p class="recent-article-time">{{item.time}}</p>
                </div>
              </div>

              <div class="recent-skeleton-wrap" v-if="$store.state.recentArticles.length == 0">
                <RecentSkeleton v-for="(item, index) in 3" :key="index"></RecentSkeleton>
              </div>
            </div>
          </div>
          <div class="aside-box">
            <p class="aside-title">文章归档</p>
            <ul class="aside-list li-none">
              <li class="elli">
                <a>
                  <i class="iconfont">&#xe8fa;</i>
                  电影影评 (3)
                </a>
              </li>
              <li>
                <a>
                  <i class="iconfont">&#xe8fa;</i>
                  技术文章
                </a>
              </li>
              <li>
                <a>
                  <i class="iconfont">&#xe8fa;</i>
                  心灵鸡汤
                </a>
              </li>
            </ul>
          </div>
          <div class="aside-box">
            <p class="aside-title">个人动态</p>
            <ul class="aside-list li-none">
              <li class="elli" v-for="(item, index) in recentActive" :key="index">
                <a @click="switchRecentActive($event)">
                  <i class="iconfont">&#xe8fa;</i>
                  {{item.date.split("-")[0]}}年{{parseInt(item.date.split("-")[1])}}月 ({{item.list.length}})
                </a>
                <div class="aside-sub">
                  <p @click="goDetail(subItem._id)" class="elli" :title="subItem.title" v-for="(subItem, subIndex) in item.list" :key="subIndex">{{subItem.title}}</p>
                </div>
              </li>
              <li class="elli" v-if="recentActive.length == 0" v-for="(item, index) in 3" :key="index">
                <div class="recent-skeleton clearfix"></div>
              </li>
            </ul>
          </div>
          <div class="aside-box">
            <p class="aside-title">标签分类</p>
            <ul class="aside-list li-none">
              <li class="elli">
                <a>
                  <i class="iconfont">&#xe8fa;</i>
                  音乐
                </a>
              </li>
              <li>
                <a>
                  <i class="iconfont">&#xe8fa;</i>
                  电影
                </a>
              </li>
              <li>
                <a>
                  <i class="iconfont">&#xe8fa;</i>
                  技术
                </a>
              </li>
            </ul>
          </div>
          <div class="aside-box">
            <p class="aside-title">链接</p>
            <ul class="aside-list li-none">
              <li class="elli">
                <a>
                  <!-- <i class="iconfont">&#xe8fa;</i> -->
                  element-ui
                </a>
              </li>
              <li>
                <a>
                  <!-- <i class="iconfont">&#xe8fa;</i> -->
                  nuxt
                </a>
              </li>
              <li>
                <a>
                  <!-- <i class="iconfont">&#xe8fa;</i> -->
                  Echo Js
                </a>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </main>
    <WebFooter/>
  </div>
</template>

<script>
import WebHeader from "~/components/webHeader.vue";
import WebFooter from "~/components/webFooter.vue";
import HomeBody from "~/pages/index/index.vue";
import axios from "~/plugins/axios";

import RecentSkeleton from "~/components/skeleton/recentArticle";
export default {
  components: {
    WebHeader,
    WebFooter,
    HomeBody,
    RecentSkeleton
  },
  mounted() {
    this.document = document;
    this.getPostLength();
    this.getTags();
    this.getLargeUser();
    this.getRecentActive();
    this.$store.dispatch("setRecentArticles");
  },
  created() {
    this.staticUrl = process.env.staticUrl;
  },
  computed: {
    userBanner() {
      return this.$store.state.userBannerClass;
    },
    triggerBody() {
      if (this.document) {
        var body = this.document.querySelector("body");
        if (this.$store.state.userBannerClass) {
          body.style.overflow = "hidden";
        } else {
          body.style.overflow = "auto";
        }
      }
      return "";
    }
  },
  data() {
    return {
      document: "",
      recentArticle: [],
      staticUrl: "",
      postLength: 0,
      userImageObj: "",
      recentActive: []
    };
  },
  methods: {
    switchRecentActive(event) {
      const ele = event.currentTarget.parentNode;
      if (ele.className.match("aside-active")) {
        ele.className = "elli";
      } else {
        ele.className += " aside-active ";
      }
    },
    getLargeUser() {
      var image = new Image();
      image.src = "/img-static/user.png";
      image.onload = () => {
        this.$refs.userImage.appendChild(image);
      };
    },
    getTags() {
      axios.get(`${process.env.baseUrl}/articleTags`).then(r => {
        if (r.status == 200 && r.data.result.length > 0) {
          this.$store.commit("getArticleTags", r.data.result);
        }
      });
    },
    removeShadow() {
      if (this.$store.state.userBannerClass) {
        this.$store.commit("removeUserBannerClass");
      }
    },
    goDetail(id) {
      this.$router.push({
        path: "essayMain",
        query: {
          essayId: id
        }
      });
    },
    getPostLength() {
      axios.post(`${process.env.baseUrl}/getIndexPage`).then(r => {
        if (r.data.status == 1) {
          const data = r.data.result;
          this.postLength = data.postLength;
        }
      });
    },
    getRecentActive() {
      axios.get(`${process.env.baseUrl}/getDateRecentActive`).then(r => {
        if (r.data.status == 1) {
          const data = r.data.result;
          this.recentActive = data;
        }
      });
    }
  }
};
</script>

<style lang="scss" scope>
.skeleton-bg {
  background-color: $page404;
}
main {
  max-width: 1360px;
  margin: auto;
  padding: 30px 15px 30px 15px;
  .shadow {
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.4;
    z-index: 99;
  }
  .timeline-col .timeline-wrap {
    min-height: 100vh;
  }
  .user-banner-col {
    padding-right: 15px;
    .user-banner {
      background-color: #fff;
      @include cardBorder;
      .user-info {
        padding: 20px;
        .user-box {
          height: 135px;
          width: 135px;
          margin: auto;
          border-radius: 50%;
          overflow: hidden;
          img {
            height: 100%;
            border-radius: 50%;
          }
        }
        p {
          text-align: center;
        }
        .username {
          font-weight: bold;
          font-size: 20px;

          margin-top: 10px;
        }
        .user-location {
          font-size: 12px;
          margin-top: 2px;
          .iconfont {
            font-size: 10px;
          }
        }
        .follow-btn {
          color: #fff;
          width: 150px;
          height: 40px;
          display: block;
          font-size: 14px;
          line-height: 40px;
          text-align: center;
          margin: 20px auto 10px;
          background: $mainColor;
          border-radius: 20px;
          cursor: pointer;
          -webkit-transition: 0.2s ease;
          -moz-transition: 0.2s ease;
          -ms-transition: 0.2s ease;
          transition: 0.2s ease;
          &:hover {
            background: #49c8fb;
          }
        }
      }
      .article-info {
        display: flex;
        justify-content: space-between;
        .article-info-item {
          border-top: 1px solid $borderColor;
          border-bottom: 1px solid $borderColor;
          height: 86px;
          width: 50%;
          display: flex;
          &:first-child {
            border-right: 1px solid $borderColor;
          }
          flex-direction: column;
          align-items: center;
          justify-content: center;
          p:first-child {
            font-size: 18px;
            font-weight: 500;
          }
          p:last-child {
            font-size: 14px;
          }
        }
      }
      .user-social {
        height: 63px;
        padding: 0 15px;
        ul {
          display: flex;
          height: 100%;
          justify-content: space-around;
          align-items: center;
          padding-left: 0;
          li {
            height: 22px;
            width: 22px;
            a {
              text-decoration: none;
              i {
                font-size: 24px;
                color: $targetColor;
                transition: 0.2s ease;
                &:hover {
                  color: $fontColor;
                }
              }
            }
          }
        }
      }
    }
  }
  .user-banner-col-active {
    // display: block;
    position: absolute;
    width: 230px;
    top: -30px;
    right: -10px;
    height: 469px;
    z-index: 100;
    opacity: 1;
    .user-banner {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  .page-box {
    text-align: center;
    margin-top: 35px;
    button {
      background-color: $bgColor;
    }
    .btn-next {
      color: $fontColor;
      &:hover {
        color: $mainColor;
      }
      &:disabled:hover {
        color: $pageBtnDis;
      }
    }
    li {
      background-color: $bgColor;
      color: $pageColor;
      &:hover {
        color: $mainColor;
      }
    }
    .active {
      color: $fontColor;
    }
  }
  .aside-col {
    padding-left: 25px;
    user-select: none;
    .aside-box {
      margin-bottom: 40px;
      .aside-list {
        padding-left: 10px;
        li {
          color: $targetColor;
          width: auto;
          margin-bottom: 15px;
          .recent-skeleton {
            background-color: $page404;
            height: 15px;
            width: 95px;
            border-radius: 4px;
          }
          .aside-sub {
            padding: 8px 20px 0 35px;
            height: 0;
            overflow: hidden;
            // transition: all 5s;
            display: none;
            p {
              cursor: pointer;
              transition: 0.2s;
              margin-bottom: 12px;
              &:hover {
                color: $mainColor;
              }
            }
          }
          a {
            font-size: 12px;
            color: $asideColor;
            transition: 0.2s ease;
            cursor: pointer;
            i {
              font-size: 12px;
              color: $ccc;
              transition: 0.1s ease;
              margin-right: 2px;
              display: inline-block;
            }
            &:hover {
              i {
                color: $targetColor;
              }
              color: $asideHoverColor;
            }
          }
        }
        .aside-active {
          i {
            transform: rotate(90deg);
          }
          .aside-sub {
            height: auto;
            display: block;
          }
          margin-bottom: 0;
        }
      }
    }
    .aside-title {
      font-size: 14px;
      padding-bottom: 15px;
    }
    .recent-article-item {
      height: 102px;
      padding: 10px 0;
      a {
        cursor: pointer;
      }
      &:hover {
        .recent-article-cover {
          opacity: 0.8;
        }
        .recent-article-title {
          color: $mainColor;
        }
      }
      .recent-article-cover {
        transition: 0.2s ease;
        float: left;
        height: 80px;
        width: 80px;
        overflow: hidden;

        // border: 1px solid #eceff2;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        display: block;
        margin-right: 15px;
      }
      .recent-article-info {
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 14px;
        width: calc(100% - 95px);
        .recent-article-tag {
          color: $mainColor;
        }
        .recent-article-title {
          transition: 0.2s ease;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin-top: 3px;
        }
        .recent-article-time {
          font-size: 14px;
          color: $targetColor;
          margin-top: 3px;
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  main .aside-col {
    margin-top: 20px;
    padding-left: 0;
  }
  main .timeline-col .timeline-wrap .timeline-article .article-title {
    font-size: 22px;
    padding-top: 15px;
  }
  main .user-banner-col-active {
    top: -81px;
  }
}

@media screen and (max-width: 1200px) {
  .user-banner-col {
    height: 0;
    width: 0;
    overflow: hidden;
    opacity: 0;
  }
}
</style>


