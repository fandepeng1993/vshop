<template>
  <div class="couponslist">
    <scroll class="scroll-content">
      <ul>
        <li v-for="n in 100" style="line-height: 30px">{{n.toString()}}</li>
      </ul>
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
</style>
