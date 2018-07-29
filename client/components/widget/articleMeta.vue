<template>
    <div class="article-meta">
        <p>
          <i class="iconfont">&#xe62e;</i>
          <span style="font-size:14px">{{metaTime}}</span>
        </p>
        <p>
          <i class="iconfont">&#xe663;</i>
          <span class="tag-item" v-for="(item, index) in tagArr" :key="index" v-if="item">{{item}}</span>
        </p>
      </div>
</template>
<script>
export default {
    props:{
      metaTime:{
        requrie:true,
        type:String
      },
      metaTags:{
        requrie:true,
        type:Array
      }
    },
    computed:{
      tagArr(){
        return this.metaTags
      }
    },
    mounted() {
      var self = this;
    },
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
          cursor: pointer;
        }
      }
    }
</style>
