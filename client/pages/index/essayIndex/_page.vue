<template>
  <div class="container">
    <div class="timeline-wrap" v-if="essayList.length > 0" :class="$store.state.essaySortLoading?'filter-blur':''">
      <div class="timeline-item" v-for="(item, index) in essayList" :key="index">
        <div class="timeline-year">
          <div class="year-icon">
            <i class="iconfont">&#xe62e;</i>
          </div>
          <span class="year-text">{{item.year}}</span>
        </div>
        <div class="essay-item" v-for="(essayItem,essayIndex) in item.list" :key="essayIndex">
          <div class="essay-dot"></div>
          <div class="essay-triangle"></div>
          <EssayInner :essayItem="essayItem" />
        </div>
      </div>
    </div>
    <EssaySkeleton v-if="loadingFlag"></EssaySkeleton>
    <noData v-else-if="$store.state.essayList==0"></noData>
  </div>
</template>
<script>
import EssayInner from "~/components/essayInner.vue";
import noData from "~/components/widget/noData.vue";
import axios from "~/plugins/axios";
import Loading from "~/components/widget/loading";
import EssaySkeleton from "~/components/skeleton/essayList";
export default {
  components: {
    EssayInner,
    noData,
    Loading,
    EssaySkeleton
  },
  watch:{
    "$store.state.essayList"(){
      this.loadingFlag = false;
    }
  },
  methods: {
    setTimeline() {
      var list = this.$store.state.essayList;
      if (list.length == 0) {
        this.noResult = true;
      }
      
      var yearList = [];
      var tempArr = [];
      list.forEach(element => {
        var year = element.time.split("-")[0];
        if (!yearList.includes(year)) {
          yearList.push(year);
        }
      });
      yearList.forEach(element => {
        var timeObj = {
          year: element,
          list: []
        };
        list.forEach(listElement => {
          if (listElement.time.match(timeObj.year)) {
            timeObj.list.push(listElement);
          }
        });
        tempArr.push(timeObj);
      });
      return tempArr;
    }
  },
  data() {
    return {
      pageNumber: 0,
      noResult: false,
      loadingFlag: true,
    };
  },
  computed: {
    essayList() {
      return this.setTimeline();
    }
  },
  mounted() {},
  created() {
    this.pageNumber = this.$route.params.page ? this.$route.params.page : 0;
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  .no-data {
    height: 150px;
    margin-right: -10px;
  }
  .loading-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .loading-wrap {
    margin-left: 10px;
  }
}
.timeline-wrap {
  border-left: 2px solid $borderColor;
  padding-left: 25px;
  position: relative;
  min-height: auto !important;
  transition: all 0.3s;
  .timeline-item {
    margin-bottom: 20px;
  }
  .timeline-year {
    margin-top: 20px;
    position: relative;
    height: 30px;
    width: 100%;
    line-height: 30px;
    &:first-child {
      margin-top: 0;
    }
    .year-icon {
      .iconfont {
        color: #fff;
        font-weight: lighter;
        font-size: 13px;
      }
      background: $mainColor;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: -41px;
    }
    .year-text {
      padding-left: 10px;
      font-size: 18px;
    }
  }
  .essay-item {
    position: relative;
    margin-left: 10px;
    margin-top: 20px;
    background-color: #fff;
    @include cardBorder;
    /deep/ .article-meta p {
      padding-top: 0;
    }
    .essay-dot {
      height: 12px;
      width: 12px;
      border-radius: 50%;
      position: absolute;
      top: 11px;
      left: -43px;
      background-color: $mainColor;
    }
    .essay-triangle {
      height: 13px;
      width: 13px;
      background-color: #fff;
      position: absolute;
      box-shadow: 0 0px 3px 0px rgba(0, 0, 0, 0.2);
      left: -5px;
      top: 11px;
      transform: rotate(133deg);
    }
  }
}
@media screen and(max-width: 1200px) {
  .container {
    margin-left: -20px;
  }
}
</style>


