<template>
  <div class="mask" @click.prevent.stop="cancelMask">
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    methods: {
      cancelMask() {
        this.$emit('cancelMask', false)
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .mask
    position fixed
    z-index 105
    background-color rgba(0,0,0,0.5)
    width 100%
    height 100%
    bottom 0px
    overflow hidden
</style>
