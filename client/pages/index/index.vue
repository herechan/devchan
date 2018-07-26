<!--首页的timeline-->
<template>
  <div class="timeline-wrap">
    <div class="timeline-article timeline-item" v-for="(listItem, listIndex) in mainList" :key="listIndex">
      <a href="" v-if="listItem.coverPath">
        <img :src="staticUrl+listItem.coverPath" alt="" class="timeline-article-cover">
      </a>
      <div class="article-title-wrap clearfix">
              <p class="article-title fl" :title="listItem.title">{{listItem.title}}</p>
      </div>
      <ArticleMeta/>
      <div class="article-section article-section-normal" v-html="listItem.intro">

      </div>
      <div class="article-more">查看全文</div>
      <div class="devider"></div>
      <div class="share-btn clearfix">
        <div>
          <i class="iconfont">&#xea87;</i>
          <span>分享</span>
        </div>
      </div>
    </div>
    <WebFooter/>
    <div class="page-box">
      <el-pagination layout="prev, pager, next" :total="50">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import WebFooter from "~/components/weibo.vue";
import ArticleMeta from "~/components/widget/articleMeta.vue";
import axios from "~/plugins/axios";

export default {
  components: {
    WebFooter,
    ArticleMeta
  },
  data(){
    return{
      mainList:[]
    }
  },
  methods:{
    
  },
  mounted() {
  },
  created() {
    this.staticUrl = process.env.staticUrl
    axios.get(`${this.baseUrl}/getArticleTwitterList`).then(r=>{
      this.mainList = r.data.result;
      // console.log(this.mainList)
    })
  }
};
</script>

<style lang="scss" scoped>
.timeline-wrap {
  width: 100%;
  .timeline-item {
    margin-bottom: 45px;
  }
  .timeline-article {
    background: #fff;
    @include cardBorder;
    padding-bottom: 20px;
    a {
      display: block;
      .timeline-article-cover {
        width: 100%;
      }
    }
    .timeline-article-cover {
      width: 100%;
    }
    .article-title-wrap{
      padding: 0 20px;
    }
    .article-title {
      padding-top:20px;
      
      font-size: 28px;
      cursor: pointer;
      transition: 0.2s ease;
      user-select: none;
      &:hover {
        color: $mainColor;
      }
    }

    .article-section-normal {
      padding: 0 20px;
      margin: 1.6em 0;
      line-height: 1.7em;
      p {
        margin-bottom: 20px;
      }
    }
    .article-more {
      display: inline-block;
      line-height: 1em;
      padding: 6px 15px;
      border-radius: 15px;
      background: #f5f8f9;
      font-size: 14px;
      color: #999;
      text-shadow: 0 1px #fff;
      text-decoration: none;
      margin-left: 15px;
      cursor: pointer;
      transition: 0.2s ease;
      &:hover {
        background: #38b7ea;
        color: #fff;
        text-decoration: none;
        text-shadow: 0 1px #169cd2;
      }
    }
    .devider {
      height: 1px;
      border-top: 1px solid $borderColor;
      margin: 20px;
    }
    .share-btn {
      padding: 0 20px;
      div {
        display: flex;
        justify-content: flex-end;
        float: right;
        cursor: pointer;

        &:hover {
          span {
            color: #565a5f;
          }
          i {
            color: #565a5f;
          }
        }
        span {
          color: #999;
          font-size: 12px;
          margin-left: 5px;
          transition: 0.2s ease;
        }
        i {
          color: #999;
          transition: 0.2s ease;
        }
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

