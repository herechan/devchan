<template>
  <ul class="filter-inner li-none">
    <li class="filter-skeleton" v-if="typeSkeleton">
      <div class="filter-skeleton-line"></div>
    </li>
    <li v-else @click="tagTrigger(index,item)" :class="{'filter-active':setTypeActive(item)}" class="filter-item" v-for="(item, index) in tags" :key="index">{{item.name}}</li>
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
      tagArr: [],
      activeTagsList: [],
      typeSkeleton:true
    };
  },
  watch: {
    $route(to, from, next) {
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
      this.$store.commit("setEssaySortLoading", true);
      this.$store.commit("setEssayCurrentPage",1)
      if (!this.tagArr.includes(item.name)) {
        this.tagArr.push(item.name);
      } else {
        const index = this.tagArr.indexOf(item.name);
        this.tagArr.splice(index, 1);
      }
      this.$store.dispatch("setArticleTagsActive", this.tagArr.slice(0));
      this.setTypeState("trigger");
      //点击标签的同时，在地址栏加上参数
      if (this.isPage()) {
        // const page = this.$route.query.page ? this.$route.query.page:1
        this.$router.push({
          path: "essayIndex",
          query: {
            type: this.activeTagsList.join(","),
            page:1
          }
        });
      }
    },
    async setTypeState(e) {
      this.activeTagsList = [];
      this.$store.state.articleTagsActive.forEach(element => {
        if (element) this.activeTagsList.push(element);
      });
      var pageNumber = this.$route.query.page;
      if (e != "trigger") {
        //避免两次提交请求
        await this.$store.dispatch("setEassayList", {
          essaySortList: this.activeTagsList,
          pageNumber: pageNumber ? pageNumber : 1
        });
        setTimeout(() => {
          this.$store.commit("setEssaySortLoading",false)
        }, 500);
      }
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
      var page = this.$route.query.page ? this.$route.query.page : 1;
      this.$store.commit("setArticleTagsActive", handledList);
      this.$store.commit("setEssayCurrentPage",page)
    }
  },
  mounted() {
    axios.get(`${process.env.baseUrl}/articleTags`).then(r => {
      if (r.status == 200 && r.data.result.length > 0) {
        this.$store.commit("getArticleTags", r.data.result);
        this.typeSkeleton = false;
      }
    });

    if (this.$route.query.type) {
      this.tagArr = this.$route.query.type.split(",");
    }
    //mounted page,first get route parameter and then setTypeState
    // this.$store.commit("setEssaySortLoading", true);
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
  .filter-skeleton{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    height: 28px;
    padding-right: 20px;
    .filter-skeleton-line{
      height: 15px;
      border-radius: 4px;
      background-color: $page404;
      width: 100%;
    }
  }
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
