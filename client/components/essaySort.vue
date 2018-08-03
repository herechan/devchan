
<template>
  <ul class="filter-inner li-none">
    <li @click="tagTrigger(index,item)" :class="{'filter-active':setTypeActive(item)}" class="filter-item" v-for="(item, index) in tags" :key="index">{{item.name}}</li>
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
  watch: {
    $route() {
      this.getRouteParamsFunc();
      this.setTypeState();
    }
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
    setTypeActive(item) {
      if (this.$store.state.articleTagsActive.includes(item.name)) {
        return true;
      } else {
        return false;
      }
    },
    async tagTrigger(index, item) {
      var arr = this.tagArr;
      if (arr[index]) {
        this.$set(arr, index, null);
      } else {
        this.$set(arr, index, item.name);
      }
      this.$store.dispatch("setArticleTagsActive", this.tagArr.slice(0));
      this.setTypeState();
    },
    async setTypeState() {
      var list = [];
      this.$store.state.articleTagsActive.forEach(element => {
        if (element) list.push(element);
      });
      var pageNumber = this.$route.query.page;
      if (this.isPage()) {
        this.$router.push({
          path: "essayIndex",
          query: {
            type: list.join(",")
          }
        });
      }
      this.$store.dispatch("setEassayList", {
        essaySortList: list,
        pageNumber: pageNumber ? pageNumber : 0
      });
    },
    isPage() {
      return this.$route.path.match(/\/essayIndex/);
    },
    getRouteParamsFunc() {
      var typeList,
        handledList = [];
      if (this.$route.query.type) {
        typeList = this.$route.query.type.split(",");
        typeList.forEach(element => {
          if (element) handledList.push(element);
        });
      }
      this.$store.commit("setArticleTagsActive", handledList);
    }
  },
  mounted() {
    console.log(this.$route)
    console.log(this.$router)
    axios.get(`${process.env.baseUrl}/articleTags`).then(r => {
      if (r.status == 200 && r.data.result.length > 0) {
        this.$store.commit("getArticleTags", r.data.result);
      }
    });
    //moutend page,first get route parameter and then setTypeState
    this.getRouteParamsFunc();
    this.setTypeState();
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
