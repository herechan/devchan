<!--admin首页，新增文章页面-->
<template>
    <div class="container">
        <el-row class="justify-row">
            <el-col :sm="12">
                <Card class="card">
                    <span slot="header">Overview</span>
                    <div slot="article">
                        <div class="card-row">
                            <p class="card-row-name">Title</p>
                            <el-input v-model="title" placeholder=""></el-input>
                        </div>
                        <div class="card-row">
                            <p class="card-row-name">Tags</p>
                            <div class="card-list">
                                <TagList/>
                            </div>
                        </div>
                        <div class="card-row fake">
                            <p class="card-row-name">rules</p>
                            <el-input :disabled="true" placeholder=""></el-input>
                        </div>
                        <div class="card-row fake">
                            <p class="card-row-name">standard</p>
                            <el-input :disabled="true" placeholder=""></el-input>
                        </div>
                    </div>
                </Card>
            </el-col>
            <el-col :sm="12">
                <Card class="card">
                    <span slot="header">Summary</span>
                    <div slot="article">
                        <div class="card-row">
                            <p class="card-row-name">intro</p>
                            <el-input class="edit-text" :resize="'none'" :rows="3" v-model="editText" type="textarea" placeholder=""></el-input>
                        </div>
                        <div class="card-row">
                            <p class="card-row-name" @click="showText">cover</p>
                            <el-upload class="upload-demo" action="https://www.baidu.com">
                                <el-button size="small" type="primary">upload<i class="el-icon-upload el-icon--right"></i></el-button>
                            </el-upload>
                        </div>
                    </div>
                </Card>
            </el-col>
        </el-row>
        <el-row class="">
            <el-col :span="24">
                <Card class="card">
                    <span slot="header">Writting Edit</span>
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
    Card,
    TagList
  },
  data() {
    return {
      u: "",
      editText: "",
      title: "",
      cardList: [{}]
    };
  },
  methods: {
    showText() {
      console.log(this.editText);
    },
    checkFile(e) {
      console.log(e);
    }
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
    &:last-child {
      margin-bottom: 0;
    }
  }
  .filter-inner {
    padding: 0;
  }
}
.card .card-row /deep/ .filter-item {
  padding-left: 0;
  padding-right: 16px;
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
