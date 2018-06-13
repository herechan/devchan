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
          <div class="timeline-wrap">
            <div class="timeline-article">
              <a href=""><img src="~assets/img/article-cover.png" alt="" class="timeline-article-cover"></a>
              <p class="article-title" title="之后所有金刚狼都是在扮演休杰克曼，从今往后谈论起金刚狼，我们也只会想到他">之后所有金刚狼都是在扮演休杰克曼，从今往后谈论起金刚狼，我们也只会想到他</p>
              <div class="article-meta">
                <p>
                  <i class="iconfont">&#xe62e;</i>
                  <span style="font-size:14px"> 2018-6-12</span>
                </p>
                <p>
                  <i class="iconfont">&#xe68c;</i>
                  <span>movie</span>
                </p>
              </div>
              <div class="article-section article-section-normal">
                <p>
                  作为一部R级片，能够在中国上映，还真的是挺让人意外的。毕竟去年的《死侍》就有这先例。而且《金刚狼3》是受到《死侍》大卖 的情况才拍成的R级片。不过先不说片子的尺度和删减问题，光是能够上映，这个消息已经够我们嗨的了。
                </p>
                <p>
                  《金刚狼3》应该是我们最后一次看到休.杰克曼饰演的金刚狼了！其实狼叔的退休，早就应该预想到。他不只一次提出退出的要求。除了体能问题之外，漫画中的金刚狼之死也是原因之一，早在2014年，金刚狼就死在了漫画里。 的情况才拍成的R级片。不过先不说片子的尺度和删减问题，光是能够上映，这个消息已经够我们嗨的了。
                </p>
              </div>
              <div class="article-more">查看全文</div>
              <div class="devider"></div>
              <div class="share-btn clearfix">
                <div>
                  <i class="iconfont">&#xea87;</i>
                  <span>分享</span>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :lg="5" :sm="7" class="recent-col">
          <p class="recent-title">近期文章</p>
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
        </el-col>
      </el-row>
    </main>
  </div>
</template>

<script>
import WebHeader from "~/components/WebHeader.vue";
export default {
  components: {
    WebHeader
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
        padding: 15px 20px;
        img {
          display: block;
          max-width: 135px;
          margin: auto;
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
                transition: .2s ease;
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
    .timeline-wrap {
      .timeline-article {
        background: #fff;
        @include cardBorder;
        padding-bottom: 20px;
        a {
          display: block;
          .timeline-article-cover {
            width: 100%;
          }
        }
        .timeline-article-cover {
          width: 100%;
        }
        .article-title {
          padding: 20px 20px 0;
          font-size: 28px;
          cursor: pointer;
          transition: 0.2s ease;
          user-select: none;
          &:hover {
            color: $mainColor;
          }
        }
        .article-meta {
          padding: 0 20px;
          margin-top: 15px;
          display: flex;
          justify-content: flex-start;
          p {
            align-items: center;
            display: flex;
            &:first-child {
              margin-right: 15px;
            }
            span {
              margin-left: 3px;
            }
          }
        }
        .article-section-normal {
          padding: 0 20px;
          margin: 1.6em 0;
          line-height: 1.7em;
          p {
            margin-bottom: 20px;
          }
        }
        .article-more {
          display: inline-block;
          line-height: 1em;
          padding: 6px 15px;
          border-radius: 15px;
          background: #f5f8f9;
          font-size: 14px;
          color: #999;
          text-shadow: 0 1px #fff;
          text-decoration: none;
          margin-left: 15px;
          cursor: pointer;
          transition: 0.2s ease;
          &:hover {
            background: #38b7ea;
            color: #fff;
            text-decoration: none;
            text-shadow: 0 1px #169cd2;
          }
        }
        .devider {
          height: 1px;
          border-top: 1px solid $borderColor;
          margin: 20px;
        }
        .share-btn {
          padding: 0 20px;
          div {
            display: flex;
            justify-content: flex-end;
            float: right;
            cursor: pointer;
            &:hover {
              span {
                color: #565a5f;
              }
              i {
                color: #565a5f;
              }
            }
            span {
              color: #999;
              font-size: 12px;
              margin-left: 5px;
            }
            i {
              color: #999;
            }
          }
        }
      }
    }
  }
  .recent-col {
    padding-left: 25px;
    .recent-title {
      font-size: 14px;
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

@media screen and (max-width: 768px) {
  main .recent-col {
    margin-top: 20px;
    padding-left: 0;
  }
  main .timeline-col .timeline-wrap .timeline-article .article-title{
    font-size: 22px;
    padding-top: 15px;
  }
}
</style>
