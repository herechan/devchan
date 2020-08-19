<template>
  <article>
    <ul>
      <li class="main-item g-shadow" v-for="(item, index) in articleList" :key="index" :style="{paddingTop: item.coverPath ? '' : '10px'}">
        <img :src="item.coverPath"  v-if="item.coverPath" class="cover" />
        <p class="title">
          <nuxt-link :to="getRouteLink(item)">{{item.title}}</nuxt-link>
        </p>
        <p class="subscribe">{{item.intro}}</p>
        <div class="item-footer">
          <nuxt-link class="more" :to="getRouteLink(item)">查看详情</nuxt-link>
          <p class="tag-box">
            <svg class="iconfont tag" aria-hidden="true">
              <use xlink:href="#icon-tag" />
            </svg>
            <span v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex">{{tagItem}}</span>
          </p>
        </div>
      </li>
    </ul>
  </article>
</template>
<script>
export default {
  components: {},
  async asyncData ({$axios}) {
    let {data} = await $axios.$get(`${process.env.baseUrl}/getArticleTwitterList`)
    return {
      articleList: data.articleList
    }
  },
  data() {
    return {
      navIndex: 0,
      navList: [
        { name: "主页" },
        { name: "微博" },
        { name: "相册" },
        { name: "文章" },
        { name: "关于" }
      ],
      articleList: [],
    };
  },
  methods: {
    getRouteLink(item) {
      return {
        path: 'article',
        query: {
          id: item._id
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
article{
  .main-item{
    background-color: #fff;
    border-radius: @g-radius;
    overflow: hidden;
    margin-bottom: 30px;
    .cover{
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    .title{
      padding: 0 20px;
      line-height: 4.5em;
      letter-spacing: 1px;
      a {
        font-size: @font1;
        color: @gray-deep1;
        &:hover{
          color: @main-color;
        }
      }
    }
    .item-footer{
      display: flex;
      justify-content: space-between;
      padding-right: 20px;
      align-items: center;
      .more{
        background-color: #f5f5f5;
        color: @gray-deep1;
        display: inline-block;
        font-size: @font5;
        margin: 20px;
        padding: 5px 15px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s;
        &:hover{
          background-color: @main-color;
          color: #fff;
        }
      }
      .tag-box{
        padding-left: 20px;
        color: @gray;
        .iconfont{
          font-size: 12px;
        }
      }
    }
    .subscribe{
      font-size: @font3;  
      color: @gray;
      padding: 0 20px;
    }
  }
}
</style>