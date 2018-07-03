<template>
  <div class="login-wrap">
    <el-row>
      <el-col :sm="12" class="login-side hidden-xs-only">
        <div class="login-img"></div>
      </el-col>
      <el-col :sm="12" class="login-side">
        <div class="login-box">
          <img src="~/assets/img/logo.png" alt="">
          <div class="login-inner">
            <div class="login-row">
              <p class="login-name">用户名</p>
              <el-input v-model="username" @keyup.enter.native="login"></el-input>
            </div>
            <div class="login-row">
              <p class="login-name">密码</p>
              <el-input v-model="password" @keyup.enter.native="login" type="password"></el-input>
            </div>
            <div class="login-row" style="text-align:right;margin-top:30px;">
              <el-button type="primary" @click="login">登录</el-button>
            </div>
          </div>
          <p class="login-back">&#60; 返回首页</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
import Cookie from "js-cookie"
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mounted() {},
  methods: {
    login() {
      if (
        this.username.replace(/\s/g, "") &&
        this.password.replace(/\s/g, "")
      ) {
        axios
          .post(`${process.env.baseUrl}/login`, {
            username: this.username,
            password: this.password
          })
          .then(r => {
            if (r.status == 200 && r.data.status == 1) {
              this.$message({
                message: "登录成功！",
                type: "success"
              });
              // localStorage.setItem("token",r.data.result.token)
              // Cookie.set("name","chan")
              // this.$store.commit("token/addToken", r.data.result.token);
            } else {
              this.$message({
                message: "登陆失败，请检查用户名与密码",
                type: "warning"
              });
              // localStorage.removeItem("token")
              // this.$store.commit("token/removeToken");
            }
          });
      } else {
        this.$message({
          message: "请填写有效用户名密码",
          type: "warning"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login-wrap {
  .login-side {
    height: 100vh;
    .login-img {
      height: 100%;
      width: 100%;
      background: url("~/assets/img/login-img.jpg") no-repeat;
      background-size: cover;
      background-position: center;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    .login-box {
      width: 300px;
      img {
        height: 52px;
        width: 52px;
        border-radius: 50%;
        margin: auto;
        display: block;
        margin-bottom: 20px;
      }
      .login-inner {
        height: 270px;
        background-color: $cardBg;
        border-radius: 4px;
        padding: 20px;
        @include cardBorder;
        .login-row {
          .login-name {
            margin-bottom: 5px;
          }
          margin-bottom: 20px;
        }
      }
      .login-back {
        font-size: 12px;
        cursor: pointer;
        color: $asideColor;
        margin-top: 20px;
        &:hover {
          text-decoration: underline;
        }
        padding-left: 20px;
      }
    }
  }
}
</style>

