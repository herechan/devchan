<template>
    <div class="weibo">
        <div class="weibo-inner">
            <div class="header-shot">
                <img src="~assets/img/user.png" alt="">
            </div>
            <div class="weibo-body">
                <div class="weibo-header">
                    <p class="username">Chan</p>
                    <p class="weibo-time">2017-06-14 19:07</p>
                </div>
                <div class="weibo-article">
                    <p class="weibo-text">在去年年底，3GPP 确定了非独立组网 NR 的标准，标志着 5G NSA 标准的冻结，使得 5G 的部署可以采用非独立组网方式。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.weibo {
  .weibo-inner {
    display: flex;
    justify-content: flex-start;
    background-color: #fff;
    @include cardBorder;
    padding: $weiboPadding;
    .header-shot {
      height: 44px;
      width: 44px;
      overflow: hidden;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .weibo-body {
      width: 100%;
      .weibo-header {
        display: flex;
        justify-content: space-between;
        .username {
          font-weight: 600;
          font-size: 16px;
          margin-left: 10px;
        }
        .weibo-time {
          font-size: 14px;
          color: $ccc;
        }
      }
      .weibo-article {
        .weibo-text {
          font-size: 14px;
          margin: 5px 0 0 10px;
        }
      }
    }
  }
}
</style>
