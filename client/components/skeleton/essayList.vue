<template>
    <div class="essay-skeleton" ref="wrap">
        <!-- <div class="essay-skeleton-timeline">
        </div> -->
        <div class="essay-skeleton-inner">
            <div class="skeleton-item" v-for="(item, index) in timeline" :key="index" :ref="'time'" v-if="state(index)">
                <div class="skeletion-time"></div>
                <div class="skeleton-line" v-for="(timeItem, timeIndex) in item.number" :key="timeIndex"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.essay-skeleton {
  // padding: $cardPadding;
  // @include cardBorder;
  // background-color: $cardBg;
  // margin-left: -30px;
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
    // padding-left: 30px;
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
    var wrap = document.querySelector(".essay-skeleton");
  },
  computed: {
  },
  data() {
    return {
      timeline: [
        {
          number: 2
        },
        {
          number: 3
        },
        {
          number: 3
        },
        {
          number: 2
        }
      ]
    };
  },
  methods: {
    state(index) {
        this.$nextTick(()=>{
            var cur = this.$refs.time[index];
            console.log(cur.offsetTop,this.$refs.wrap.offsetHeight)
            if(cur.offsetTop + cur.offsetHeight>this.$refs.wrap.offsetHeight){
                
                cur.style.display = "none"
            }
        })
      return true;
    }
  }
};
</script>
