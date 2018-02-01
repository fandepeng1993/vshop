<template>
  <transition name="slide">
    <div class="deduction">
      <isat-good-list :rowclass="rowclass"></isat-good-list>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import IsatGoodList from 'base/goodsList/goodsList'
  export default {
    props: {
      rowclass: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Scroll,
      IsatGoodList
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .deduction
    width 100%
    height calc(100% - 190px)
    overflow hidden
    position: relative


</style>
