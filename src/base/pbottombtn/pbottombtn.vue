<template>
  <div class="publicbtn">
    <a class="footerbox">
      <span>{{btnText}}</span>
    </a>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      btnText: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.publicbtn
  .footerbox
    height 50px
    display flex
    align-items center
    justify-content center
    background-color #ef2f2f
    &:active
      background-color #26a2ff
    span
      color #fff
      font-size 20px
</style>
