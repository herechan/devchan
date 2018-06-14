<!--首页的timeline-->
<template>
    <div class="timeline-wrap">
        <div class="timeline-article">
            <a href=""><img src="~assets/img/article-cover.png" alt="" class="timeline-article-cover"></a>
            <p class="article-title" title="之后所有金刚狼都是在扮演休杰克曼，从今往后谈论起金刚狼，我们也只会想到他">之后所有金刚狼都是在扮演休杰克曼，从今往后谈论起金刚狼，我们也只会想到他</p>
            <div class="article-meta">
                <p>
                    <i class="iconfont">&#xe62e;</i>
                    <span style="font-size:14px"> 2018-6-12</span>
                </p>
                <p>
                    <i class="iconfont">&#xe68c;</i>
                    <span>movie</span>
                </p>
            </div>
            <div class="article-section article-section-normal">
                <p>
                    作为一部R级片，能够在中国上映，还真的是挺让人意外的。毕竟去年的《死侍》就有这先例。而且《金刚狼3》是受到《死侍》大卖 的情况才拍成的R级片。不过先不说片子的尺度和删减问题，光是能够上映，这个消息已经够我们嗨的了。
                </p>
                <p>
                    《金刚狼3》应该是我们最后一次看到休.杰克曼饰演的金刚狼了！其实狼叔的退休，早就应该预想到。他不只一次提出退出的要求。除了体能问题之外，漫画中的金刚狼之死也是原因之一，早在2014年，金刚狼就死在了漫画里。 的情况才拍成的R级片。不过先不说片子的尺度和删减问题，光是能够上映，这个消息已经够我们嗨的了。
                </p>
            </div>
            <div class="article-more">查看全文</div>
            <div class="devider"></div>
            <div class="share-btn clearfix">
                <div>
                    <i class="iconfont">&#xea87;</i>
                    <span>分享</span>
                </div>
            </div>
        </div>
        <div class="page-box">
            <el-pagination layout="prev, pager, next" :total="50">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.timeline-wrap {
  width: 100%;
  .timeline-article {
    background: #fff;
    @include cardBorder;
    padding-bottom: 20px;
    a {
      display: block;
      .timeline-article-cover {
        width: 100%;
      }
    }
    .timeline-article-cover {
      width: 100%;
    }
    .article-title {
      padding: 20px 20px 0;
      font-size: 28px;
      cursor: pointer;
      transition: 0.2s ease;
      user-select: none;
      &:hover {
        color: $mainColor;
      }
    }
    .article-meta {
      padding: 0 20px;
      margin-top: 15px;
      display: flex;
      justify-content: flex-start;
      p {
        align-items: center;
        display: flex;
        &:first-child {
          margin-right: 15px;
        }
        span {
          margin-left: 3px;
        }
      }
    }
    .article-section-normal {
      padding: 0 20px;
      margin: 1.6em 0;
      line-height: 1.7em;
      p {
        margin-bottom: 20px;
      }
    }
    .article-more {
      display: inline-block;
      line-height: 1em;
      padding: 6px 15px;
      border-radius: 15px;
      background: #f5f8f9;
      font-size: 14px;
      color: #999;
      text-shadow: 0 1px #fff;
      text-decoration: none;
      margin-left: 15px;
      cursor: pointer;
      transition: 0.2s ease;
      &:hover {
        background: #38b7ea;
        color: #fff;
        text-decoration: none;
        text-shadow: 0 1px #169cd2;
      }
    }
    .devider {
      height: 1px;
      border-top: 1px solid $borderColor;
      margin: 20px;
    }
    .share-btn {
      padding: 0 20px;
      div {
        display: flex;
        justify-content: flex-end;
        float: right;
        cursor: pointer;
        &:hover {
          span {
            color: #565a5f;
          }
          i {
            color: #565a5f;
          }
        }
        span {
          color: #999;
          font-size: 12px;
          margin-left: 5px;
        }
        i {
          color: #999;
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
  main .timeline-col .timeline-wrap .timeline-article .article-title {
    font-size: 22px;
    padding-top: 15px;
  }
}
</style>
<style lang="scss">
.page-box {
  text-align: center;
  margin-top: 35px;
  button {
    background-color: $bgColor !important;
  }
  button:disabled {
    color: $pageBtnDis !important;
    &:hover{
      color: $pageBtnDis !important;  
    }
  }
  .btn-next {
    color: $fontColor;
    &:hover {
      color: $mainColor;
    }
  }
  li {
    background-color: $bgColor;
    color: $pageColor;
    &:hover {
      color: $mainColor;
    }
  }
  .active {
    color: $fontColor;
  }
}
</style>

