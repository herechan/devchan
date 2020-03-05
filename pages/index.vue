<template>
  <div class="container">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet">
    <div>
      <logo />
      <!-- <h1 class="title">
        devchan
      </h1> -->
      <h2 class="subtitle">
        测试
      </h2>
      <div class="links">
        <Button type="primary" target="_blank" to="https://nuxtjs.org/">
          Documentation
        </Button>
        <Button target="_blank" to="https://github.com/nuxt/nuxt.js">
          GitHub
        </Button>
        <Button target="_blank" to="https://www.iviewui.com/">
          iView
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style>
body{
  font-family: 'Ubuntu', "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 24;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
