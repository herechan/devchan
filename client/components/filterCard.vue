<template>
  <div class="filter">
    <p class="filter-header">
      <span>文章分类</span>
    </p>
    <div class="filter-inner">
      <TagList/>
    </div>
  </div>
</template>
<script>
import TagList from "~/components/essaySort";
export default {
  components:{
    TagList
  }
};
</script>

<style lang="scss" scoped>
.filter {
  @include cardBorder;
  background-color: $cardBg;
  margin-bottom: 30px;
  overflow-x: hidden;
  .filter-header {
    border-bottom: 1px solid $borderColor;
    padding: $cardPadding;
    span {
      font-weight: bold;
    }
  }
}
</style>
