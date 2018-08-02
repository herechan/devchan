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
  },
  mounted() {
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
