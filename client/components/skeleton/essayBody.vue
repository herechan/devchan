<template>
    <div class="essay-main-skeleton">
        <Item>
            <div slot="article" class="essay-main-article">
                <div class="article-first"></div>
                <div class="article-second"></div>
            </div>
        </Item>
    </div>
</template>
<script>
import Item from "./indexItem";
export default {
  components: {
    Item
  }
};
</script>
<style lang="scss" scoped>
.essay-main-article {
  height: 239px;
  padding-top: 20px;
  div {
    height: 18px;
    margin-bottom: 20px;
    background-color: $page404;
    border-radius: 4px;
  }
  .article-first {
    width: 60%;
  }
  .article-second {
    width: 30%;
  }
}
</style>
