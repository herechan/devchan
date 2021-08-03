<template>
  <div>
    <Row class="justify-row">
      <Col :sm="12">
        <Card class="card">
          <span slot="header">Editor</span>
          <div slot="article" class="content">
            <i-input type="textarea" :rows="4" placeholder="" v-model="weiboValue"></i-input>
            <article class="option-bar flex">
              <div class="left">
                <Upload :action="baseUrl+'/admin/uploadWeiboImages'" :on-progress="uploadProgressHandle" :on-success="imageUploadSuccessHandle" :headers='headerObj' :show-upload-list=false>
                    <!-- <Button icon="ios-cloud-upload-outline"></Button> -->
                  <svg class="iconfont" aria-hidden="true">
                    <use xlink:href="#icon-tupian" />
                  </svg>  
                </Upload>
                <div class="progress" v-if="uploadFlag">
                  <Progress :percent="uploadPercent" />
                </div>
              </div>
              <div class="right">
                <i-button type="success">发布</i-button>
              </div>
            </article>
            <article class="gallery" v-if="imageList.length">
            <Modal
                v-model="deleteImageModel"
                title="提示"
                @on-ok="deleteImageConfirm"
                @on-cancle="deleteImageCancle">
                <p>是否删除该照片？</p>
            </Modal>
              <ul class="clearfix">
                <li class="img-item" v-for="(item, index) in imageList" :key="index">
                  <img :src="item.miniPath" alt="">
                  <div class="close-mode">
                    <Icon type="md-close" class="md-close" @click="delImageHandle(item, index)"/>
                  </div>
                </li>
              </ul>
            </article>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
import Card from "~/components/admin-card";
const {baseUrl} = process.env
export default {
  data() {
    return {
      weiboValue: '',
      baseUrl,
      headerObj: {
      },
      imageList: [],
      uploadPercent: 0,
      uploadFlag: false,
      deleteImageModel: false,
      deleteTargetIndex: ''
    }
  },
  components:{
    Card,
  },
  methods: {
    deleteImageConfirm () {
      const deleteTarget = this.imageList[this.deleteTargetIndex]
      this.imageList.splice(this.deleteTargetIndex, 1)
      this.$axios.get()
    },
    deleteImageCancle () {
      this.deleteTargetIndex = ''
    },
    imageUploadSuccessHandle (res, file) {
      let {data} = res
      this.imageList.push(data)
      this.uploadFlag = false
      this.uploadPercent = 0
    },
    uploadProgressHandle (event, file) {
      this.uploadPercent = event.percent
      this.uploadFlag = true
    },
    delImageHandle (item, index) {
      this.deleteImageModel = true
      this.deleteTargetIndex = index
    }
  },
}
</script>
<style lang="less" scoped>
  .card{
    .content{
      padding-top: 10px;
    }
    .option-bar{
      justify-content: space-between;
      margin: 10px 0;
      .iconfont{
        font-size: 24px;
        cursor: pointer;
      }
      .progress{
        display: inline-block;
        width: 200px;
      }
    }
    .gallery{
      // overflow: hidden;
      .img-item {
        margin-right: 10px;
        margin-bottom: 15px;
        transition: all 0.3s;
        border-radius: 6px;
        position: relative;
        float: left;
        .close-mode{
          height: 100%;
          width: 100%;
          left: 0;
          top: 0;
          position: absolute;
          // background-color: rgba(255, 255, 255, 0.4);
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          .md-close{
            font-size: 30px;
            cursor: pointer;
            color: #fff;
            opacity: 0;
            transition: all 0.3s;
          }
          &:hover{
            background-color: rgba(255, 255, 255, 0.4);
            .md-close{
              opacity: 1;
            }
          }
        }
        &.active{
          box-shadow: 0px 5px 9px 2px @main-color;
          transform: translateY(-5%);
        }
        .mini-del{
          // display: none;
          position: absolute;
          font-size: 24px;
          // color: @main-color;
          right: -12px;
          top: -12px;
          cursor: pointer;
          display: none;
        }
        &:hover{
          .mini-del{
            display: block;
          }
        }
        img {
          height: 78px;
          width: 78px;
          object-fit: cover;
          float: left;
          cursor: pointer;
          border-radius: 4px;
        }
      }
    }
  }
</style>