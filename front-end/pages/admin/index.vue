<!--admin首页，新增文章页面-->
<template>
    <div class="container">
        <el-row class="justify-row">
            <el-col :sm="12">
                <Card class="card">
                    <span slot="header">文章概况</span>
                    <div slot="article">
                        <div class="card-row">
                            <p class="card-row-name">标题</p>
                            <el-input v-model="title" placeholder=""></el-input>
                        </div>
                        <div class="card-row">
                            <p class="card-row-name">选择标签</p>
                            <div class="card-list">

                            </div>
                        </div>
                    </div>
                </Card>
            </el-col>
            <el-col :sm="12">
                <Card class="card">
                    <span slot="header">文章简介</span>

                </Card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Card from "~/components/adminCard";
import TagList from "~/components/essaySort";
export default {
  components: {
    Card
  },
  data() {
    return {
      title: "",
      cardList:[{}]
    };
  }
};
</script>
<style lang="scss" scoped>
.justify-row {
  .el-col {
    &:first-child {
      .card {
        margin-right: 40px;
      }
    }
  }
}
.card {
  margin-right: 20px;
}
/*
*控制card插槽的样式
*/
.card {
  .card-row {
    margin-bottom: 15px;
    .card-row-name {
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
}
@media screen and(max-width: 767px) {
  .justify-row {
    .el-col {
      &:first-child {
        .card {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
