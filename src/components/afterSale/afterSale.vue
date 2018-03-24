<template>
  <transition name="slide">
    <div class="membershipcard" >
      <isat-publictoptitle :isback="false" :defaultHome="'/Membercenter'" :titles="titlesname"></isat-publictoptitle>
      <isat-infour-tab :datastab="datastab"  :dirfalse="true" :isShow="false"></isat-infour-tab>
      <transition name="slider">
        <router-view></router-view>
      </transition>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import IsatInfourTab from 'base/infourtab/infourtab'
  export default {
    data() {
      return {
        titlesname: '维权订单',
        datastab: [
          {name: '退款', srcfirst: '/Membercenter/afterSale/', srclast: '1'},
          {name: '退货', srcfirst: '/Membercenter/afterSale/', srclast: '2'}
        ]
      }
    },
    activated() {
      // console.log(123)
    },
    deactivated() {
      // console.log(456)
    },
    created() {
    },
    computed: {
    },
    methods: {
    },
    watch: {
    },
    components: {
      IsatPublictoptitle,
      IsatInfourTab
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .membershipcard
    position fixed
    top 0px
    bottom 0px
    width 100%
    height 100%
    background-color #f5f4f3

  .slider-enter-active,.slider-leave-active
    transition transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)
  .slider-enter,.slider-leave-to
    transform translate3d(100%,0,0)

  .slide-enter-active,.slide-leave-active
    transition transform  0.3s
  .slide-enter
    transform translate3d(100%,0,0)
  .slide-leave-to
    transform translate3d(100%,0,0)
</style>
