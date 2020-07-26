<template>
  <section class="section-body">
    <div class="section-inner">
      <img :src="'/'+ articleData.coverPath" class="cover" />
      <p class="title">{{articleData.title}}</p>
      <div class="info">
        <span class="date">{{articleData.time}}</span>
        <!-- <span class="divider">|</span> -->
        <p class="tag-box">
          <svg class="iconfont tag" aria-hidden="true">
            <use xlink:href="#icon-tag" />
          </svg>
          测试
        </p>
      </div>
      <article v-html="articleBody">
      </article>
    </div>
  </section>
</template>
<script>
import 'mavon-editor/src/lib/css/markdown.css'
const md = require("markdown-it")({
  html:true
});
export default {
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
    $axios
  }) {
    let { data, result } = await $axios.$post(
      `${process.env.baseUrl}/getArticleDetail`,
      {
        id: query.id
      }
    );
    console.log(data);
    if (result) {
      return {
        articleData: data
      };
    }
  },
  created() {},
  computed: {
    articleBody () {
      let content = this.articleData.mdText || ''
      return md.render(content)
    }
  },
  data() {
    return {
      articleData: {}
    };
  },
};
</script>
<style lang="less" scope>
.section-body {
  padding-top: 0!important;
  .section-inner {
    padding: 20px;
    box-shadow: @g-shadow;
    border-radius: @g-radius;
    background-color: @card-bg;
    .cover {
      object-fit: cover;
      height: 300px;
      width: 100%;
    }
    .title {
      font-size: @font1;
      color: @gray-deep1;
      margin: 0.5em 0 0.2em;
    }
    .info {
      color: @gray;
      font-size: 12px;
      p,
      span {
        display: inline-block;
      }
      .tag {
        font-size: 12px;
      }
      .divider {
        padding: 0 5px;
        font-size: 12px;
        transform: scale(0.7);
      }
      .tag-box{
        margin-left: 10px;
      }
    }
    article{
      padding: 20px 0;
      p{
        img{
          max-width: 100%;
        }
      }  
    }
  }
}
</style>