<template>
    <div class="skeleton-wrap">
        <p class="title"></p>
        <p class="msg"></p>
        <p class="intro"></p>
        <p class="intro intro-last"></p>
        <p class="button"></p>
        <div class="share clearfix">
            <p class="share-btn fr"></p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
p {
  border-radius: 4px;
  background-color: $page404;
}
.skeleton-wrap {
  padding: $cardPadding;
  @include cardBorder;
  background-color: #fff;
  margin-bottom: 45px;
  padding-bottom: 20px;
  .title {
    height: 25px;
    margin: 10px 0;
    margin-top: 13px;
  }
  .msg {
    height: 12px;
    width: 150px;
    margin-top: 15px;
  }
  .intro {
    height: 16px;
    margin-top: 15px;
  }
  .intro-last {
    width: 200px;
  }

  .button {
    height: 25px;
    margin-top: 20px;
    width: 60px;
  }
  .share {
    text-align: right;
    margin-top: 15px;
    .share-btn {
      width: 40px;
      height: 12px;
    }
  }
}
</style>
<script>
export default {};
</script>
