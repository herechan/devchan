<template>
  <div class="container essay-main-wrap">
    <essayItem :essayItem="essayObj" :isIndex="false" />
  </div>
</template>
<script>
import axios from "~/plugins/axios";
import essayItem from "~/components/essayItem";
export default {
  data() {
    return {
      essayObj: new Object()
    };
  },
  components: {
    essayItem
  },
  scrollToTop: true,
  mounted() {
    const id = this.$route.query.essayId;
    axios
      .post(`${process.env.baseUrl}/getArticleDetail`, {
        id: id
      })
      .then(r => {
        if (r.data.status == 1) {
          this.essayObj = r.data.result;
        }
      });
  }
};
</script>
<style lang="scss" scoped>
.essay-main-wrap {
  width: 100%;
}
</style>
