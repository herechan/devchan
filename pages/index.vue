<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet" />
    <header class="header g-shadow">
      <div class="container flex">
        <div class="left">
          <a href="/">
            <img src="../static/logo.png" alt="Casper" class="logo" />
          </a>
          <ul class="flex">
            <li
              v-for="(item, index) in navList"
              @click="navHandle(index)"
              :key="index"
              :class="navIndex === index ? 'active' : ''"
            >{{item.name}}</li>
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
          <Col :xs="24" :md="5">
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
              </div>
            </div>
          </Col>
          <Col :xs="24" :md="14">
          center
          </Col>
          <Col  :xs="24" :md="5">
            <div class="sidebar-right">d</div>
          </Col>
        </Row>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      navIndex: 0,
      navList: [
        { name: "主页" },
        { name: "微博" },
        { name: "相册" },
        { name: "文章" },
        { name: "关于" }
      ]
    };
  },
  methods: {
    navHandle(index) {
      this.navIndex = index;
    }
  }
};
</script>
<style lang="less" scoped>
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
      }
      ul {
        li {
          height: 100%;
          padding: 0 15px;
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
          border-radius: 16px;
          color: #fff;
          line-height: 30px;
          height: 30px;
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
