<template>
    <transition name="slide">
      <div class="goodsdetail">
        <router-view></router-view>
      </div>
    </transition>
</template>
<script type="text/ecmascript-6">
export default {
  created() {
    console.log(this.$router, this.$route)
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .goodsdetail
    position fixed
    width 100%
    height 100%
    background white
    z-index 2
  .slide-enter-active,.slide-leave-active
    transition transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)
  .slide-enter,.slide-leave-to
    transform translate3d(100%,0,0)
</style>
