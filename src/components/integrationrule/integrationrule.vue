<template>
  <div class="integrationrule">
    <isat-publictoptitle
      :titles="'积分规则'"
    ></isat-publictoptitle>
    <scroll ref="scrolls" class="scroll-content">
      <div>
        <isat-extendList></isat-extendList>
      </div>
    </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import IsatExtendList from 'base/extendList/extendList'
  import Scroll from 'base/scroll/scroll'
  export default {
    methods: {
      refresh() {
        this.$refs.scrolls.refresh()
        /* console.log(123) */
      }
    },
    components: {
      IsatPublictoptitle,
      IsatExtendList,
      Scroll
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .integrationrule
    position fixed
    top 0px
    bottom 0px
    width 100%
    height 100%
    overflow hidden
    background-color #fff
    .scroll-content
      height calc(100% - 40px)
      overflow hidden
      width 100%
</style>
