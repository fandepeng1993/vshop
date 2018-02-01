<template>
  <transition name="slide">
    <div class="membershipcardInfo">
      <isat-publictoptitle
        :isback="true"
        :titles="membershipcardInfo.name"
      ></isat-publictoptitle>
      <scroll class="scroll-content" ref="scrolls">
        <div>
          <div style="height: 14px"></div>
          <div class="card-show">
            <div class="top" style="background:rgba(0,0,0 ,1);">
              <div class="pic">
                <span>知硒堂商城</span>
              </div>
            </div>
            <h4><span>金卡会员</span><span class="text-red">9.7折  包邮 </span></h4>
          </div>
          <div>
            <isat-extendList></isat-extendList>
          </div>
        </div>
      </scroll>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import IsatExtendList from 'base/extendList/extendList'
  import Scroll from 'base/scroll/scroll'
  export default {
    props: {
      membershipcardInfo: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
      }
    },
    methods: {
      refresh() {
        this.$refs.scrolls.refresh()
        /* console.log(123) */
      }
    },
    components: {
      IsatPublictoptitle,
      Scroll,
      IsatExtendList
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .membershipcardInfo
    position fixed
    top 0px
    bottom 0px
    width 100%
    height 100%
    background-color #f0f0f0
    .scroll-content
      width 100%
      height calc(100% - 40px)
      overflow hidden
      .card-show
        margin: 0 14px 14px 14px
        background: #fff;
        border-radius: 6px;
        height: 170px;
        box-shadow: 2px 2px 1px #d7d7d7
        h4
          padding 16px
          font-size 14px
          line-height 18px
          display flex
          justify-content space-between
          .text-red
            color #ef2f2f
        .top
          padding: 16px;
          height: 88px;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px
          .pic
            padding: 16px 16px 16px 54px
            background-image url("../../common/images/shop.jpg")
            background-repeat: no-repeat
            background-size: 50px 50px
            color: #fff;
            font-size: 18px
            span
              margin-left 8px
  .slide-enter-active,.slide-leave-active
    transition transform  0.3s
  .slide-enter
    transform translate3d(0,100%,0)
  .slide-leave-to
    transform translate3d(0,100%,0)
</style>
