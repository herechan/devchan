<template>
    <div id="container">
        <header>
            <div class="header-main">
                <el-row>
                  <el-col :span="17">
                      <div class="header-left">
                          
                      </div>
                  </el-col>
                  <el-col :span="7">
                      <div class="header-right"></div>
                  </el-col>
                </el-row>
            </div>
        </header>
    </div>
</template>
<style lang="scss" scoped>
header {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  .header-main {
    width: 1360px;
    height: 64px;
    margin: auto;
    padding:0 20px;
    background-color: #999;
    .header-left{
        height: 64px;
    }
    .header-right{
        height: 64px;
    }
  }
}
</style>
