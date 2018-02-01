<template>
    <div class="right-com">
      <isat-good-list :rowclass="rowclass"></isat-good-list>
    </div>
</template>
<script type="text/ecmascript-6">
  import IsatGoodList from 'base/goodsList/goodsList'
  export default {
    props: {
      rowclass: {
        type: Boolean,
        default: false
      }
    },
    components: {
      IsatGoodList
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .right-com
    position fixed
    top 90px
    height calc(100% - 90px)
    width 100%
    bottom:0px


</style>
