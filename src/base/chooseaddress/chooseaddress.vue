<!--<template>
  <transition name="slide">
    <div class="chooseadd">
      <isat-publictoptitle :isback="false" :titles="titlesname"></isat-publictoptitle>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  export default {
      name: "chooseaddress",
      data() {
        return {
          titlesname: '选择地址'
        }
      },
    components: {
      IsatPublictoptitle
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .chooseadd
    position fixed
    background #fff
    top 0px
    bottom 0px
    width 100%
    height 100%
    z-index 110

.slide-enter-active,.slide-leave-active
  transition transform  0.3s
.slide-enter
  transform translate3d(100%,0,0)
.slide-leave-to
  transform translate3d(100%,0,0)
</style>-->
