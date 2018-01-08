<template>
  <div class="goodsList">
    <scroll ref="scrolls" class="goodsListScroll">
      <div>
        <ul>
          <li v-for="n in 50">
            asdasd-----{{n.toString()}}
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default {
    created() {
    },
    methods: {
    },
    components: {
      Scroll
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

  @import "~common/stylus/variable"
  .goodsList
    width 100%
    height 100%
    overflow hidden
    background red
    .goodsListScroll
      position fixed
      width 100%
      height calc(100% - 90px)
      bottom 100px
      top 90px
      overflow hidden

</style>
