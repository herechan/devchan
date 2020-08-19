<!--admin首页，新增文章页面-->
<template>
  <div class="">
    <Row class="justify-row">
      <Col :sm="12">
        <Card class="card">
          <span slot="header">Overview</span>
          <div slot="article">
            <div class="card-row">
              <p class="card-row-name">title</p>
              <i-input v-model="title" placeholder=""></i-input>
            </div>
            <div class="card-row">
              <p class="card-row-name">Tags</p>
              <div class="card-list">
                <Icon type="md-refresh" @click="resetBtnHandle" class="reset-btn"/>
                <Tag @click.native="setDelItemListHandle(item)" class="tag-item" size="medium" v-for="(item, index) in tagList" :key="index" :class="item.selected ? 'item-active' : ''">
                  {{item.name}}
                </Tag>
                <div class="tag-edit-box" v-show="tagEditFlag">
                  <Input size="small" @keyup.enter.native="editConfirm" v-model="editValue" class="edit-value-box" ref="editValueInput"/>
                  <Button size="small" type="primary" @click="editConfirm">确定</Button>
                  <Button size="small" type="warning" @click="editCancle">取消</Button>
                </div>
                <div  class="tag-edit-box" >
                  <Button @click="editTagHandle" icon="ios-add" type="dashed" size="small" v-if="!tagEditFlag && !tagDelFlag">添加</Button>
                  <Button @click="deleteAction" icon="ios-trash-outline" type="error" size="small" v-if="!tagEditFlag && !tagDelFlag">删除</Button>
                </div>
              </div>
            </div>
            <div class="card-row fake">
              <p class="card-row-name">rules</p>
              <i-input :disabled="true" placeholder=""></i-input>
            </div>
            <div class="card-row fake">
              <p class="card-row-name">standard</p>
              <i-input :disabled="true" placeholder=""></i-input>
            </div>
          </div>
        </Card>
      </Col>
      <Col :sm="12">
        <Card class="card upload-card">
          <span slot="header">Summary</span>
          <div slot="article">
            <div class="card-row">
              <p class="card-row-name">intro</p>
              <i-input class="edit-text" :resize="'none'" :rows="3" v-model="intro" type="textarea" placeholder=""></i-input>
            </div>
            <div class="card-row upload-cover-row">
              <p class="card-row-name" @click="showText">cover</p>
              <!-- <el-upload :with-credentials="true" :on-remove="removeCover" :limit="1" :on-success="fileUpSuccess" list-type="picture" class="upload-demo" :multiple="false" :action="baseUrl+'/admin/articleCover'">
                <el-button size="small" type="primary">upload
                  <i class="iconfont">&#xe690;</i>
                </el-button>
              </el-upload> -->
            <Upload :on-success="fileUpSuccess" :action="baseUrl+'/admin/articleCover'">
                  <Button icon="ios-cloud-upload-outline">Upload files</Button>
              </Upload>
              <transition name="cover-fade">
                <div class="no-cover" v-if="!coverPath">
                  暂无预览
                </div>
              </transition>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
    <Row class="">
      <Col :span="24">
        <Card class="card">
          <div class="test" ref="a">sdfsdf</div>
          <span slot="header">Writting Edit</span>
          <div slot="article">
            <div class="md-editor-box">
              <client-only>
                <mavonEditor :toolbars="toolbars" ref="md" :imageClick="imageClick" @imgDel="imgDel" @imgAdd="addImg" :ishljs="true" :boxShadow="false" placeholder="write something..." v-model="mdText"></mavonEditor>
              </client-only>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
    <Modal
        v-model="deleteModelFlag"
        title="即将删除"
        @on-ok="deleteModelConfirm"
        ok-text="确认"
        cancel-text="取消"
        @on-cancel="deleteModelCancle">
        <span v-for='(item, index) in tagList' :key="index" v-show="item.selected">
          {{item.name}}
        </span>
    </Modal>
    <ToolBox/>
  </div>
</template>
<script>
import Card from "~/components/admin-card";
import 'mavon-editor/dist/css/index.css'
// import TagList from "~/components/essaySort";
import { mavonEditor } from "mavon-editor";
// import this.$axios from "this.$axios";
import ToolBox from "~/components/widget/tool-box";
import qs from "qs";
const {baseUrl} = process.env
var markdownIt = mavonEditor.getMarkdownIt();
export default {
  components: {
    Card,
    // TagList,
    mavonEditor,
    ToolBox
  },
  computed: {},
  data() {
    return {
      editValue: '',
      intro: "",
      mdText: "",
      title: "",
      coverPath: "",
      baseUrl: baseUrl,
      cardList: [{}],
      tagList: [],
      tagEditFlag: false,
      tagDelFlag: false,
      deleteModelFlag: false,
      selectedTagList: [],
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        strikethrough: true, // 中划线
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        readmodel: true, // 沉浸式阅读
        undo: true, // 上一步
        redo: true, // 下一步
        navigation: true, // 导航目录
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    };
  },
  mounted() {
    this.$axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    this.queryTagList()
  },
  watch: {
    tagDelFlag () {
      this.resetTagStatus()
    },
    tagEditFlag () {
      this.resetTagStatus()
    }
  },
  methods: {
    resetBtnHandle () {
      this.resetTagStatus()
      this.tagEditFlag = false
    },
    resetTagStatus () {
      this.tagList.forEach(item => {
        if (item.selected) {
          this.$set(item, 'selected', false)
        }
      })
      this.selectedTagList = []
    },
    setDelItemListHandle (item) {
      let id = item._id
      let index = this.selectedTagList.indexOf(id)
      if (index !== -1) {
        this.selectedTagList.splice(index, 1)
        this.$set(item, 'selected', false)
      } else {
        this.selectedTagList.push(id)
        this.$set(item, 'selected', true)
      }
      
    },
    deleteActionCancle () {
      this.tagDelFlag = false
    },
    deleteAction () {
      if (!this.selectedTagList.length) {
        this.$Message.error('请选择要删除的标签')
        this.deleteModelFlag = false
        return
      }
      this.deleteModelFlag = true
    },
    deleteModelConfirm () {
      this.$axios.get(`${process.env.baseUrl}/deleteTags`, {
        params: {
          tags: this.selectedTagList.join(',')
        }
      }).then(({data}) => {
        console.log(data)
        if (data.result) {
          this.$Message.success('删除成功！', 3)
          this.queryTagList()
        } else {
          this.$Message.error('删除失败，请在控制台查看error信息', 3)
        }
      })
    },
    deleteModelCancle () {
      this.deleteModelFlag = false
    },
    deleteTagHandle () {
      this.tagDelFlag = true
    },
    editConfirm () {
      if (!this.editValue.trim()) {
        this.$Message.error('请输入有效的字符');
        return
      }
      this.$axios.get(`${process.env.baseUrl}/saveTag`, {
        params: {
          tag: this.editValue
        }
      }).then(({data}) => {
        if (data.result === 0) {
          this.$Message.error(data.msg)
          return
        } else if (data.result === 1) {
          this.$Message.success('标签保存成功！')
          this.editValue = ''
          this.tagEditFlag = false
          this.queryTagList()
        }
      })
    },
    editCancle () {
      this.tagEditFlag = false
      this.editValue = ''
    },
    editTagHandle () {
      this.tagEditFlag = true
      this.$nextTick(() => {
        this.$refs.editValueInput.focus()
      })
    },
    queryTagList () {
      this.$axios.get(`${process.env.baseUrl}/articleTags`).then(({data}) => {
        if (data.result === 1) {
          this.tagList = data.data
        }
      })
    },
    imgDel() {
      return false;
    },
    imageClick() {
      return false;
    },
    addImg(filename, file) {
      if (!file.name || !file.miniurl) {
        return;
      }
      var formData = new FormData();
      formData.append("image", file);
      this.$axios
        .post(`${process.env.baseUrl}/admin/articleImageUpload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(r => {
          if (r.status == 200 && r.data.result) {
            var url = r.data.result.replace(/\\/g, "/");
            // this.$refs.md.$img2Url(filename, `${process.env.staticUrl}${url}`);
            this.$refs.md.$img2Url(filename, `${url}`)
          }
        });
    },
    removeCover(f) {
      if (!this.coverPath) {
        return;
      }
      this.$axios
        .post(`${process.env.baseUrl}/admin/articleCoverDelete`, {
          coverPath: this.coverPath
        })
        .then(r => {
          if (r.status == 200) {
            this.coverPath = "";
          }
        });
    },
    fileUpSuccess(r, file) {
      if (r.status == 1) {
        this.coverPath = r.result;
      } else if (r.status == 401) {
        this.$router.push("/login");
      }
    },
    showText() {
    },
    checkFile(e) {},
    validate() {
      //该方法会用toolbox组件调用
      if (
        this.intro.trim() &&
        this.title.trim() &&
        this.mdText.trim() && 
        this.selectedTagList.length
        // this.$store.state.articleTagsActive.join("")
      ) {
        return this.$axios
          .post(`${process.env.baseUrl}/admin/saveArticle`, {
            intro: this.intro,
            mdText: this.mdText,
            title: this.title,
            // tags: this.$store.state.articleTagsActive,
            coverPath: this.coverPath
          })
          .then(r => {
            console.log(r);
          });
      } else {
        return false;
      }
    }
  }
};
</script>
<style lang="less" scoped>

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
.edit-text /deep/ textarea{
  font-family: Microsoft Yahei;
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
    .v-note-wrapper{
      z-index: 9;
    }
  }
}
.upload-card {
  height: 397px;
}
.card-list {
  min-height: 28px;
  .reset-btn{
    cursor: pointer;
    font-size: 15px;
    vertical-align: 0;
  }
  .tag-item{
    position: relative;
    margin-bottom: 10px;
    &.item-active{
      border-color: @main-color;
    }
  }
    .tag-item-del{
      padding: 1px 7px 1px;
    }
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
.tag-edit-box{
  // display: inline-block;
  padding-left: 19px;
  .edit-value-box{
    width: 80px;
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


