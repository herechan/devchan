
<template>
  <ul class="filter-inner">
    <li @click="tagTrigger(index,item)" :class="{'filter-active':tagArr[index]}" class="filter-item" v-for="(item, index) in tags" :key="index">{{item.name}}</li>
  </ul>
</template>
<script>
/**
 * 文章与后管理的文章标签列表
 */
import axios from "~/plugins/axios";
export default {
  data() {
    return {
      tagArr: []
    };
  },
  computed: {
    isActive(index) {
      return this.tagArr[index];
    },
    tags() {
      return this.$store.state.articleTags;
    }
  },
  methods: {
    tagTrigger(index, item) {
      var arr = this.tagArr;
      if (arr[index]) {
        this.$set(arr, index, null);
      } else {
        this.$set(arr, index, item.name);
      }
      this.$store.commit(
        "setArticleTagsActive",
        this.tagArr.slice(0)
      );
    }
  },
  mounted() {
    axios.get(`${process.env.baseUrl}/articleTags`).then(r => {
      if (r.status == 200 && r.data.result.length > 0) {
        this.$store.commit("getArticleTags", r.data.result);
      }
    });

    //清空标签选中状态
    this.$store.commit("setArticleTagsActive", []);
  }
};
</script>
<style lang="scss" scoped>
ul {
  padding-left: 0;
}
.filter-inner {
  padding: $cardPadding;
  display: flex;
  justify-content: flex-start;
  margin-left: 0;
  padding-left: 13px;
  padding-bottom: 8px;
  width: calc(100% + 26px);
  flex-wrap: wrap;
  .filter-item {
    padding: 0 8px;
    cursor: pointer;
    height: 28px;
    line-height: 25px;
    margin-right: 10px;
    user-select: none;
  }
  .filter-active {
    color: $mainColor;
  }
}
@media screen and(max-width: 768px) {
  .filter-item {
    margin-right: 0;
  }
}
</style>
