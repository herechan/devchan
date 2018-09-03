<template>
  <div class="container">
    <FilterCard class="filter-card" />
    <nuxt-child/>
    <div class="page-box" v-if="$store.state.essayPageSize > 9">
      <el-pagination @current-change="pageChange" :current-page="$store.state.essayCurrentPage" :page-size="9" layout="prev, pager, next" :total="$store.state.essayPageSize">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import FilterCard from "~/components/filterCard.vue";
import axios from "~/plugins/axios";
export default {
  components: {
    FilterCard
  },
  methods: {
    pageChange(number) {
      this.$store.commit("setEssayCurrentPage",number);
      this.$store.commit("setEssaySortLoading",true);
      window.scrollTo(0,0)
      var type = this.$route.query.type
        ? this.$route.query.type
        : "";
      this.$router.push({
        path: "essayIndex",
        query: {
          type: type,
          page: number
        }
      });
    }
  },
  created() {},
  data() {
    return {
      pageNumber: 0
    };
  },
  computed:{
    // pageSize(){
    //   return this.$store.state.
    // }
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding-left: 30px;
  /deep/ .filter-inner {
    min-height: 46px;
  }
  /deep/ .el-pagination button {
    background-color: $bgColor;
  }
}

@media screen and(max-width: 768px) {
  .container {
    padding-left: 20px;
  }
}
@media screen and(max-width: 1199px) {
  .filter-card {
    width: calc(100% + 20px);
    margin-left: -20px;
  }
}
</style>
