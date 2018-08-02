<template>
  <div class="article-meta clearfix">
    <p>
      <i class="iconfont">&#xe62e;</i>
      <span>{{metaTime}}</span>
    </p>
    <p class="elli">
      <i class="iconfont">&#xe68c;</i>
      <span class="tag-item" v-for="(item, index) in tagArr" :key="index" v-if="item">{{item}}</span>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    metaTime: {
      requrie: true,
      type: String
    },
    metaTags: {
      requrie: true,
      type: Array
    }
  },
  computed: {
    tagArr() {
      return this.metaTags;
    }
  },
  mounted() {
    var self = this;
  }
};
</script>
<style lang="scss" scoped>
.article-meta {
  padding: 0 20px;
  margin-top: 5px;
  // padding-left: 17px;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: flex-start;
  p {
    float: left;
    align-items: center;
    line-height: 1em;
    padding-top: 10px;
    display: flex;
    &:first-child {
      margin-right: 15px;
    }
    i{
      font-size: 12px;
    }
    span {
      margin-left: 3px;
      font-size: 12px;
    }
    .tag-item{
      cursor: pointer;
      margin-right: 5px;
    }
    &:first-child{
      width: 80px
    }
    &:last-child{
      width: calc(100% - 95px);
      display: block;
    }
  }
}
</style>
