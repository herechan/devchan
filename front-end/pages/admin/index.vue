<!--admin首页，新增文章页面-->
<template>
  <div class="container">
    <el-row class="justify-row">
      <el-col :sm="12">
        <Card class="card">
          <span slot="header">Overview</span>
          <div slot="article">
            <div class="card-row">
              <p class="card-row-name">title</p>
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
        <Card class="card upload-card">
          <span slot="header">Summary</span>
          <div slot="article">
            <div class="card-row">
              <p class="card-row-name">intro</p>
              <el-input class="edit-text" :resize="'none'" :rows="3" v-model="intro" type="textarea" placeholder=""></el-input>
            </div>
            <div class="card-row upload-cover-row">
              <p class="card-row-name" @click="showText">cover</p>
              <el-upload :on-remove="removeCover" :limit="1" :on-success="fileUpSuccess" list-type="picture" class="upload-demo" :multiple="false" :action="serverUrl+'/admin/articleCover'">
                <el-button size="small" type="primary">upload
                  <i class="el-icon-upload el-icon--right"></i>
                </el-button>
              </el-upload>
              <transition name="cover-fade">
                <div class="no-cover" v-if="!coverPath">
                  暂无预览
                </div>
              </transition>
            </div>
          </div>
        </Card>
      </el-col>
    </el-row>
    <el-row class="">
      <el-col :span="24">
        <Card class="card">
          <div class="test" ref="a">sdfsdf</div>
          <span slot="header">Writting Edit</span>
          <div slot="article">
            <div class="md-editor-box">
              <no-ssr>
                <mavonEditor @imgAdd="addImg" :ishljs="true" :boxShadow="false" placeholder="write something..." v-model="mdText"></mavonEditor>
              </no-ssr>
            </div>
          </div>
        </Card>
      </el-col>
    </el-row>
    <ToolBox/>
  </div>
</template>
<script>
import Card from "~/components/adminCard";
import TagList from "~/components/essaySort";
import { mavonEditor } from "mavon-editor";
import axios from "axios";
import ToolBox from "~/components/widget/toolBox";
var markdownIt = mavonEditor.getMarkdownIt();
export default {
  components: {
    Card,
    TagList,
    mavonEditor,
    ToolBox
  },
  computed: {},
  data() {
    return {
      intro: "",
      mdText: "",
      title: "",
      coverPath: "",
      cardList: [{}]
    };
  },
  mounted() {},
  methods: {
    addImg(filename, file) {
      if (!file.name || !file.miniurl) {
        return;
      }
      var formData = new FormData();
      formData.append("image", file.miniurl);
      // axios({
      //   url: `${this.serverUrl}/admin/articleImageUpload`,
      //   data: {
      //     data: formData,
      //     filename: file.name
      //   },
      //   method: "post",
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   }
      // }).then(r => {
      //   console.log(r);
      // });
      this.xhr(formData)
    },
    xhr: function(formdata) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("post", `${this.serverUrl}/admin/articleImageUpload`, true);

      xmlHttp.send(formdata);

      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4) {
          if (xmlHttp.status == 200) {
            var data = xmlHttp.responseText;
            console.log(data);
          }
        }
      };
    },
    removeCover(f) {
      if (!this.coverPath) {
        return;
      }
      axios
        .post(`${this.serverUrl}/admin/articleCoverDelete`, {
          coverPath: this.coverPath
        })
        .then(r => {});
      this.coverPath = "";
    },
    fileUpSuccess(r, file) {
      if (r.status == 1) {
        this.coverPath = r.data;
      }
    },
    showText() {
      console.log(this.editText);
    },
    checkFile(e) {
      console.log(e);
    },
    validate() {
      if (
        this.trim(this.intro) &&
        this.trim(this.title) &&
        this.trim(this.mdText)
      ) {
        console.log(this.mdText);
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.cover-fade-enter-active {
  transition: opacity 0.3s;
  transition-delay: 0.5s;
}
.cover-fade-leave-active {
  transition: opacity 0;
  transition-delay: 0;
}
.cover-fade-enter, .cover-fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0;
}
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
    .no-cover {
      height: 110px;
      border: 1px solid $borderColor;
      background-color: $bgColor;
      line-height: 110px;
      text-align: center;
      font-size: 14px;
      border-radius: 4px;
    }
  }
  .filter-inner {
    padding: 0;
  }
  .md-editor-box {
    padding: 10px 0 0 0;
    .markdown-body {
      max-height: 600px;
      min-height: 600px;
      /deep/ .v-show-content {
        //预览区的背景，这里直接修改css样式
        background-color: #fff;
      }
    }
  }
}
.upload-card {
  height: 397px;
}
.card-list {
  min-height: 28px;
}
.card .card-row /deep/ .filter-item {
  padding-left: 0;
  padding-right: 16px;
}
.upload-cover-row {
  /deep/ .el-upload-list__item {
    max-width: 350px;
    height: 110px;
    img {
      height: 90px;
    }
    .el-upload-list__item-name {
      line-height: 90px;
    }
  }
  /deep/ .el-upload-list {
    margin-top: 19px;
  }
}
.upload-cover-row
  /deep/
  .el-upload-list--picture
  .el-upload-list__item-thumbnail {
  width: auto;
}
.upload-cover-row /deep/ .el-upload-list__item-name {
  padding-left: 10px;
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
