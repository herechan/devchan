<template>
  <div class="container">
    <FilterCard class="filter-card"/>
    <nuxt-child/>
  </div>
</template>
<script>
import FilterCard from "~/components/filterCard.vue";
import axios from "~/plugins/axios";
export default {
  components: {
    FilterCard
  },
  
  methods:{
    go(){
      this.$router.push({
        path:"/essayIndex/25"
      })
    }
  },
  mounted() {
    // axios
    //   .get(`${this.baseUrl}/getArticleList`, {
    //     params: {
    //       pageNumber: this.pageNumber
    //     }
    //   })
    //   .then(r => {
    //     if (r.data.status == 1) {
    //       // console.log(r);
    //     }
    //   });
  },
  data() {
    return {
      pageNumber: 0
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding-left: 30px;
  /deep/ .filter-inner {
    min-height: 46px;
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
