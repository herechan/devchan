<template>
    <div class="container">
        <Weibo/>
        <Weibo/>
        <Weibo/>
        <Weibo/>
        <Weibo/>
        <div class="page-box">
            <el-pagination layout="prev, pager, next" :total="50">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import Weibo from "~/components/weibo.vue";
export default {
  components: {
    Weibo
  }
};
</script>
<style lang="scss" scoped>
.container /deep/ .weibo {
  margin-bottom: 25px;
}
</style>

