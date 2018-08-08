<template>
  <div class="container essay-main-wrap">
    <div class="essay-main-inner" :class="dataReady?'':'filter-blur'" v-if="!isInit">
      <essayItem :essayItem="essayObj" :isIndex="false" />
    </div>
    <essaySkeleton v-else></essaySkeleton>
  </div>
</template>
<script>
import axios from "~/plugins/axios";
import essayItem from "~/components/essayItem";
import essaySkeleton from "~/components/skeleton/essayBody";
export default {
  data() {
    return {
      dataReady: false,
      isInit:true
    };
  },
  watch: {
    $route(to, from) {
      this.dataReady = false;
      this.renderEassyBody();
    }
  },
  computed: {
    essayObj() {
      var obj = this.$store.state.essayMessage;
      return obj ? obj : new Object();
    }
  },
  updated() {
    
  },
  components: {
    essayItem,
    essaySkeleton
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
          this.isInit = false;
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
.essay-main-inner {
  width: 100%;
  position: relative;
  transition: all 0.3s;
}
</style>
