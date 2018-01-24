<template>
  <div class="backTop">
    <i @click.prevent.stop.self="backTop"></i>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  methods: {
    backTop() {
      /* 第三个参数为动画时间参数 */
      /* this.$refs.scrolls.scrollTo(0, 0, 1000) */
      this.$emit('backtop', 1000)
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .backTop
    position fixed
    z-index 106
    bottom 100px
    width 50px
    height 50px
    right 15px
    i
      width 100%
      display inline-block
      padding-top 100%
      background-image url("../../common/images/top.png")
      background-repeat no-repeat
      background-position center
      background-size contain
</style>
