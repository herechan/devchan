<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet" />
    <header class="header g-shadow">
      <div class="container flex mobile-container">
        <div class="mobile-logo">
          <a href="/">
            <img src="../static/logo.png" alt="Casper" class="logo" />
          </a>
          <a href="/"><span>CASPER</span></a>
        </div>
        <div class="mobile-container mobile-sub-nav">
          <ul class="flex nav-bar-mobile">
            <li
              v-for="(item, index) in navList"
              @click="navHandle(index, item)"
              :key="index"
              :class="navIndex === index ? 'active' : ''"
            >
            <span class="nav-name">{{item.name}}</span>
            </li>
            <li>
              <img src="@imgs/search.png" alt="search" class="search">
            </li>
          </ul>
        </div>
      </div>
      <div class="container flex pc-container">
        <div class="left">
          <a href="/">
            <img src="../static/logo.png" alt="Casper" class="logo" />
          </a>
          <ul class="flex nav-bar">
            <li
              v-for="(item, index) in navList"
              @click="navHandle(index, item)"
              :key="index"
              :class="navIndex === index ? 'active' : ''"
            >
            <span class="nav-name">{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="right">
          <div>
            <img src="@imgs/search.png" alt="search" class="search">
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container clear content-wrap">
        <Row>
          <Col :sm="24" :lg="5">
            <div class="sidebar-left">
              <div class="info-card g-shadow">
                <div class="level1">
                  <div class="portrait">
                    <img src="@imgs/portrait.jpg" alt="" class="portrait">
                  </div>
                  <p class="name">
                    Casper
                  </p>
                  <p class="profession">
                    Web Developer
                  </p>
                  <p class="coor">
                    <img src="@imgs/coor.png" alt="hangzhou">
                    Hangzhou, Zhejiang
                    </p>
                </div>
                <div class="level2">
                  <ul>
                    <li>
                      <p class="title">POST</p>
                      <p class="num">11</p>
                    </li>
                    <li>
                      <p class="title">CATEGORIES</p>
                      <p class="num">6</p>
                    </li>
                    <li>
                      <p class="title">TAG</p>
                      <p class="num">3</p>
                    </li>
                  </ul>
                </div>
                <p class="follow-btn">Follow</p>
                <ul class="flex icon-line">
                  <li><a href=""><img src="@imgs/twitter.png" alt="twitter"></a></li>
                  <li><a href=""><img src="@imgs/instagram.png" alt="instagram"></a></li>
                  <li><a href=""><img src="@imgs/github.png" alt="github"></a></li>
                  <li><a href=""><img src="@imgs/google.png" alt="google"></a></li>
                </ul>
              </div>
            </div>
          </Col>
          <!-- 文章主体列表 -->
          <Col :sm="24" :lg="14">
            <!-- <article>
              <ul>
                <li class="main-item g-shadow" v-for="(item, index) in articleList" :key="index">
                  <img :src="item.coverPath" class="cover">
                  <p class="title"><a href="/">{{item.title}}</a></p>
                  <p class="subscribe">{{item.intro}}</p>
                  <p class="more">Read More</p>
                </li>
              </ul>
            </article> -->
            <nuxt-child/>
          </Col>
          <Col  :sm="24" :lg="5">
            <div class="sidebar-right g-shadow">
              <p class="title">
                近期文章
              </p>
              <ul>
                <li class="flex">
                  <img src="@imgs/recent-test.jpg" class="cover">
                  <div class="info">
                    <p class="time">2020-03-09</p>
                    <p class="title">a simple, delicateasdfsfsdfsdfsdfdsfsdfdsfdsfsdfdssdfsdf</p>
                    <p class="cat">旅行</p>
                  </div>
                </li>
                <li class="flex">
                  <img src="@imgs/recent-test.jpg" class="cover">
                  <div class="info">
                    <p class="time">2020-03-09</p>
                    <p class="title">a simple, delicateasdfsfsdfsdfsdfdsfsdfdsfdsfsdfdssdfsdf</p>
                    <p class="cat">旅行</p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  components: {},
  async asyncData ({$axios}) {
    let {data} = await $axios.$get(`${process.env.baseUrl}/getArticleTwitterList`)
    return {
      articleList: data.articleList
    }
  },
  data() {
    return {
      navIndex: 0,
      navList: [
        { name: "主页", url: '/' },
        { name: "微博" , url: '/weibo'},
        { name: "相册" },
        { name: "文章" },
        { name: "关于" }
      ],
      articleList: []
    };
  },
  methods: {
    navHandle(index, item) {
      this.navIndex = index;
      this.$router.push({
        path: item.url
      })
    }
  },
  watch: {
  },
  mounted() {
  },
};
</script>
<style lang="less" scoped>
.mobile-container{
  display: none;
}
header {
  background-color: #fff;
  * {
    box-sizing: border-box;
  }
  .container {
    margin: auto;
    height: 60px;
    justify-content: space-between;
    > div {
      height: 100%;
      display: flex;
      align-items: center;
      &.left {
        > a {
          display: flex;
          align-items: center;
          height: 100%;
          line-height: 60px;
        }
      }
      .logo {
        height: 40px;
        // margin-right: 10px;
        .casper{
          color: @gray;
        }
      }
      ul {
        li {
          height: 100%;
          padding: 0;
          font-size: 14px;
          cursor: pointer;
          line-height: 60px;
          transition: color 0.2s;
          &:first-child {
            margin-left: 10px;
          }
          &:hover {
            color: @main-color;
          }
          &.active {
            color: @main-color;
          }
          .nav-name{
            display: block;
            padding: 0 20px;
            &:hover{
              background-color: @fafa;
            }
          }
        }
      }
      &.right{
        .search{
          height: 22px;
          margin-top: 4px;
          cursor: pointer;
        }
      }
    }
  }
}
section{
  *{
    box-sizing: border-box;
  }
  padding: 50px 20px;
  .container{
    position: relative;
  }
  .content-wrap{
    &.container{
      margin: auto;
    }
    justify-content: space-around;
    .sidebar-left{
      user-select: none;
      .info-card{
        border-radius: @g-radius;
        box-shadow: @g-shadow;
        width: 100%;
        background-color: #fff;
        padding: 20px;
        padding-top: 0;
        .portrait{
          height: 128px;
          width: 128px;
          margin: auto;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 5px;
        }
        .name{
          font-size: @font2;
          text-align: center;
          line-height: 1.6em;
        }
        .profession{
          text-align: center;
          font-size: @font4;
          line-height: 1.6em;
        }
        .coor{
          img{
            height: 15px;
            position: relative;
            top: 2px;
          }
          text-align: center;
          font-size: @font5;
          color: @gray;
          margin: 5px 0;
        }
        .level2{
          margin: 10px 0;
          ul{
            display: flex;
            justify-content: space-between;
            li{
              width: 30%;
              p{
                text-align: center;
                font-size: 12px;
                &.num{
                  font-weight: 400;
                  font-size: 24px;
                  color: @gray-deep1;
                }
              }
            }
          }
        }
        .follow-btn{
          cursor: pointer;
          background-color: @main-color;
          border-radius: 25px;
          color: #fff;
          line-height: 35px;
          height: 35px;
          text-align: center;
          font-size: 14px;
        }
        .icon-line{
          justify-content: space-between;
          margin: 19px 0;
          margin-bottom: 10px;
          li{
            img{
              height: 18px;
            }
            width: 25%;
            text-align: center;
          }
        }
      }
    }
    .sidebar-right{
      border-radius: @g-radius;
      box-shadow: @g-shadow;
      background-color: #fff;
      padding: 20px;
      .title{
        line-height: 1em;
        color:@gray;
      }
      ul{
        li{
          &:last-child{
            margin-bottom: 0;
          }
          img{
            height: 64px;
            width: 64px;
            object-fit: cover;
            margin-right: 10px;
          }
          height: 64px;
          justify-content: flex-start;
          .info{
            width: calc(100% - 20px);
            .time{
              margin-top: 3px;
            }
            .title{
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              padding-right: 20px;
              margin: 3px 0;
            }
          }
          margin: 20px 0;
        }
      }
    }
  }
}
article{
  padding: 0 20px;
  .main-item{
    background-color: #fff;
    border-radius: @g-radius;
    overflow: hidden;
    margin-bottom: 30px;
    .cover{
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    .title{
      padding: 0 20px;
      line-height: 4.5em;
      letter-spacing: 1px;
      a {
        font-size: @font1;
        color: @gray-deep1;
        &:hover{
          color: @main-color;
        }
      }
    }
    .subscribe{
      font-size: @font3;  
      color: @gray;
      padding: 0 20px;
    }
    .more{
      background-color: #f5f5f5;
      color: @gray-deep1;
      display: inline-block;
      font-size: @font5;
      margin: 20px;
      padding: 5px 15px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
      &:hover{
        background-color: @main-color;
        color: #fff;
      }
    }
  }
}
@media screen and (max-width: 768px){
  .nav-bar{
    display: none;
  }
  .pc-container{
    display: none;
  }
  .mobile-container{
    display: block;
    height: auto!important;
    .mobile-logo{
      justify-content: center;
      margin-right: 5px;
      height: 60px;
      img{
        height: 30px!important;
        float: left;
        margin-right: 5px;
      }
      span{
        font-size: 18px;
        font-weight: lighter;
        color: @gray-deep1;
      }
    }
    .mobile-sub-nav{
      height: 55px;
      display: block;
      .nav-bar-mobile{
        justify-content: space-between;
        li{
          justify-content: flex-start;
          height: auto;
          line-height: normal;
          display: flex;
          align-items: center;
          span{
            padding: 15px 5px;
          }
          &:first-child{
            span{
              padding-left: 0;
            }
          }
          img.search{
            height: 16px;
          }
        }
      }
    }
  }
}
</style>
