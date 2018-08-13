<!--首页的timeline-->
<template>
  <div class="timeline-wrap" ref="wrap">
    <ul class="li-none">
      <li v-if="mainList.length == 0">
        <skeletonItem v-for="(item, index) in 3" :key="index"></skeletonItem>
      </li>

      <!-- 渲染首页的列表，li为文章的概况或微博 -->
      <li v-else ref="li" class="timeline-item" v-for="(item, index) in mainList" :key="index">
        <essayItem :essayItem="item" :isIndex="true" />
        <!-- <Weibo/> -->
      </li>
    </ul>

    <Loading v-if="loadingFlag"></Loading>
    <p class="load-more" v-if="loadMoreFlag">
      <span @click="loadMore">
        <i class="iconfont">&#xe606;</i>
        加载更多
      </span>
    </p>
  </div>
</template>
<script>
import Weibo from "~/components/weibo.vue";
import axios from "~/plugins/axios";
import essayItem from "~/components/essayItem";
import skeletonItem from "~/components/skeleton/indexItem";
import Loading from "~/components/widget/loading";
export default {
  components: {
    Weibo,
    essayItem,
    skeletonItem,
    Loading
  },
  data() {
    return {
      mainList: [],
      loadingFlag: false,
      page: 1,
      totalLength: 0,
      loadMoreFlag: false
    };
  },
  methods: {
    getMessage() {
      axios
        .get(`${this.baseUrl}/getArticleTwitterList`, {
          params: {
            page: this.page
          }
        })
        .then(r => {
          if (this.page == 1) {
            this.loadMoreFlag = true;
          }
          this.mainList = this.mainList.concat(r.data.result.articleList);
          this.totalLength = r.data.result.articleLength;
          console.log(r.data.result)
          if (r.data.result.articleList.length < 9) this.loadMoreFlag = false;
          this.loadingFlag = false;
        });
    },
    loadMore() {
      this.page++;
      this.loadingFlag = true;
      this.getMessage();
    }
    // scrollLoad(action, wait = 50) {
    //   var time = Date.now();
    //   return () => {
    //     if (time + wait - Date.now() < 0) {
    //       action();
    //       time = Date.now();
    //     }
    //   };
    // }
  },
  mounted() {
    this.getMessage();
  },
  updated() {
    // const timelineList = document.querySelectorAll(".timeline-item");
    // const last = timelineList[timelineList.length - 1];
    // var self = this;
    // window.onscroll = this.scrollLoad(() => {
    //   if (
    //     document.documentElement.scrollTop + window.innerHeight >=
    //       last.offsetTop + last.offsetHeight / 2 &&
    //     self.page < Math.ceil(self.totalLength / 9)
    //   ) {
    //     this.loadingFlag = true;
    //     self.page++;
    //     self.getMessage();
    //   }
    // });
  },
  created() {}
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
}
.timeline-wrap {
  width: 100%;
  .timeline-item {
    margin-bottom: 45px;
  }
}
.load-more {
  user-select: none;
  text-align: center;
  i {
    font-size: 12px;
    color: $asideColor;
  }
  span {
    cursor: pointer;
    transition: color 0.3s;
    color: $asideColor;
    &:hover {
      color: $asideHoverColor;
      i {
        color: $asideHoverColor;
      }
    }
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

