<template>
  <div id="container">
    <header>
      <div class="header-main">
        <el-row>
          <el-col :span="14">
            <div class="header-left">
              <div class="logo">
                <img src="~assets/img/logo.png" alt="">
              </div>
              <span class="logo-name">Chan</span>
              <div class="header-nav hidden-sm-and-down">
                <span v-for="(item,index) in navList" :key="index" @click="go(item.pathName)">{{item.name}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="header-right">
              <el-input placeholder="Search" class="header-search hidden-xs-only">
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
              </el-input>
              <div class="user-mini hidden-lg-and-up">
                <div class="user-mini-portrait">
                  <img src="~assets/img/user.png" alt="">

                </div>
                <i class="el-icon-caret-bottom"></i>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!--小屏幕二级菜单-->
      <div class="header-coll hidden-sm-and-up">
        <div class="header-coll-nav fl">
          <span @click="go(item.pathName)" v-for="(item,index) in navList" :key="index">{{item.name}}</span>
        </div>
        <div class="header-coll-input">
          <el-input placeholder="Search" class="header-coll-search fr">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>

      </div>
    </header>
  </div>
</template>
<style lang="scss" scoped>
header {
  // box-shadow: 0 2px 3px -1px rgba(0, 0, 0, .06);
  box-shadow: 0 2px 3px -1px rgba(0,0,0,0.2);
  background-color: #fff;
  .header-main {
    max-width: 1360px;

    height: 64px;
    margin: auto;
    padding: 0 20px;

    .header-left {
      height: 64px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        font-size: 14px;
        margin-right: 30px;
        cursor: pointer;
        user-select: none;
        transition: 0.2s ease;
        &:not(.logo-name):hover {
          color: $mainColor;
        }
      }
      .logo {
        height: 44px;
        width: 44px;
        overflow: hidden;
        border-radius: 50%;

        img {
          width: 100%;
        }
      }
      .logo-name {
        font-size: 16px;
        font-weight: 600;
        margin-right: 35px;
        margin-left: 10px;
        cursor: text;
      }
    }
    .header-right {
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .header-search {
        width: 205px;
      }
      .header-search /deep/ input {
        border-radius: 25px;
      }
      .user-mini {
        &:hover {
          .el-icon-caret-bottom {
            color: $mainColor;
          }
        }
        height: 100%;
        margin-left: 30px;
        cursor: pointer;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .user-mini-portrait {
          height: 40px;
          width: 40px;
          overflow: hidden;
          border-radius: 50%;

          img {
            width: 100%;
          }
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          transition: 0.2s ease;
        }
      }
    }
  }
  .header-coll {
    height: 49px;
    border-bottom: none;
    background-color: #fff;
    margin-top: 1px;
    padding: 0 20px;
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    .header-coll-nav {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .header-coll-search {
      height: 34px;
      width: 160px;
      line-height: 34px;
      margin-right: 20px;
      flex-shrink: 0;
    }
    .header-coll-search /deep/ input {
      border-radius: 25px;
      height: 34px;
      border-color: $borderColor;
    }
    .header-coll-search /deep/ .el-input__suffix {
      top: -3px;
    }
    span {
      margin-right: 30px;
      flex-shrink: 0;
    }
  }
}
@media screen and(max-width: 768px) {
  .header-main {
    border-bottom: 1px solid $borderColor;
  }
}
</style>
<script>
export default {
  mounted() {
  },
  data() {
    return {
      navList: [
        {
          name: "主页",
          pathName:"/"
        },
        {
          name: "文章",
          pathName:"essay"
        },
        {
          name: "推文",
<<<<<<< HEAD
=======
          pathName:""
        },
        {
          name: "标签",
>>>>>>> 0760c49aa0c76f54d99909d4e98d684111f050e2
          pathName:""
        },
        // {
        //   name: "标签",
        //   pathName:"tags"
        // },
        {
          name: "关于",
          pathName:""
        }
      ]
    };
  },
  methods:{
    go:function(name){
      this.$router.push(name)
    }
  }
};
</script>
