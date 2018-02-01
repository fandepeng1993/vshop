<template>
  <transition name="slide">
    <div class="membershipcardList">
      <isat-publictoptitle
        :isback="true"
        :titles="titlesname"
      ></isat-publictoptitle>
      <scroll class="scroll">
        <div class="scroll-content">
          <div class="content-top">
            <p><img src="../../common/images/member-sign.png" /><span>当前等级</span></p>
            <h3><span>无</span></h3>
          </div>
          <div class="list-wrap">
            <ul>
              <li>
                <span>0</span>
                <p>消费笔数</p>
              </li>
              <li>
                <span>¥0</span>
                <p>消费金额</p>
              </li>
              <li>
                <span>200</span>
                <p>累计积分</p>
              </li>
            </ul>
          </div>
          <slider :showDot="false"  :autoPlay="false">
            <div class="bannerWrap" v-for="(item,index) in Memberdata" >
              <div class="bannerItem">
                <ul>
                  <li :class="{red: index===inindex}" v-for="(initem,inindex) in Memberdata">
                    <span :style="{ height: initem.columnar}"></span>
                    <p>{{initem.name}}</p>
                  </li>
                </ul>
              </div>
              <div class="card-detail">
                <div class="rule">
                  <div class="tit">
                    {{item.name}}获得条件
                  </div>
                  <div class="detail">
                    <p><span>•</span>交易笔数满<i>{{item.amount}}</i>笔</p>
                    <p><span>•</span>消费金额满<i>{{item.money}}</i>元</p>
                    <p><span>•</span>累计积分满<i>{{item.integration}}</i>积分</p>
                    <h3>
                      以上条件，任意满足一项即可。
                    </h3>
                  </div>
                </div>
                <a @click.prevent.stop="jumppage(item)" class="external">
                  <div class="rule">
                    <div class="tit">
                      <span>
                        查看会员卡详情
                      </span>
                      <span class=" icon-right"></span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </slider>
        </div>
      </scroll>
      <router-view :membershipcardInfo="membershipcardInfo"></router-view>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  export default {
    data() {
      return {
        titlesname: '会员卡列表',
        membershipcardInfo: {},
        Memberdata: [
          {
            name: '金卡会员',
            amount: 15,
            columnar: '33%',
            money: '5000.00',
            integration: '10000'
          },
          {
            name: '铂金卡会员',
            amount: 30,
            columnar: '66%',
            money: '10000.00',
            integration: '15000'
          },
          {
            name: '钻石会员',
            amount: 50,
            columnar: '100%',
            money: '30000.00',
            integration: '50000'
          }
        ]
      }
    },
    methods: {
      jumppage(item) {
        this.membershipcardInfo = item
        this.$router.push({
          path: '/Membercenter/membershipcard/membershipcardList/membershipcardInfo'
        })
      }
    },
    components: {
      IsatPublictoptitle,
      Scroll,
      Slider
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .membershipcardList
    position fixed
    top 0px
    bottom 0px
    background-color: #efeff4
    width 100%
    height 100%
    .scroll
      width 100%
      height calc(100% - 40px)
      overflow hidden
      background-color #eeeeee
      .scroll-content
        .content-top
          width 100%
          height 90px
          background-image: url(../../common/images/member-tit.jpg)
          background-repeat: no-repeat
          background-size: cover
          p
            text-align center
            display flex
            justify-content center
            align-items center
            color #fff
            padding 10px 0px
            img
              width 20px
              margin-right 5px
          h3
            display flex
            justify-content center
            text-align center
            padding 10px 0px
            color #fff
        .list-wrap
          margin-bottom: 0.3rem
          background-color #fff
          ul
            display flex
            justify-content space-around
            align-items center
            li
              text-align center
              margin 0.4rem 0
              flex 1
              border-right: 1px solid #eeeeee
              no-wrap()
              &:last-child
                border none
              span
                color #fa3434
                font-size 23px
                line-height 30px
              p
                font-size 14px
                line-height 30px
        .slide
          background-color #fff
          position relative
          .bannerWrap
            .bannerItem
              padding 18px 18px 30px 18px
              ul
                height 200px
                display flex
                border-bottom 1px solid #d0d0d0
                li
                  flex 1
                  color #5f646e
                  display flex
                  flex-direction column
                  justify-content flex-end
                  position relative
                  span
                    display: block
                    width 18%
                    margin 0 auto
                    background-color #ccc
                  &.red
                    span
                      background: -webkit-linear-gradient(top, #f66a4e, #f0252a)
                  p
                    line-height 18px
                    position absolute
                    bottom -30px
                    font-size 14px
                    text-align center
                    width 100%
                    color #5f646e


            .card-detail
              .rule
                padding 14px 14px 0px 14px
                .tit
                  font-size 18px
                  text-align left
                  color #333333
                  padding-bottom 10px
                .detail
                  padding 0px 10px 10px 10px
                  text-align left
                  font-size 16px
                  h3
                    line-height 24px
                  p
                    line-height 24px
                    i
                      color: #fa3434
                      padding 0px 3px
                      font-style normal
              .external
                color: #3d4145
                .rule
                  border-top: 0.3rem solid #f5f4f3
                  .tit
                    display flex
                    justify-content space-between

  .slide-enter-active,.slide-leave-active
    transition transform  0.3s
  .slide-enter
    transform translate3d(0,-100%,0)
  .slide-leave-to
    transform translate3d(0,-100%,0)
</style>
