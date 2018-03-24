<template>
  <div class="orderstate">
    <isat-orderlist></isat-orderlist>
  </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import IsatOrderlist from 'base/baseorder/baseorder'
  export default {
    data() {
      return {
        hasOrder: false
      }
    },
    created() {
      this.$nextTick(() => {

      })
    },
    components: {
      Scroll,
      IsatOrderlist
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .orderstate
    bottom 0px
    overflow hidden
    width 100%
    height calc( 100% - 90px)
    z-index 104
</style>

