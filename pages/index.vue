<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet" />
    <header class="header g-shadow">
      <div class="container flex">
        <div class="left">
          <a href="/"><img src="@imgs/logo.png" alt="Casper" class="logo"/></a>
          <ul class="flex">
            <li v-for="(item, index) in navList" @click="navHandle(index)" :key="index" :class="navIndex === index ? 'active' : ''">{{item.name}}</li>
          </ul>
        </div>
        <div class="right"></div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      navIndex: 0,
      navList: [{name: '主页'},
      {name: '微博'},
      {name: '相册'},
      {name: '文章'},
      {name: '关于'}]
    }
  },
  methods: {
    navHandle (index) {
      this.navIndex = index
    }
  }
};
</script>
<style lang="less" scoped>
header {
  *{
    box-sizing: border-box;
  }
  .container {
    margin: auto;
    height: 60px;
    justify-content: space-between;
    >div{
      height: 100%;
      display: flex;
      align-items: center;
      &.left{
        >a{
          display: flex;
          align-items: center;
          height: 100%;
          line-height: 60px;
        }
      }
      .logo{
        height: 40px;
      }
      ul{
        li{
          height: 100%;
          padding: 0 15px;
          font-size: 14px;
          cursor: pointer;
          line-height: 60px;
          transition: color .2s;
          &:first-child{
            margin-left: 10px;
          }
          &:hover{
            color: @main-color;
          }
          &.active{
            color: @main-color;
          }
        }
      }
    }
  }
}
</style>
