<template>
  <div class="container">
    <div class="timeline-wrap">
      <div class="timeline-item" v-for="(item, index) in essayList" :key="index">
        <div class="timeline-year">
          <div class="year-icon">
            <i class="iconfont">&#xe62e;</i>
          </div>
          <span class="year-text">2018</span>
        </div>
        <div class="essay-item">
          <div class="essay-dot"></div>
          <div class="essay-triangle"></div>
          <EssayInner/>
        </div>
        <div class="essay-item">
          <div class="essay-dot"></div>
          <div class="essay-triangle"></div>
          <EssayInner/>
        </div>
      </div>
      <!-- <div class="timeline-item">
        <div class="timeline-year">
          <div class="year-icon">
            <i class="iconfont">&#xe62e;</i>
          </div>
          <span class="year-text">2017</span>
        </div>
        <div class="essay-item">
          <div class="essay-dot"></div>
          <div class="essay-triangle"></div>
          <EssayInner/>
        </div>
      </div> -->

    </div>
  </div>
</template>
<script>
import EssayInner from "~/components/essayInner.vue";
import axios from "~/plugins/axios";
export default {
  components: {
    EssayInner
  },
  methods: {},
  data() {
    return {
      pageNumber: 0,
      essayList: []
    };
  },
  mounted() {
    axios
      .get(`${this.baseUrl}/getArticleList`, {
        params: {
          pageNumber: this.pageNumber
        }
      })
      .then(r => {
        if (r.data.status == 1 && r.data.result.length > 0) {
          var list = r.data.result;
          var timeObj = {
            date: list[0].time.split("-")[0],
            list: []
          };
          list.forEach(element => {
            var curDate = element.time;

            var dateReg = new RegExp(timeObj.date);
            timeObj.list.push(element);
            if (!element.time.match(dateReg)) {
              timeObj.date = curDate.split("-")[0];
            } else {
            }
          });
          console.log(this.essayList);
        }
      });
  },
  created() {
    this.pageNumber = this.$route.params.page ? this.$route.params.page : 0;
  }
};
</script>
<style lang="scss" scoped>
.timeline-wrap {
  border-left: 2px solid $borderColor;
  padding-left: 25px;
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
</style>


