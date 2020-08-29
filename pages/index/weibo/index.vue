<template>
  <article>
    <article class="container">
      <section class="weibo-item">
        <header class="flex">
          <img src="@imgs/dragon.jpg" alt class="profile" />
          <div class="right flex">
            <div class="info">
              <p>Casper</p>
              <p class="time">1天前</p>
            </div>
            <div class="more">
              <svg class="iconfont" aria-hidden="true">
                <use xlink:href="#icon-caidan1" />
              </svg>
            </div>
          </div>
        </header>
        <article>
          <p>我在蓬莱长岛</p>
          <ul class="img-list">
            <li class="img-item active">
              <img src="@imgs/test-img/1.jpeg" />
            </li>
            <li class="img-item">
              <img src="@imgs/test-img/2.jpeg" />
            </li>
            <li class="img-item">
              <img src="@imgs/test-img/3.jpeg" />
            </li>
            <li class="img-item">
              <img src="@imgs/test-img/4.jpeg" />
            </li>
            <li class="img-item">
              <img src="@imgs/test-img/5.jpeg" />
            </li>
            <li class="img-item">
              <img src="@imgs/test-img/6.jpeg" />
            </li>
            <li class="img-item">
              <img src="@imgs/test-img/1.jpeg" />
            </li>
            <li class="img-item">
              <img src="@imgs/test-img/2.jpeg" />
            </li>
            <li class="img-item">
              <img src="@imgs/test-img/3.jpeg" />
            </li>
          </ul>
        </article>
        <client-only>
          <no-ssr>
            <div class="vue-carousel-wrap" ref="vueCarouselWrap" :class="direction">
              <carousel @click.native="sliderNativeClickHandle" :paginationEnabled=false :navigationEnabled="true" :perPage="1" :adjustableHeight=true @mousemove.native="sliderMousemoveHandle" ref="vueCarousel">
                <slide>
                  <img src="@imgs/test-img/1.jpeg" />
                </slide>
                <slide>
                  <img src="@imgs/test-img/2.jpeg" />
                </slide>
                <slide>
                  <img src="@imgs/test-img/3.jpeg" />
                </slide>
                <slide>
                  <img src="@imgs/test-img/1.jpeg" />
                </slide>
                <slide>
                  <img src="@imgs/test-img/2.jpeg" />
                </slide>
                <slide>
                  <img src="@imgs/test-img/3.jpeg" />
                </slide>
                <slide>
                  <img src="@imgs/test-img/1.jpeg" />
                </slide>
                <slide>
                  <img src="@imgs/test-img/2.jpeg" />
                </slide>
                <slide>
                  <img src="@imgs/test-img/3.jpeg" />
                </slide>
              </carousel>
            </div>
          </no-ssr>
        </client-only>
      </section>
    </article>
  </article>
</template>
<script>
export default  {
    async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
    $axios
  }) {},
  data() {
    return {
      direction: ''
    }
  },
  methods: {
    sliderNativeClickHandle () {
      if (this.direction === 'left') {
        document.querySelector('.VueCarousel-navigation-prev').click()
      } else {
        document.querySelector('.VueCarousel-navigation-next').click()
      }
    },
    sliderMousemoveHandle (e) {
      const elementDistanceInfo = this.$refs.vueCarousel.$el.getBoundingClientRect()
      const clientX = e.clientX
      const leftHalfDistance = elementDistanceInfo.left + elementDistanceInfo.width / 2
      if (clientX > leftHalfDistance) {
        this.direction = 'right'
      } else {
        this.direction = 'left'
      }
    }
  },
}
</script>
<style lang="less">
.container {
  .weibo-item {
    padding: 20px;
    background-color: @card-bg;
    box-shadow: @g-shadow;
    border-radius: 6px;
    header {
      justify-content: flex-start;
      .profile {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .info {
        p {
          margin: 2px 0;
        }
      }
    }
    > article {
      padding-left: 50px;
      padding-top: 10px;
      > p {
        font-size: 14px;
      }
      .img-list {
        margin: 20px 0;
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        position: relative;
        .img-ray{
          border-radius: 6px;
          z-index: 9;
          
        }
        .img-item {
          margin-right: 10px;
          margin-bottom: 15px;
          transition: all 0.3s;
          border-radius: 6px;
          overflow: hidden;
          &.active{
            box-shadow: 0px 5px 9px 2px @main-color;
            transform: translateY(-5%);
          }
          img {
            height: 78px;
            width: 78px;
            object-fit: cover;
            float: left;
            cursor: pointer;
          }
        }
      }
      .carousel {
        .carousel-item {
          display: flex;
          align-items: center;
          img {
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
    .vue-carousel-wrap{
      padding: 0 15px 0 50px;
      &.right{
        cursor: url('./img/arrow-right.png'), auto;
      }
      &.left{
        cursor: url('./img/arrow-left.png'), auto;
      }
      .VueCarousel {
        padding-bottom: 30px;
        .VueCarousel-wrapper {
          .VueCarousel-inner {
            .VueCarousel-slide {
              img{
                width: 100%;
                border-radius: 6px;
              }
            }
          }
        }
        .VueCarousel-navigation-button{
          display: none;
        }
        .VueCarousel-pagination{
          .VueCarousel-dot-container{
            margin-top: 0!important;
            margin-bottom: 20px;
            .VueCarousel-dot--active{
              background-color: @main-color!important;
            }
          }
        }
      }
    }
  }
}
</style>