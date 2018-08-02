<!--首页的timeline-->
<template>
  <div class="timeline-wrap">
    <ul class="li-none">
      <!-- 渲染首页的列表，li为文章的概况或者微博 -->
      <li class="timeline-item" v-for="(item, index) in mainList" :key="index">
        <essayItem :essayItem="item" :isIndex="true"/>
        <!-- <Weibo/> -->
      </li>
    </ul>

    <!-- <div class="page-box">
      <el-pagination layout="prev, pager, next" :total="50">
      </el-pagination>
    </div> -->
  </div>
</template>
<script>
import Weibo from "~/components/weibo.vue";
import axios from "~/plugins/axios";
import essayItem from "~/components/essayItem";
export default {
  components: {
    Weibo,
    essayItem
  },
  data() {
    return {
      mainList: []
    };
  },
  methods: {
    
  },
  mounted() {},
  created() {
    axios.get(`${this.baseUrl}/getArticleTwitterList`).then(r => {
      this.mainList = r.data.result;
    });
  }
};
</script>

<style lang="scss" scoped>
ul{
  padding: 0;
}
.timeline-wrap {
  width: 100%;
  .timeline-item {
    margin-bottom: 45px;
  }
}

@media screen and (max-width: 700px) {
  main .timeline-col .timeline-wrap .timeline-article .article-title {
    font-size: 22px;
    padding-top: 15px;
  }
}
</style>
<style lang="scss">
.page-box {
  text-align: center;
  margin-top: 35px;
  button {
    background-color: $bgColor !important;
  }
  button:disabled {
    color: $pageBtnDis !important;
    &:hover {
      color: $pageBtnDis !important;
    }
  }
  .btn-next {
    color: $fontColor;
    &:hover {
      color: $mainColor;
    }
  }
  li {
    background-color: $bgColor;
    color: $pageColor;
    &:hover {
      color: $mainColor;
    }
  }
  .active {
    color: $fontColor;
  }
}
</style>

