<template>
  <transition name="slidex">
    <div class="coupons">
      <isat-publictoptitle
        :titles="'我的疯狂砍价'"
        :isback="false"
        :defaultHome="'/Membercenter'"
      ></isat-publictoptitle>
      <isat-infour-tab class="tabInfo" :datastab="datastab"   :isShow="false" :dirfalse="true"></isat-infour-tab>
      <router-view></router-view>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import IsatInfourTab from 'base/infourtab/infourtab'
  export default {
    data() {
      return {
        datastab: [
          {name: '进行中', srcfirst: '/Membercenter/crazybargaining/', srclast: '1'},
          {name: '成功', srcfirst: '/Membercenter/crazybargaining/', srclast: '2'},
          {name: '失败', srcfirst: '/Membercenter/crazybargaining/', srclast: '3'},
          {name: '为支付', srcfirst: '/Membercenter/crazybargaining/', srclast: '4'}
        ]
      }
    },
    components: {
      IsatPublictoptitle,
      IsatInfourTab
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .coupons
    position fixed
    top 0px
    bottom 0px
    width 100%
    height 100%
    overflow hidden
    background-color #f3f3f3

  .slidex-enter-active,.slidex-leave-active
    transition transform  0.3s
  .slidex-enter
    transform translate3d(100%,0,0)
  .slidex-leave-to
    transform translate3d(100%,0,0)
</style>
