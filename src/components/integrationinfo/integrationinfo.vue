<template>
  <transition name="slide">
    <div class="integrationinfo">
      <isat-publictoptitle
        :titles="'积分明细'"
        :isback="false"
        :defaultHome="'/Membercenter'"
      ></isat-publictoptitle>
      <div @click.prevent.stop="cancleproup">
        <div class="integrationinfo-header">
          <ul>
            <li class="first">
              <p>当前积分</p>
              <h3>200</h3>
            </li>
            <li>
              <p>累计积分</p>
              <h3>200</h3>
            </li>
            <div class="tips">
              <i @click.prevent.stop="jumpage">积分规则</i>
            </div>
          </ul>
        </div>
        <i class="topdistance"></i>
        <isat-infour-tab class="tabInfo" :datastab="datastab" @checkDate="checkeDate" :datesearh="true" :isShow="false" :dirfalse="true"></isat-infour-tab>
        <i class="topdistance"></i>
        <router-view></router-view>
      </div>
      <isat-selectaddress :popupVisible="popupVisible" @cancleProup="cancleproup" ref="selectaddress">
      </isat-selectaddress>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import IsatInfourTab from 'base/infourtab/infourtab'
  import IsatSelectaddress from 'base/selectaddress/selectaddress'
  export default {
    data() {
      return {
        datastab: [
          {name: '全部', srcfirst: '/Membercenter/integrationinfo/', srclast: '1'},
          {name: '增加', srcfirst: '/Membercenter/integrationinfo/', srclast: '2'},
          {name: '消耗', srcfirst: '/Membercenter/integrationinfo/', srclast: '3'}
        ],
        popupVisible: false
      }
    },
    methods: {
      cancleproup() {
        if (!this.popupVisible) {
          return
        }
        this.popupVisible = false
        /* this.cancleProup() */
      },
      showProup() {
        this.popupVisible = true
      },
      checkeDate() {
        if (this.popupVisible) {
          return
        }
        this.showProup()
      },
      jumpage() {
        this.$router.push('/Membercenter/integrationrule')
      }
    },
    components: {
      IsatPublictoptitle,
      IsatInfourTab,
      IsatSelectaddress
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .integrationinfo
    position fixed
    width 100%
    height 100%
    top 0px
    bottom 0px
    background-color #fff
    overflow hidden
    .tabInfo
      background-color #fff
    .integrationinfo-header
      padding 18px
      background-color #f83333
      position relative
      ul
        display flex
        flex-direction row
        align-items center
        justify-content center
        li
          flex 1
          text-align center
          color #fff
          overflow hidden
          &.first
            border-right 1px solid #fff
          h3
            margin-top 20px
            font-size 28px
            margin-bottom 5px
            no-wrap()
          p
            margin-top 5px
            font-size 14px
        .tips
          text-align right
          position absolute
          right 5px
          bottom 4px
          color #fff
          i
            margin-right 10px
            font-style normal
            padding-left: 1.1rem;
            font-size: 13px
            line-height 18px
            background-image: url(../../common/images/memberimage/score-mark.png)
            background-size: 14px 14px
            background-repeat: no-repeat
            background-position:0 50%


  .topdistance
    display block
    height 5px
    background-color #f3f3f3

  .slide-enter-active,.slide-leave-active
    transition transform  0.3s
  .slide-enter
    transform translate3d(100%,0,0)
  .slide-leave-to
    transform translate3d(100%,0,0)
</style>
