<template>
  <div class="container">
    <FilterCard class="filter-card"/>
    <div class="timeline-wrap">
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
    </div>
  </div>
</template>
<script>
import EssayInner from "~/components/essayInner.vue";
import FilterCard from "~/components/filterCard.vue";
export default {
  components: {
    EssayInner,
    FilterCard
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding-left: 30px;
  .timeline-wrap {
    border-left: 2px solid $borderColor;
    padding-left: 25px;
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
}
@media screen and(max-width: 768px) {
  .container {
    padding-left: 20px;
  }
}
@media screen and(max-width: 1199px){
  .filter-card{
    width: calc(100% + 20px);
    margin-left: -20px;
  }
}
</style>
