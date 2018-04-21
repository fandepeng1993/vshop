<template>
  <div class="callphonewrap" @click.prevent.stop="aboutuspage">
    <div class="callphone" >
     <!-- <div class="call-img">
        <div class="img-call"></div>
      </div> -->
      <div class="call-text">
        <span class="aboutus">关于我们</span>
      </div>
      <i class="icon-right" style="font-size: 21px"></i>
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
    },
    methods:{
      call() {
        window.location.href = `tel:${this.phone}`
      },
      aboutuspage() {
        this.$router.push({
          path:'/about'
        })
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
      line-height 40px
      justify-content space-between
      align-items center
      padding 0px 10px 0px 142px
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
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        justify-content space-around
        font-size 14px
        .aboutus
          align-self center
          font-size 18px

</style>
