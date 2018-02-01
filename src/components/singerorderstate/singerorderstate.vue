<template>
    <div class="orderstate">
      <scroll class="scrollOrder">
        <div v-show="hasOrder">
          <ul>
            <li class="order-detail" v-for="n in 10">
              <h3>订单编号：021114220220<span class="icon-right"></span><i>交易成功</i></h3>
              <div class="cont">
                <img class="pic" src="http://file.jjiehao.com/files/87ef8d06/1331c0e77c4376cf28a4b45c961/201711/2711405629.jpg"/>
                <div class="cont-detail">
                  <p>经典拼配/Mixed JIMUU Cake经典拼配经典拼配经典拼配</p>
                  <span>3月21号发货</span>
                </div>
                <div class="price">
                  <span>￥300.00元</span>
                  <del>￥300.00元</del>
                  <i class="number">X1</i>
                </div>
              </div>
            </li>
            <h4>共1件商品&nbsp;&nbsp;合计：￥<span>64.00</span>&nbsp;（含运费￥0.00）</h4>
            <div class="confirm-btn">
              <a class="external" href="">删除订单</a><a class="on external" href="">订单详情</a>
            </div>
          </ul>
        </div>
        <div v-show="!hasOrder" class="noorder">
          <div>
            <img  src="../../common/images/notice2.png" alt="">
            <p>您还没有待付款的订单哦</p>
          </div>
        </div>
      </scroll>
    </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default {
    data() {
      return {
        hasOrder: false
      }
    },
    created() {
      this.$nextTick(() => {

      })
    },
    components: {
      Scroll
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .orderstate
    position fixed
    top 83px
    bottom 0px
    overflow hidden
    width 100%
    height calc( 100% - 90px)
    z-index 104
    .scrollOrder
      width 100%
      height 100%
      overflow hidden
      ul
        .order-detail
          h3
            line-height 39px
            padding 0 10px
            font-size 14px
            overflow hidden
            .icon-right
              padding-left: 5px;
              color: #dededf
            i
              float right
              font-style normal
              color: #ef2f2f
          .cont
            display flex
            background #f5f5f5
            color #3d4145
            padding 10px 10px 20px 10px
            align-items: center
            justify-content space-around
            .pic
              width 20%
              height auto
            .cont-detail
              align-self: stretch;
              flex-direction: column;
              justify-content: space-around;
              display: flex;
              p
                font-size 14px
                overflow hidden
                line-height 20px
                height 40px
                color #3d4145
                word-break break-all
              span
                color #c3c3c3
                font-size 12px
            .price
              align-self: stretch;
              flex-direction: column;
              justify-content: space-around;
              display: flex
              font-size 14px
              flex 1
              span
                white-space nowrap
              del
                color: #c3c3c3
              .number
                font-style normal
                text-align right
                color: #c3c3c3



      h4
        text-align right
        no-wrap()
        font-size 14px
        padding:10px 6px 10px 12px
        line-height 18px
      .confirm-btn
        text-align right
        line-height 30px
        a
          font-size 13px
          padding 4px 8px
          border: 1px solid #999999
          margin-right 5px
      .noorder
        height 100%
        width 100%
        display flex
        align-items center
        justify-content center
        div
          width 50%
          img
            width 100%
          p
            color #8a8a8a
            margin-top 10px
</style>
