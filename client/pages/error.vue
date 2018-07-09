<template>
    <div class="auth">
        <p class="auth-title">服务器内部错误，请联系开发人员</p>
        <div class="auth-btn-row">
            <el-button type="primary" @click="homePage">回到首页</el-button>
            <el-button type="default" @click="loginPage">后退</el-button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        homePage(){
            this.$router.push("/")
        },
        loginPage(){
            this.$router.push("/login")
        }
    }
}
</script>
<style lang="scss" scoped>
    .auth{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;
        
        .auth-btn-row{
            margin-top: 20px;
        }
        .auth-title{
            font-size: 36px;
            font-weight: 100;
            color: $pageColor;
        }
    }
</style>
