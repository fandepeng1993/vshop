<template>
  <transition name="slide">
    <div class="orderstatus">
      <isat-publictoptitle :isback="false" :defaultHome="'/Membercenter'" :titles="titlesname"></isat-publictoptitle>
      <!--<div class="infourtab">
        <router-link tag="div" class="tab-item" to="/Membercenter/orderstatus/allorder">
          <p class="tab-link">全部</p>
        </router-link>
        <router-link tag="div" class="tab-item" to="/Membercenter/orderstatus/obligation">
          <p class="tab-link">待付款</p>
        </router-link>
        <router-link tag="div" class="tab-item" to="/Membercenter/orderstatus/waitsendgood">
          <p class="tab-link">待发货</p>
        </router-link>
        <router-link tag="div" class="tab-item" to="/Membercenter/orderstatus/waitreceivgood">
          <p class="tab-link">待收货</p>
        </router-link>
        <router-link tag="div" class="tab-item" to="/Membercenter/orderstatus/waitevaluated">
          <p class="tab-link">待评价</p>
        </router-link>
      </div>-->
      <isat-infour-tab
        :datastab="datastab"
        :vhiddenName="vhiddenName"
        :dirfalse="true"
        :isShow="false">
      </isat-infour-tab>
      <router-view></router-view>
        <!--<keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>-->
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import IsatInfourTab from 'base/infourtab/infourtab'
  export default {
    props: {
      titlesname: {
        type: String,
        default: '普通订单'
      }
    },
    data() {
      return {
        datastab: [
          {name: '全部', srcfirst: '/Membercenter/orderstatus', srclast: '/allorder'},
          {name: '待付款', srcfirst: '/Membercenter/orderstatus', srclast: '/obligation'},
          {name: '待发货', srcfirst: '/Membercenter/orderstatus', srclast: '/waitsendgood'},
          {name: '待收货', srcfirst: '/Membercenter/orderstatus', srclast: '/waitreceivgood'},
          {name: '待评价', srcfirst: '/Membercenter/orderstatus', srclast: '/waitevaluated'}
        ],
        vhiddenName: ''
      }
    },
    created() {
      if (this.$route.query.ordername) {
        this.vhiddenName = '待付款'
      }
    },
    methods: {
      changeValue() {
      }
    },
    components: {
      IsatPublictoptitle,
      IsatInfourTab
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet">
  @import "~common/stylus/mixin"
  .orderstatus
    position fixed
    width 100%
    height 100%
    background-color #fff
    top 0px
    bottom 0px

  .slide-enter-active,.slide-leave-active
    transition all 0.3s
  .slide-enter
    transform translate3d(100%,0,0)
  .slide-leave-to
    transform translate3d(100%,0,0)

  .slides-enter-active,.slides-leave-active
    transition all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)
  .slides-enter
    transform translate3d(100%,0,0)
  .slides-leave-to
    transform translate3d(-100%,0,0)

</style>

