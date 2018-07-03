<template>
    <div class="article-meta">
        <p>
          <i class="iconfont">&#xe62e;</i>
          <span style="font-size:14px"> 2018-6-12</span>
        </p>
        <p>
          <i class="iconfont">&#xe663;</i>
          <span>movie</span>
        </p>
      </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
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
</style>
