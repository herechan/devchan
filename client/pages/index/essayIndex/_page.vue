<template>
  <div class="container">
    <div class="timeline-wrap">
      <div class="timeline-item" v-for="(item, index) in essayList" :key="index">
        <div class="timeline-year">
          <div class="year-icon">
            <i class="iconfont">&#xe62e;</i>
          </div>
          <span class="year-text">{{item.year}}</span>
        </div>
        <div class="essay-item" v-for="(essayItem,essayIndex) in item.list"  :key="essayIndex">
          <div class="essay-dot"></div>
          <div class="essay-triangle"></div>
          <EssayInner :essayItem="essayItem"/>
        </div>
      </div>
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
        var self = this;
        if (r.data.status == 1 && r.data.result.length > 0) {
          var list = r.data.result;
          var yearList = [];
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
            self.essayList.push(timeObj);
          });
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
@media screen and(max-width: 1200px) {
  .container{
    margin-left: -20px;
  }
}
</style>


