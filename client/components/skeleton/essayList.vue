<template>
  <div class="essay-skeleton" ref="wrap">
    <!-- <div class="essay-skeleton-timeline">
        </div> -->
    <div class="essay-skeleton-inner">
      <div class="skeleton-item" v-for="(item, index) in timeline" :key="index" :ref="'time'">
        <div class="skeletion-time"></div>
        <div class="skeleton-line" v-for="(timeItem, timeIndex) in item.number" :key="timeIndex"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.essay-skeleton {
  height: calc(100vh - 320px);
  position: relative;
  .essay-skeleton-timeline {
    height: 100%;
    border-radius: 4px;
    width: 18px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: $page404;
  }
  .essay-skeleton-inner {
    padding-right: 20px;
    .skeletion-time {
      height: 40px;
      width: 40px;
      background-color: $page404;
      border-radius: 50%;
    }
    .skeleton-line {
      height: 15px;
      border-radius: 4px;
      background-color: $page404;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .skeleton-item {
      // visibility: hidden;
    }
  }
}
@media screen and (max-width: 750px) {
  .essay-skeleton {
    height: calc(100vh - 430px);
  }
}
</style>
<script>
export default {
  mounted() {
    // window.onresize = () => {
    //   this.initElement();
    // };
  },
  created() {},
  computed: {},
  data() {
    return {
      timeline: [
        {
          number: 2
        },
        {
          number: 2
        },
        // {
        //   number: 3
        // },
        // {
        //   number: 2
        // }
      ]
    };
  },
  methods: {
    state() {
      this.$nextTick(() => {
        this.initElement();
      });
      return true;
    },
    initElement() {
      this.$refs.time.forEach(element => {
        element.style.visibility = "hidden"
        if (
          element.offsetTop + element.offsetHeight <=
          this.$refs.wrap.offsetHeight
        ) {
          element.style.visibility = "visible";
        }
      });
    }
  }
};
</script>
