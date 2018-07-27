<template>
    <div class="container essay-main-wrap">
        <essayItem :essayItem="essayObj" :isIndex="false" />
    </div>
</template>
<script>
import axios from "~/plugins/axios";
import essayItem from "~/components/essayItem";
export default {
  async asyncData({ route, env }) {
    const id = route.query.essayId;
    //   var r = await axios.post(`${env.baseUrl}/getArticleDetail`,{
    //       id:id
    //   })

    //   return {
    //       essayObj:r.data.result
    //   }
  },
  data() {
    return {
      essayObj: ""
    };
  },
  components: {
    essayItem
  },
  created() {
    const id = this.$route.query.essayId;
    axios
      .post(`${process.env.baseUrl}/getArticleDetail`, {
        id: id
      })
      .then(r => {
          console.log(r)
        if (r.data.status == 1) {
            console.log(r.data.result)
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
