<template>
  <div class="callphonewrap">
    <div class="callphone">
      <div class="call-img">
        <div class="img-call"></div>
      </div>
      <div class="call-text">
        <span>客服电话</span>
        <span>{{phone}}</span>
      </div>
      <div class="call-btn">
        <mt-button type="primary" size="small">拨号</mt-button>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      phone: {
        type: String,
        default: "18516662341"
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .callphonewrap
    padding-top: 10px;
    background: #f0f0f0;
    .callphone
      display flex
      background white
      padding 10px
      justify-content space-between
      .call-img
        width 8%
        display flex
        .img-call
          width 100%
          padding-top 100%
          background-image url("../../common/images/tel.png")
          background-repeat no-repeat
          background-position center
          background-size contain
          align-self center
      .call-text
        display flex
        width 70%
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        justify-content space-around
        span
          align-self center
          font-size 18px

</style>
