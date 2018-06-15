<template>
  <div id="wrap">
    <WebHeader/>
    <main>
      <el-row>
        <el-col :lg="5" class="user-banner-col hidden-md-and-down">
          <div class="user-banner">
            <div class="user-info">
              <img src="~assets/img/user.png" alt="">
              <p class="username">Chan</p>
              <p class="career">Web Developer</p>
              <p class="user-location">
                <i class="el-icon-location"></i> Chengdu, China
              </p>
              <div class="follow-btn">FOLLOW</div>

            </div>
            <div class="article-info">
              <div class="article-info-item">
                <p>15</p>
                <p>POSTS</p>
              </div>
              <div class="article-info-item">
                <p>5</p>
                <p>TAGS</p>
              </div>
            </div>
            <div class="user-social">
              <ul>
                <li>
                  <a href="">
                    <i class="iconfont">&#xe7ab;</i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i class="iconfont">&#xe641;</i>
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
                <li>
                  <a href="">
                    <i class="iconfont">&#xe719;</i>
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
              <div class="recent-article-item">
                <a href="" class="recent-article-cover"></a>
                <div class="recent-article-info">
                  <a href="" class="recent-article-tag">电影</a>
                  <a href="" class="recent-article-title" title="之后所有金刚狼都是在扮演休杰克曼，从今往后谈论起金刚狼，我们也只会想到他">之后所有金刚狼都是在扮演休杰克曼，从今往后谈论起金刚狼，我们也只会想到他</a>
                  <p class="recent-article-time">2018-6-13</p>
                </div>
              </div>
              <div class="recent-article-item">
                <a href="" class="recent-article-cover"></a>
                <div class="recent-article-info">
                  <a href="" class="recent-article-tag">电影</a>
                  <a href="" class="recent-article-title" title="之后所有金刚狼都是在扮演休杰克曼，从今往后谈论起金刚狼，我们也只会想到他">之后所有金刚狼都是在扮演休杰克曼，从今往后谈论起金刚狼，我们也只会想到他</a>
                  <p class="recent-article-time">2018-6-13</p>
                </div>
              </div>
            </div>
          </div>
          <div class="aside-box">
            <p class="aside-title">文章归档</p>
            <ul class="aside-list">
              <li class="elli">
                <a href="#">
                  <i class="el-icon-caret-right"></i>
                  电影影评 (3)
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="el-icon-caret-right"></i>
                  技术文章
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="el-icon-caret-right"></i>
                  心灵鸡汤
                </a>
              </li>
            </ul>
          </div>
          <div class="aside-box">
            <p class="aside-title">个人动态</p>
            <ul class="aside-list">
              <li class="elli">
                <a href="#">
                  <i class="el-icon-caret-right"></i>
                  2018年6月 (3)
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="el-icon-caret-right"></i>
                  2018年5月 (5)
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="el-icon-caret-right"></i>
                  2018年2月 (6)
                </a>
              </li>
            </ul>
          </div>
          <div class="aside-box">
            <p class="aside-title">标签分类</p>
            <ul class="aside-list">
              <li class="elli">
                <a href="#">
                  <i class="el-icon-caret-right"></i>
                  音乐
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="el-icon-caret-right"></i>
                  电影
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="el-icon-caret-right"></i>
                  技术
                </a>
              </li>
            </ul>
          </div>
          <div class="aside-box">
            <p class="aside-title">链接</p>
            <ul class="aside-list">
              <li class="elli">
                <a href="#">
                  <i class="el-icon-caret-right"></i>
                  element-ui
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="el-icon-caret-right"></i>
                  nuxt
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="el-icon-caret-right"></i>
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
export default {
  components: {
    WebHeader,
    WebFooter,
    HomeBody
  }
};
</script>

<style lang="scss" scope>
main {
  max-width: 1360px;
  margin: auto;
  padding: 30px 15px 30px 15px;
  .user-banner-col {
    padding-right: 15px;
    .user-banner {
      background-color: #fff;
      @include cardBorder;
      .user-info {
        padding:20px;
        img {
          display: block;
          max-width: 135px;
          margin: auto;
          border-radius: 50%;
        }
        p {
          text-align: center;
        }
        .username {
          font-weight: bold;
          font-size: 20px;

          margin-top: 10px;
        }
        .career {
        }
        .user-location {
          font-size: 12px;
          margin-top: 2px;
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
  .timeline-col {
    
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
          a {
            font-size: 12px;
            color: $asideColor;
            transition: 0.2s ease;
            i {
              font-size: 12px;
              color: $ccc;
              transition: 0.2s ease;
              margin-right: 2px;
            }
            &:hover {
              i {
                color: $targetColor;
              }
              color: $asideHoverColor;
            }
          }
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
        background-image: url("~assets/img/article-cover.png");
        background-size: cover;
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
@media screen and (max-width: 700px) {
  main .aside-col {
    margin-top: 20px;
    padding-left: 0;
  }
  main .timeline-col .timeline-wrap .timeline-article .article-title {
    font-size: 22px;
    padding-top: 15px;
  }
}
</style>


