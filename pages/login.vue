<template>
  <div class="login-wrap">
    <Row>
      <Col :sm="6" class="login-side" offset="9">
        <div class="login-box">
          <img src="../static/logo.png" alt />
          <div class="login-inner">
            <div class="login-row">
              <p class="login-name">用户名</p>
              <i-input v-model="username" @keyup.enter.native="login"></i-input>
            </div>
            <div class="login-row">
              <p class="login-name">密码</p>
              <i-input v-model="password" @keyup.enter.native="login" type="password"></i-input>
            </div>
            <div class="login-row" style="text-align:right;margin-top:30px;">
              <i-button type="primary" @click="login">登录</i-button>
            </div>
          </div>
          <p class="login-back">&#60; 返回首页</p>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
// import Cookie from "js-cookie";
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
      if (this.username.replace(/\s/g, "") && this.password.replace(/\s/g, "")) {
        this.$axios.post(`${process.env.baseUrl}/login`,
            {
              username: this.username,
              password: this.password
            },
            {
              withCredentials: true
            }
          ).then(r => {
            if (r.status == 200 && r.data.status == 1) {
              this.$Message({
                message: "登录成功！",
                type: "success"
              });
              // Cookie.set(r.data.result.tokenName, r.data.result.token,{
              //   expires: 1
              // })
            } else {
              this.$Message({
                message: "登陆失败，请检查用户名与密码",
                type: "warning"
              });
            }
          });
      } else {
        this.$Message({
          message: "请填写有效用户名密码",
          type: "warning"
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.login-wrap {
  .login-side {
    height: 100vh;
    .login-img {
    //   height: 100%;
    //   width: 100%;
    //   background: url("~/assets/img/login-img.jpg") no-repeat;
    //   background-size: cover;
    //   background-position: center;
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
        // background-color: $cardBg;
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
        // color: $asideColor;
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
