<template>
    <div class="loading-wrap">
        <div class="lds-css ng-scope">
            <div style="width:100%;height:100%" class="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.loading-wrap {
  height: 150px;
  width: 100%;
  position: relative;
  .lds-css{
      position: absolute;
      top: 50%;
      margin-top: -20px;
      left: 50%;
      margin-left: -20px;
  }
}
@keyframes lds-ripple {
  0% {
    top: 90px;
    left: 90px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 15px;
    left: 15px;
    width: 150px;
    height: 150px;
    opacity: 0;
  }
}
@-webkit-keyframes lds-ripple {
  0% {
    top: 90px;
    left: 90px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 15px;
    left: 15px;
    width: 150px;
    height: 150px;
    opacity: 0;
  }
}
.lds-ripple {
  position: relative;
}
.lds-ripple div {
  box-sizing: content-box;
  position: absolute;
  border-width: 10px;
  border-style: solid;
  opacity: 1;
  border-radius: 50%;
  -webkit-animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(1) {
  border-color: #38b7ea;
}
.lds-ripple div:nth-child(2) {
  border-color: #64a3d9;
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.lds-ripple {
  width: 40px !important;
  height: 40px !important;
  -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
  transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
}
</style>
