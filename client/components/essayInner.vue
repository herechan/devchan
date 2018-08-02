<!--文章页面的主体内容-->
<template>
    <div class="essay-article">
        <div class="essay-inner">
            <p class="essay-title">
                <span @click="goDetail(essayItem._id)">{{essayItem.title}}</span>
            </p>
        </div>
        <ArticleMeta :metaTime="essayItem.time" :metaTags="essayItem.tags"/>
    </div>
</template>
<style lang="scss" scoped>
.essay-article {
  .essay-inner {
    padding: 10px 15px;
    position: relative;
    background-color: #fff;
    padding-left: 18px;
    z-index: 98;
    border-bottom: 1px solid $borderColor;
    .essay-title {
      span {
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;
      }
    }
  }
  /deep/ .article-meta {
    margin-top: 10px;
    padding-bottom: 10px;
  }
}
@media screen and (max-width:768px){
  .essay-article .essay-inner .essay-title span{
    font-weight: 700;
  }
}
</style>
<script>
import ArticleMeta from "~/components/widget/articleMeta.vue";
export default {
  components: {
    ArticleMeta
  },
  props:{
    essayItem:{
      require:true,
      type:Object
    }
  },
  created() {
    // console.log(this.essayItem)
  },
  methods:{
    goDetail(id){
      this.$router.push({
        path:"essayMain",
        query:{
          essayId:id
        }
      })
    }
  }
};
</script>
