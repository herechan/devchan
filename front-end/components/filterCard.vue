<template>
    <div class="filter">
        <p class="filter-header">
            <span>文章分类</span>
        </p>
        <ul class="filter-inner">
            <li @click="tagTrigger(index,item)" :class="{'filter-active':tagArr[index]}" class="filter-item" v-for="(item, index) in tags" :key="index">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tagArr: [],
      tags: [
        {
          name: "html"
        },
        {
          name: "css"
        },
        {
          name: "nuxt"
        },
        {
          name: "radius"
        },
        {
          name: "react"
        },
        {
          name: "nodejs"
        }
      ]
    };
  },
  computed: {
    isActive(index) {
      return this.tagArr[index];
    }
  },
  methods: {
    tagTrigger(index, item) {
      var arr = this.tagArr;
      if (arr[index]) {
        this.$set(arr, index, null);
      } else {
        this.$set(arr, index, item.name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  @include cardBorder;
  background-color: $cardBg;
  margin-bottom: 30px;
  overflow-x: hidden;
  .filter-header {
    border-bottom: 1px solid $borderColor;
    padding: $cardPadding;
    span {
      font-weight: bold;
    }
  }
  .filter-inner {
    padding: $cardPadding;
    display: flex;
    justify-content: flex-start;
    margin-left: 0;
    padding-left: 13px;
    
    padding-bottom: 8px;
    width: calc(100% + 48px);
    flex-wrap: wrap;
    .filter-item {
      padding: 0 8px;
      cursor: pointer;
      height: 28px;
      line-height: 25px;
      margin-right: 10px;
      user-select: none;
    }
    .filter-active {
      color: $mainColor;
    }
  }
}
@media screen and(max-width: 768px) {
  .filter-item {
    margin-right: 0;
  }
}
</style>
