<template>
  <div class="wraper">
    <scroll class="address-content">
      <div class="address-list">
        <ul class="orderList">
          <li v-for="n in 10">
            <h3 class="headh3" @click.prevent.stop="gotoOederDeatil(n)">
              <div class="headorder">
                <span>订单号：</span>
                <i>73525263712 </i>
                <b class="icon-right"></b>
              </div>
              <em class="red">等待付款</em>
            </h3>
            <!--<div class="wrapperL">
              <div class="stateList">
                <p>
                  <span>状态：</span>
                  <i class="psz">配送中</i>
                </p>
                <p>
                  <span>总价</span>
                  <i class="red">¥2999999999999999999999999999999999.80</i>
                </p>
              </div>
              <div class="btnList">
                <a href="javascript:void(0);" class="btn1">确认收货</a>
                <a href="javascript:void(0);" class="btn2">再次购买</a>
              </div>
            </div>-->
            <div class="orderinfo">
              <div class="orderaddress">
                <p>【苏州市】 您的订单已到达京东【苏州陆家分拣中心】</p>
                <small>2018-03-23 20:26:47</small>
              </div>
              <i class="icon-right"></i>
            </div>
            <div v-for="n in 3" class="shopInfo" @click.prevent.stop="gotoOederDeatil(n)">
              <!--<p class="headTop">
                <span>欣皓妮阳创意礼品专营店</span>
                <i class="icon-right"></i>
              </p>-->
              <div class="shopImg">
                <div class="leftInfodiv">
                  <img src="http://file.jjiehao.com/files/87ef8d06/1331c0e77c4376cf28a4b45c961/201712/1315020348.jpg" alt="">
                </div>
                <div class="centerInfo">
                  <p>【买1送3 买2送10】 死神辣条 整蛊恶搞愚人节地狱死亡辣条魔鬼辣条送女友男生日礼物 买一送三(1盒加1包共4根外加2颗棒棒糖)</p>
                  <span>1 件</span>
                  <strong>￥118.00元</strong>
                </div>
              </div>
            </div>
            <div class="shopPrices">
              <h3>
                <i>微信支付</i>
                <span>合计：<b>￥118</b></span>
                <div class="dbBtn">
                  <a class="cancel" href="javascript:void(0);">取消订单</a>
                  <a class="buy external red" href="javascript:void(0);">立即支付</a>
                </div>
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  export default {
    name: "baseorder",
    activated(){
     /* console.log(123)*/
    },
    created() {
      console.log(345888)
    },
    methods: {
      gotoOederDeatil(index) {
        this.$router.push({
          path: `/orderdetail/${index}`
        })
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .wraper
    height: calc(100%);
    .address-content
      width: 100%;
      height 100%
      overflow: hidden;
      z-index: 105;
      background #f5f4f3
      .address-list
        .orderList
          li
            background #fff
            margin-bottom 10px
            .headh3
              font-size 14px
              display flex
              padding 0px 10px 0px 10px
              line-height 45px
              border-bottom 1px solid #e5e5e5
              align-items center
              justify-content space-between
              .headorder
                span
                  color #999
                i
                  font-style normal
                b
                  font-size 18px
              em
                align-self flex-end
                font-style normal
              .red
                color #ef2f2f
            .wrapperL
              display flex
              flex-wrap nowrap
              justify-content space-between
              margin 0px 10px 0px 10px
              border-bottom 1px solid #e5e5e5
              .stateList
                font-size 12px
                width 50%
                p
                  no-wrap()
                  margin 10px 0px
                  span
                    color #666
                  i
                    font-style normal
                    &.red
                      color red
                    &.psz
                      color #3985ff
              .btnList
                display flex
                align-items  center
                a
                  font-size 13px
                  text-decoration none
                  color white
                  padding 5px 8px
                  border-radius 3px
                  &.btn1
                    background #3884ff
                  &.btn2
                    background #f19325
                    margin-left 10px
            .orderinfo
              border-bottom 1px solid #e5e5e5
              padding 10px 10px
              display flex
              justify-content space-between
              flex-wrap nowrap
              .orderaddress
                overflow hidden
                p
                  font-size 12px
                  color #333
                  margin-bottom 5px
                  no-wrap()
                small
                  font-size 10px
                  color #999
              i
                align-self center
                color #666
                font-size 18px
            .shopInfo
              padding  0px 10px
              background #f5f5f5
              p
                &.headTop
                  padding-left 30px
                  line-height 40px
                  display flex
                  overflow hidden
                  align-items center
                  justify-content space-between
                  background-image url("../../common/images/shop.png")
                  background-size 16px
                  background-repeat no-repeat
                  background-position 7px center
                span
                  no-wrap()
                  font-size 14px
                i
                  color: #666;
                  font-size: 18px;
              .shopImg
                display flex
                justify-content: flex-start;
                align-items center
                .leftInfodiv
                  width 75px
                  height 75px
                  margin-right 10px
                  margin-bottom 10px
                  margin-top 10px
                  img
                    width 75px
                    height 75px
                .centerInfo
                  display flex
                  width calc(100% - 85px)
                  flex-direction column
                  justify-content space-around
                  p
                    color #333
                    font-size 14px
                    line-height 17px
                    overflow : hidden;
                    text-overflow: ellipsis;
                    max-height 50px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                  span
                    text-align right
                    font-size 14px
                    color #777
                  strong
                    color #ef2f2f
                    font-size 14px
                    text-align right
            .shopPrices
              padding  0 10px
              border-bottom 1px solid #e5e5e5
              h3
                font-size 14px
                display flex
                line-height 45px
                align-items center
                justify-content space-between
                i
                  font-style normal
                  font-size 14px
                span
                  font-size 14px
                  b
                    color #ef2f2f
                    font-size 16px
                .dbBtn
                  a
                    display: inline-block;
                    text-align: center;
                    margin-right: 0.3rem;
                    margin-left: 0.5rem;
                    border-radius: 0.15rem;
                    padding: 0.2rem 0.5rem;
                    line-height: 1.15rem;
                    font-size: 0.6rem;
                    &.buy
                      border: 1px solid #f55656;
                      color: #f55656;
                    &.cancel
                      border: 1px solid #999999;
                      color: #666666;



</style>
