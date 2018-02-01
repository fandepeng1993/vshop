<template>
  <transition name="slide">
    <div class="integralmall">
      <isat-publictoptitle
        :isback="false"
        :titles="'积分商城'"
        :defaultHome="'/Membercenter'"
      >
      </isat-publictoptitle>
      <div class="integralmall-header">
        <span>当前积分</span>
        <div class="num">
          <b>200</b>
        </div>
        <div class="tips">
          <i @click.prevent.stop="jumpage">积分明细</i>
        </div>
      </div>
      <isat-infour-tab :datastab="datastab" @changeIcon="changeValue" :menuIcon="rowValue" :dirfalse="true"></isat-infour-tab>
      <transition name="slider">
        <router-view :rowclass="rowValue"></router-view>
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
        datastab: [
          {name: '积分抵扣', srcfirst: '/Membercenter/integralmall/', srclast: '1'},
          {name: '积分兑换', srcfirst: '/Membercenter/integralmall/', srclast: '2'}
        ],
        rowValue: false
      }
    },
    methods: {
      changeValue(newval) {
        this.rowValue = newval
      },
      jumpage() {
        this.$router.push('/Membercenter/integrationinfo/1')
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
  .integralmall
    position fixed
    width 100%
    height 100%
    top 0px
    bottom 0px
    background-color #f5f4f3
    .infourtab
      background-color #fff
    .integralmall-header
      height 100px
      background-image: url('../../common/images/memberimage/score-bg.png')
      background-size: cover
      background-repeat: no-repeat
      background-position: center
      text-align: center
      color: #fff
      display flex
      flex-direction column
      span
        font-size 14px
        display block
        padding-top 10px
      .num
        margin: 10px auto;
        padding: 0 10px 0 30px
        display: inline-block
        font-size: 22px
        line-height 30px
        background-color #f12529
        background-image url(../../common/images/memberimage/score.png)
        background-size 16px 20px
        background-repeat no-repeat
        background-position 5% 50%
        border-radius 16px
        no-wrap()
        b
          width: 100px
          display: inline-block
          margin-left: 10px
      .tips
        text-align right
        i
          margin-right 10px
          font-style normal
          padding-left: 1.1rem;
          font-size: 14px
          line-height 18px
          background-image: url(../../common/images/memberimage/score-mark.png)
          background-size: 14px 14px
          background-repeat: no-repeat
          background-position:0 50%


  .slider-enter-active,.slider-leave-active
    transition transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)
  .slider-enter,.slider-leave-to
    transform translate3d(100%,0,0)

  .slide-enter-active,.slide-leave-active
    transition transform  0.3s
  .slide-enter
    transform translate3d(-100%,0,0)
  .slide-leave-to
    transform translate3d(-100%,0,0)

</style>
