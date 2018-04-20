<template>
  <transition name="slide">
    <div class="bounty">
        <isat-publictoptitle :isback="false" :defaultHome="'/Membercenter'" :titles="titlesname"></isat-publictoptitle>
        <div class="bountytop">
          <div class="usablebounty">
            <p>当前可用余额（元）</p>
            <h3>{{(parseFloat(userInfo.user.curBountyNum)/100).toFixed(2)}}</h3>
          </div>
          <!-- <div class="rules">
            <a @click.prevent.stop="checkbonusrules"><i></i><span>余额规则</span></a>
          </div> -->
        </div>
        <div class="tabs">
          <isat-infourTab
            :datastab="datastab"
            :dirfalse="true"
            :isShow="false"
          ></isat-infourTab>
        </div>
        <router-view></router-view>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import IsatInfourTab from 'base/infourtab/infourtab'
  import {imageDomainName} from 'api/config'
  import {getCurrentUser} from 'api/getdata'

  export default {
    data() {
      return {
        titlesname: '余额',
        userInfo: {
          user: {}
        },
        datastab: [
          {name: '全部', srcfirst: '/Membercenter/bounty', srclast: '/all'},
          {name: '收入', srcfirst: '/Membercenter/bounty', srclast: '/income'},
          {name: '支出', srcfirst: '/Membercenter/bounty', srclast: '/expenditure'}
        ]
      }
    },
    created() {
      this._getCurrentUser()
    },
    methods: {
      _getCurrentUser() {
        getCurrentUser().then((res) => {
          if (res.ret === '0') {
            console.log(res.data.userInfo)
            this.userInfo = res.data.userInfo;
          }
        })
      },
      checkbonusrules() {
        this.$router.push({
          path: '/Membercenter/bonusrules'
        })
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
  .bounty
    position fixed
    width 100%
    height 100%
    top 0px
    bottom 0px
    background-color #fff
    .tabs
      border-top 6px solid #f3f3f3
      border-bottom  4px solid #f3f3f3
    .bountytop
      background linear-gradient(120deg, #fc7753, #ed3335)
      padding 4%
      .usablebounty
        color #ffffff
        p
          opacity 0.6
          text-align center
        h3
          font-size 40px
          text-align center
          margin 15px 0px 10px 0px
          no-wrap()
      .rules
        display flex
        align-items center
        justify-content flex-end
        a
          color #ffffff
          font-size 13px
          display flex
          align-items flex-end
          i
            width 14px
            height 14px
            background-image url("../../common/images/mark.png")
            background-position center
            background-size cover
            background-repeat no-repeat
            display inline-block
            margin-right 5px
  .slide-enter-active,.slide-leave-active
    transition transform  0.3s
  .slide-enter
    transform translate3d(100%,0,0)
  .slide-leave-to
    transform translate3d(100%,0,0)
</style>
