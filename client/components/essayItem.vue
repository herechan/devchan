/*
    文章模块，包含文章的主体与首页展示的文章简介
 */
<template>
  <div class="container">
    <div class="timeline-article">
      <div class="article-item-cover" v-if="essayItem.coverPath" @click="toEssayMain(essayItem._id)">
        <img :src="staticUrl+essayItem.coverPath" alt="" class="timeline-article-cover" :class="isIndex?'':'cursor-none'">
      </div>
      <div class="article-title-wrap clearfix">
        <p class="article-title fl" :title="essayItem.title" @click="toEssayMain(essayItem._id)" :class="isIndex?'':'cursor-none'">{{essayItem.title}}</p>
      </div>
      <ArticleMeta :metaTime="metaTime" :metaTags="metaTags" />
      <div class="article-section article-section-normal" v-html="essayItem.intro" v-if="isIndex">
      </div>
      <div class="article-more" v-if="isIndex">查看全文</div>
      <div class="devider"></div>
      <div class="share-btn clearfix">
        <div>
          <i class="iconfont">&#xea87;</i>
          <span>分享</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArticleMeta from "~/components/widget/articleMeta.vue";
/**
 * 组件说明：
 * props的值可能为
 * essayItem:文章的内容对象，如果当前为文章的详情，则该对象为文章的所有字段；
 * 如果当前为首页文章的概况展示，则该对象仅有部分字段
 * isIndex:当前是否为首页文章
 */
export default {
  data() {
    return{
    }
  },
  methods: {
    toEssayMain(id) {
      if (!this.isIndex) {
        return;
      }
      this.$router.push({
        path: "essayMain",
        query: {
          essayId: id
        }
      });
    }
  },
  computed:{
      metaTime(){
        return this.essayItem.time
      },
      metaTags(){
        return this.essayItem.tags
      }
  },
  components: {
    ArticleMeta
  },
  props: {
    essayItem: {
      type: Object,
      require: true
    },
    isIndex: {
      type: Boolean,
      require: true
    }
  },
  created() {
    this.staticUrl = process.env.staticUrl;
  }
};
</script>
<style lang="scss" scoped>
.cursor-none {
  cursor: default !important;
  &:hover {
    color: $fontColor !important;
    user-select: text !important;
  }
}
.timeline-article-cover {
  cursor: pointer;
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
  .article-title-wrap {
    padding: 0 20px;
  }
  .article-title {
    padding-top: 20px;

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
</style>
