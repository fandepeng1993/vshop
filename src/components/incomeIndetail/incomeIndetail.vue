<template>
  <div class="incomeIndetail">
    <scroll class="incomeIndetailscroll">
      <ul v-show="false">
        <li v-for="n in 100" style="line-height: 30px">{{n.toString()}}</li>
      </ul>
      <div v-show="true" class="hasNodata">
        <img src="../../common/images/nodata.png" alt="">
        <p>您暂时没有数据</p>
      </div>
    </scroll>
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
<style scoped lang="stylus" rel="stylesheet/stylus">
  .incomeIndetail
    overflow hidden
    height calc( 100% - 225px)
    width 100%
    background-color #f5f4f3
    .incomeIndetailscroll
      overflow hidden
      height 100%
      width 100%
      .hasNodata
        text-align center
        background-color #fff
        padding-bottom 30px
        color #999
        img
          width 37px
          margin 30px auto
</style>
