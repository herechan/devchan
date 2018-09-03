<template>
    <div class="container">
      <p style="text-align:center">这个家伙很懒，还没有发表任何微博</p>
        <!-- <div class="page-box">
            <el-pagination layout="prev, pager, next" :total="50">
            </el-pagination>
        </div> -->
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

