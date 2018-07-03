<template>
    <div class="auth">
        <p class="auth-title">4 0 4</p>
        <p class="auth-hint">Oops......页面好像走丢了:(</p>
        <div class="auth-btn-row">

            <el-button type="primary" @click="homePage">回到首页</el-button>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    homePage() {
      this.$router.push("/");
    },
    loginPage() {
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="scss" scoped>
.auth {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .auth-btn-row {
    margin-top: 25px;
  }
  .auth-hint {
    font-size: 24px;
    font-weight: lighter;
  }
  .auth-title {
    font-size: 190px;
    font-weight: 100;
    color: $pageColor;
  }
}
@media screen and (max-width: 768px) {
  .auth .auth-title {
    font-size: 140px;
  }
}
</style>
