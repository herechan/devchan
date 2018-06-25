<!--admin页面中右下角工具盒-->
<template>
  <div class="container toolbox">
    <div class="main-box">
      <i class="iconfont">&#xe678;</i>
    </div>
    <div class="tool-item" v-for="(item,index) in toolList" :key="index" @click="triggerTool(item)">
      <i class="iconfont" :class="{'last-icon':index == toolList.length -1}" v-html="item.code"></i>
    </div>
    <el-dialog title="" :visible.sync="dialogVisible" :append-to-body="true" custom-class="tool-dialog">
      <div class="dialog-content">
        <span v-html="icon" class="dialog-icon"></span>
        <span>{{dialogContent}}</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" v-if="showCancle">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  mounted() {},
  data() {
    return {
      dialogVisible: false,
      showCancle: false,
      dialogTitle: "",
      icon: "",
      dialogContent: "",
      toolList: [
        {
          code: "&#xe653;",
          flag: "save"
        },
        {
          code: "&#xe626;",
          flag: "draft"
        },
        {
          code: "&#xe668;",
          flag: "del"
        }
      ]
    };
  },
  methods: {
    triggerTool(item) {
      if (item.flag == "save" || item.flag == "draft") {
        this.showCancle = false;
        this.icon = `<i class='el-icon-success dialog-icon-success'></i>`;
        if (item.flag == "save") {
          this.dialogContent = "保存成功";
          this.dialogTitle = "保存文章";
          this.saveAction();
        } else {
          this.dialogVisible = true;
          this.dialogContent = "已保存至草稿箱";
          this.dialogTitle = "保存草稿";
        }
      } else {
        this.dialogVisible = true;
        this.showCancle = true;
        this.icon = `<i class='el-icon-warning dialog-icon-warning'></i>`;
        this.dialogContent = "确认删除放弃该文章？";
        this.dialogTitle = "删除文章";
      }
    },
    saveAction() {
      if (!this.$parent.validate()) {
        this.$message({
          message: this.validateFailure,
          type: "warning"
        });
      } else {
        this.dialogVisible = true;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.toolbox {
  position: fixed;
  right: 40px;
  bottom: 20px;
  height: 65px;
  z-index: 1999;
  width: 50px;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  padding-bottom: 10px;
  .tool-item {
    visibility: hidden;
    .last-icon {
      position: relative;
      margin-top: -10px;
    }
  }
  &:hover {
    height: 240px;
    .tool-item {
      opacity: 1;
      visibility: visible;
      transform: scaleY(1) scaleX(1) translateY(0) translateX(0);
      opacity: 1;
    }
  }
  .main-box {
    height: 56px;
    width: 56px;
    background-color: $red;
    i {
      font-size: 22px;
    }
  }
}
.toolbox div {
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 20px;
  flex-shrink: 0;
  transition: 0.3s ease;
  font-size: 20px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
  height: 40px;
  width: 40px;
  &:nth-child(2) {
    background-color: $mainColor;
  }
  &:nth-child(3) {
    background-color: $yellow;
  }
  &:nth-child(4) {
    background-color: $red;
  }
}
.tool-item {
  transform: scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0px);
  opacity: 0;
}
.dialog-icon {
  font-size: 30px;
  margin-right: 15px;
  position: relative;
  margin-top: -3px;
}
.dialog-content {
  display: flex;
  align-items: center;
}
</style>
<style lang="scss">
.tool-dialog {
  width: 500px;
  height: 205px;
}
//该类名是v-html模板在弹框中进行渲染，所以类名不应该放入scoped中
.dialog-icon-success {
  color: $green;
}
.dialog-icon-warning {
  color: $red;
}
.v-modal {
  z-index: 3999 !important;
}
.el-dialog__wrapper {
  z-index: 4000 !important;
}
</style>

