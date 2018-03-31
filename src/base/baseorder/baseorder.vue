<template>
  <div class="wraper">
    <scroll class="address-content">
      <div class="address-list">
        <ul class="orderList">
          <li v-for="orderInfo in orderList">
            <h3 class="headh3" @click.prevent.stop="gotoOrderDeatil(orderInfo)">
              <div class="headorder">
                <span>订单号：</span>
                <i>{{orderInfo.wemallOrder.orderNo}} </i>
                <b class="icon-right"></b>
              </div>
              <em class="red" v-if="orderInfo.wemallOrder.status == 1">等待买家付款</em>
              <em class="red" v-if="orderInfo.wemallOrder.status == 2">等待卖家发货</em>
              <em class="red" v-if="orderInfo.wemallOrder.status == 3">等待买家收货</em>
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
                <!-- <p>【苏州市】 您的订单已到达京东【苏州陆家分拣中心】</p>
                <small>2018-03-23 20:26:47</small> -->
                <p>
                  <span>状态：</span>
                  <i class="psz">{{orderInfo.wemallOrder.statusStr}}</i>
                </p>
                <small>{{orderInfo.wemallOrder.updateDate}}</small>
              </div>
              <i class="icon-right"></i>
            </div>
            <div v-for="orderItem in orderInfo.orderItemList" class="shopInfo" @click.prevent.stop="gotoItemDeatil(orderItem.itemId)">
              <!--<p class="headTop">
                <span>欣皓妮阳创意礼品专营店</span>
                <i class="icon-right"></i>
              </p>-->
              <div class="shopImg">
                <div class="leftInfodiv">
                  <img :src="imageDomainName+orderItem.photo" alt="">
                </div>
                <div class="centerInfo">
                  <p>{{orderItem.title}}</p>
                  <span>{{orderItem.itemNum}} 件</span>
                  <strong>￥{{((orderItem.totalFee)/100).toFixed(2)}}</strong>
                </div>
              </div>
            </div>
            <div class="orderinfo">
              <div>
                <span>运费：</span>
              </div>
              <div>￥{{(orderInfo.wemallOrder.freightPrice/100).toFixed(2)}}</div>
            </div>
            <div class="shopPrices">
              <h3>
                <i>微信支付</i>
                <span>合计：<b>￥{{(orderInfo.wemallOrder.orderPrice/100).toFixed(2)}}</b></span>
                <div class="dbBtn" v-if="orderInfo.wemallOrder.status == 1">
                  <a class="cancel" href="javascript:void(0);" @click.prevent.stop="cancelOrder(orderInfo.wemallOrder.orderNo)">取消订单</a>
                  <a class="buy external red" href="javascript:void(0);" @click.prevent.stop="payOrder(orderInfo.wemallOrder.orderNo)">立即支付</a>
                </div>
                <div class="dbBtn" v-if="orderInfo.wemallOrder.status == 2">
                  <a class="cancel" href="javascript:void(0);" >等待发货</a>
                  <a class="buy external red" href="javascript:void(0);" @click.prevent.stop="cancelOrderForAlreadyPaid(orderInfo.wemallOrder.orderNo)">确认取消订单</a>
                </div>
                <div class="dbBtn" v-if="orderInfo.wemallOrder.status == 3">
                  <a class="cancel" href="javascript:void(0);" @click.prevent.stop="receiveOrder(orderInfo.wemallOrder.orderNo)">确认收货</a>
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
  import {getOrderList, cancelOrder, getPrepareIdForPay, cancelOrderForAlreadyPaid, receiveOrder} from 'api/getdata'
  import {ERR_OK, imageDomainName} from 'api/config'
  export default {
    name: "baseorder",
    data() {
      return {
        orderList: [{
          orderItemList: [],
          wemallOrder: {},
          wemallOrderAddress: {}
        }],
        pageNo: 1,
        pageSize: 1000,
        imageDomainName: imageDomainName,
        listType: ""
      }
    },
    activated(){
     /* console.log(123)*/
    },
    created() {
      this._getOrderList();
    },
    methods: {
      _getOrderList() {
        let listType = this.$route.params.id;

        let params = {}
        params.pageNo = this.pageNo;
        params.pageSize = this.pageSize;

        if(listType == "obligation") {
          params.status = 1;
        } else if(listType == "waitsendgood") {
          params.status = 2;
        } else if(listType == "waitreceivgood") {
          params.status = 3;
        } else if(listType == "waitevaluated") {
          params.status = 4;
        }
        //status (*）=状态（1、未付款，2、已付款，3、已发货，4、已收货，5、已评论，6、交易退货，7、交易关闭，8、已取消）
        //params.status = 
        getOrderList(params).then((res) => {
          if (res.ret === '0') {
            this.orderList = res.data.list;
            for(let index in this.orderList) {
              let orderInfo = this.orderList[index];
              if(orderInfo.wemallOrder.status == 1) {
                orderInfo.wemallOrder.statusStr = "未付款";
              } else if(orderInfo.wemallOrder.status == 2) {
                orderInfo.wemallOrder.statusStr = "已付款，待发货";
              } else if(orderInfo.wemallOrder.status == 3) {
                orderInfo.wemallOrder.statusStr = "已发货，待收货";
              } else if(orderInfo.wemallOrder.status == 4) {
                orderInfo.wemallOrder.statusStr = "已收货，待评价";
              } else if(orderInfo.wemallOrder.status == 5) {
                orderInfo.wemallOrder.statusStr = "已评价";
              } else if(orderInfo.wemallOrder.status == 6) {
                orderInfo.wemallOrder.statusStr = "已退货";
              } else if(orderInfo.wemallOrder.status == 7) {
                orderInfo.wemallOrder.statusStr = "已关闭";
              } else if(orderInfo.wemallOrder.status == 8) {
                orderInfo.wemallOrder.statusStr = "未付款，已取消";
              } else if(orderInfo.wemallOrder.status == 9) {
                orderInfo.wemallOrder.statusStr = "已付款，已取消";
              }
            }
          }
        })
      },
      cancelOrder(orderNo) {
        //取消订单
        cancelOrder(orderNo).then((res) => {
          if (res.ret === '0') {
            alert("订单取消成功");
            this._getOrderList();
          } else {
            alert(res.retMsg);
          }
        })
      },
      payOrder(orderNo) {
        //付款
        let params = {};
        params.paymentType = 0;
        params.orderNo = orderNo;
        getPrepareIdForPay(params).then((res) => {
          if (res.ret === '0') {
            if(res.data.needPay == "0") {
              alert("订单付款成功");
              this.$router.push({
                path: `/Membercenter/orderstatus/waitsendgood`
              })
            } else {
              console.log("获取预付款id和签名成功", res.data);
            }
          } else {
            alert(res.retMsg);
          }
        })
      },
      cancelOrderForAlreadyPaid(orderNo) {
        cancelOrderForAlreadyPaid(orderNo).then((res) => {
          if (res.ret === '0') {
            alert("取消已付款订单成功");
            this._getOrderList();
          } else {
            alert(res.retMsg);
          }
        })
      },
      receiveOrder(orderNo) {
        alreadyReceived(orderNo).then((res) => {
          if (res.ret === '0') {
            alert("确认收货成功");
            this._getOrderList();
          } else {
            alert(res.retMsg);
          }
        })
      },
      gotoOrderDeatil(orderInfo) {
        if(orderInfo.wemallOrder.status == 1 ||
            orderInfo.wemallOrder.status == 2 ||
            orderInfo.wemallOrder.status == 3
          ) {
          let orderNo = orderInfo.wemallOrder.orderNo;
          this.$router.push({
            path: `/orderdetail/`+orderNo
          })
        }
      },
      gotoItemDeatil(itemId) {
        this.$router.push({
          path: `/Goodsdetail/`+itemId
        })
      }
    },
    components: {
      Scroll
    },
    watch: {
      '$route': function () {
        this._getOrderList();
      }
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
                  flex-direction column
                  justify-content space-around
                  p
                    color #333
                    font-size 14px
                    line-height 17px
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                  span
                    text-align right
                    font-size 14px
                  strong
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
