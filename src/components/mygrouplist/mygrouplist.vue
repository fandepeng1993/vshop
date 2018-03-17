<template>
  <div class="couponslist">
    <scroll class="scroll-content" v-show="false">
      <ul>
        <li v-for="n in 100" style="line-height: 30px">{{n.toString()}}</li>
      </ul>
    </scroll>
    <div class="noData" v-show="true">
      <div class="img">
        <img src="../../common/images/nodata.png">
      </div>
      <div class="text-gray">暂无拼团</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default {
    components: {
      Scroll
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet">
  @import "~common/stylus/mixin"
  .couponslist
    background-color #fff
    width 100%
    height calc(100% - 88px)
    overflow hidden
    .scroll-content
      width 100%
      height 100%
      overflow hidden
    .noData
      height 150px
      width 100%
      display flex
      flex-direction column
      justify-content space-around
      border-bottom: 1px solid #d6d7d9
      background-color: #fff
      .img
        display flex
        justify-content center
      .text-gray
        text-align center
        font-size 16px
        color #999999
</style>
