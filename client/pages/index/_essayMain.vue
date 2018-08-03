<template>
  <div class="container essay-main-wrap" :class="dataReady?'':'filter-blur'">
    <essayItem :essayItem="essayObj" :isIndex="false" />
  </div>
</template>
<script>
import axios from "~/plugins/axios";
import essayItem from "~/components/essayItem";
export default {
  data() {
    return {
      dataReady: false
    };
  },
  watch: {
    $route(to, from) {
      this.dataReady = false;
        this.renderEassyBody();
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.state.essayMessage = "";
    this.dataReady = false;
    next();
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
    this.renderEassyBody();
  },
  methods: {
    renderEassyBody() {
      var self = this;
      const id = this.$route.query.essayId;
      this.$store
        .dispatch("getEssayMessage", {
          id: id
        })
        .then(r => {
          setTimeout(() => {
            this.dataReady = true;
          }, 300);
          
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.opacity-box {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.8;
  z-index: 10;
  height: 100%;
  width: 100%;
}
.essay-main-wrap {
  width: 100%;
  position: relative;
  transition: all 0.3s;
}

</style>
