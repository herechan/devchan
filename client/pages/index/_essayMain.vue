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
      // essayObj: new Object()
    };
  },
  watch: {
    $route(to, from) {
      this.renderEassyBody()
    }
  },
  computed: {
    essayObj() {
      var obj = this.$store.state.essayMessage;
      return obj ? obj : new Object();
    }
  },
  components: {
    essayItem
  },
  scrollToTop: true,
  mounted() {
    this.renderEassyBody()
  },
  methods: {
    renderEassyBody() {
      const id = this.$route.query.essayId;
        this.$store.dispatch("getEssayMessage", {
          id: id
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.essay-main-wrap {
  width: 100%;
}
</style>
