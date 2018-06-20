<!--文章页面的主体内容-->
<template>
    <div class="essay-article">
        <div class="essay-inner">
            <p class="essay-title">
                <span>forever youth forever weeping</span>
            </p>
        </div>
        <ArticleMeta/>
    </div>
</template>
<style lang="scss" scoped>
.essay-article {
  .essay-inner {
    padding: 10px 15px;
    position: relative;
    background-color: #fff;
    z-index: 98;
    border-bottom: 1px solid $borderColor;
    .essay-title {
      span {
        cursor: pointer;
      }
    }
  }
  .article-meta {
    margin-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
<script>
import ArticleMeta from "~/components/widget/articleMeta.vue";
export default {
  components: {
    ArticleMeta
  }
};
</script>
