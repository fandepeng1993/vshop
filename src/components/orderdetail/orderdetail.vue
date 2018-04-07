<template>
  <transition name="slidex">
    <div class="shoppingcart">
        <isat-publictoptitle  :titles="Goodstitle"></isat-publictoptitle>
        <!--<div class="shoppingcart-content" v-show="sss">-->
        <div class="shoppingcart-content">
          <div class="stateGoods">
            <div class="tipcontent">
              <p v-if="orderInfo.wemallOrder.status === 1">等待买家付款</p>
              <p v-if="orderInfo.wemallOrder.status === 2">等待卖家发货</p>
              <p v-if="orderInfo.wemallOrder.status === 3">等待买家收货</p>
              <!-- <span>0小时0分钟后支付过期</span> -->
            </div>
          </div>
          <div class="addrecive" v-if="isusedis">
            <h3>
              <span>收货人：</span>
              <i>{{orderInfo.wemallOrderAddress.receiverName}}</i>
            </h3>
            <h3>
              <span>联系电话：</span>
              <i>{{orderInfo.wemallOrderAddress.receiverMobile}}</i>
            </h3>
            <p>
              <i>收货地址：</i>
              <span>{{orderInfo.wemallOrderAddress.receiverProvince + orderInfo.wemallOrderAddress.receiverCity + orderInfo.wemallOrderAddress.receiverDistrict + orderInfo.wemallOrderAddress.receiverAddress}}</span>
              <b v-if="false">更换地址 ></b>
            </p>
          </div>
          <div class="noaddress" v-else>
            <h3>
              <div class="leftss">
                <img src="../../common/images/add.svg" alt="">
                <span>请填写收货地址</span>
              </div>
              <i class="icon-right"></i>
            </h3>
          </div>
          <div class="sidai">
          </div>
          <!--<div class="shopgoods">
            <div class="shophead">
              <img src="http://file.jjiehao.com/files/87ef8d06/1331c0e77c4376cf28a4b45c961/201707/2808142246.jpg" alt="">
              <span>知硒堂商城</span>
            </div>
            <ul class="goodslist">
              <li v-for="n in 3">
                <img src="http://file.jjiehao.com/files/87ef8d06/1331c0e77c4376cf28a4b45c961/201712/1315020348.jpg" alt="">
                <div class="goodintroduce">
                  <p>【利川团堡山药】5KG/盒，粘液质高，水分低，香面</p>
                  <h3><span>￥118.00</span><i>x1</i></h3>
                </div>
              </li>
            </ul>
            <div class="allprice">
              <h3>
                <span>共3件商品</span>
                <i>小计：</i>
                <em>
                  <b>￥256</b>
                </em>
              </h3>
            </div>
          </div>-->
          <div class="address-list">
            <ul class="orderList">
              <li v-for="n in 1">
                <h3 class="headh3" >
                  <div class="headorder">
                    <span>订单号：</span>
                    <i>{{orderInfo.wemallOrder.orderNo}} </i>
                    <b class="icon-right"></b>
                  </div>
                  <em class="red" v-if="false">等待付款</em>
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
                <div class="orderinfo" v-if="false">
                  <div class="orderaddress">
                    <p>【苏州市】 您的订单已到达京东【苏州陆家分拣中心】</p>
                    <small>2018-03-23 20:26:47</small>
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
                      <p>{{orderItem.itemsDataStr}}</p>
                      <span>{{orderItem.itemNum}} 件</span>
                      <strong>￥{{(orderItem.totalFee/100).toFixed(2)}}</strong>
                    </div>
                  </div>
                </div>
                <div class="shopPrices">
                  <h3>
                    <p>
                      <span>运费（快递）</span>
                      <span>￥{{(orderInfo.wemallOrder.freightPrice/100).toFixed(2)}}</span>
                    </p>
                    <div class="allPrice">
                      <span>订单总价</span>
                      <span>￥{{(orderInfo.wemallOrder.orderPrice/100).toFixed(2)}}</span>
                    </div>
                  </h3>
                </div>
                <div class="paymethod">
                  <h3>
                    <p>
                      <span>支付明细</span>
                    </p>
                    <div class="allPrice">
                      <span>支付方式</span>
                      <span>微信支付</span>
                    </div>
                  </h3>
                </div>
                <div class="appriec">
                  <h4>
                    <p>实付款（含运费）</p>
                    <span>￥{{(orderInfo.wemallOrder.orderPrice/100).toFixed(2)}}</span>
                  </h4>
                </div>
                <div class="appriec" style="display: flex;justify-content: space-between;" v-if="orderInfo.wemallOrder.status == 3 && orderInfo.wemallOrder.applyForReject != '1'">
                  <div>
                    <span>物流信息：</span>
                  </div>
                  <div>{{orderInfo.wemallOrder.freightName}}（运单号：{{orderInfo.wemallOrder.freightNo}}）</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="leaveWord">
            <!-- <h3>
              <span>积分</span>反<i>469积分</i>
            </h3> -->
            <div class="dbconcat">
              <a class="external online-service" href="javascript:void(0)" @click.prevent.stop="call">联系卖家</a>
              <a href="javascript:void(0)" class="phone" @click.prevent.stop="call">拨打电话</a>
            </div>
          </div>
          <div class="postage">
            <h3>
              <p>订单编号：{{orderInfo.wemallOrder.orderNo}}</p>
              <p>创建时间：{{orderInfo.wemallOrder.createDate}}</p>
            </h3>
          </div>
          <div class="btnDb">
            <h3 v-if="orderInfo.wemallOrder.status === 1">
              <a class="external" href="javascript:void(0)" @click.prevent.stop="cancelOrder()">取消订单</a>
              <a class="external pay" href="javascript:void(0)" @click.prevent.stop="payOrder()">付款</a>
            </h3>

            <h3 v-if="orderInfo.wemallOrder.status === 2">
              <a class="external" href="javascript:void(0)" >等待发货</a>
              <a class="external pay" href="javascript:void(0)" @click.prevent.stop="cancelOrderForAlreadyPaid(orderInfo.wemallOrder.orderNo)">确认取消订单</a>
            </h3>
            <h3 v-if="orderInfo.wemallOrder.status === 3">
              <a class="external pay" href="javascript:void(0)" @click.prevent.stop="receiveOrder(orderInfo.wemallOrder.orderNo)">确认收货</a>
            </h3>
          </div>
     <!--     <div class="discount">
            <h3>
              <span>可使用200积分抵扣￥2</span>
              <mt-switch v-model="isusedis"></mt-switch>
            </h3>
          </div>
          <div class="countPrice">
            <h3>
              <span>合计：</span>
              <i>￥256.00</i>
            </h3>
          </div>
          <div class="payBtn">
            <a href="javascript:void(0)">微信支付/微信代付</a>
          </div>-->
        </div>
    </div>
  </transition>
</template>
<script  type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import { Toast, MessageBox } from 'mint-ui'
  import {getOrderDetail, cancelOrder, getPrepareIdForPay, cancelOrderForAlreadyPaid, alreadyReceived, jsonToObj} from 'api/getdata'
  import {ERR_OK, imageDomainName} from 'api/config'
  import {mapGetters} from 'vuex'
  export default {
    props: {
        phone: {
          type: String,
          default: "18516662341"
        }
    },
    data() {
      return {
        orderNo: "",
        orderInfo: {
          orderItemList: [],
          wemallOrder: {},
          wemallOrderAddress: {}
        },
        Goodstitle: '订单详情',
        sss: false,
        hasAddress: false,
        isusedis: true,
        imageDomainName: imageDomainName
      }
    },
    created() {
      this.orderNo = this.$route.params.id;
      this._getOrderDetail()
    },
    computed: {
      ...mapGetters([
        'phoneNumber'
      ])
    },
    methods:{
      //拨打电话联系卖家
      call() {
        if(this.phoneNumber){
          window.location.href = `tel:${this.phoneNumber}`
        } else {
          window.location.href = `tel:${this.phone}`
        }
      
      },
      checkoutfn(value) {
        Toast({
          message: value,
          duration: 1000
        })
      },
      _getOrderDetail() {
        getOrderDetail(this.orderNo).then((res) => {
          if (res.ret === '0') {
            this.orderInfo = res.data;

            //规范规格数据
            for(let index in this.orderInfo.orderItemList) {
              let orderItem = this.orderInfo.orderItemList[index];
              orderItem.itemsDataStr = "";
              let itemsDataObj = jsonToObj(orderItem.itemsData);
              if(itemsDataObj && itemsDataObj.length > 0) {
                for(let i in itemsDataObj) {
                  if(orderItem.itemsDataStr == "") {
                    orderItem.itemsDataStr =  itemsDataObj[i].specName + "：" + itemsDataObj[i].specInfoName;
                  } else {
                    orderItem.itemsDataStr =  + "；" + itemsDataObj[i].specName + "：" + itemsDataObj[i].specInfoName;
                  }
                }
              }
            }
          }
        })
      },
      cancelOrder() {
        //取消订单
        MessageBox({
              title: '',
              message: '是否取消此订单',
              showCancelButton: true,
              closeOnClickModal: false
            }).then(action => {
              if (action === 'confirm') {
                cancelOrder(this.orderNo).then((res) => {
                  if (res.ret === '0') {
                  this.checkoutfn('订单取消成功')
                    this.$router.push({
                      path: `/Membercenter/orderstatus/allorder`
                    })
                  } else {
                      this.checkoutfn(res.retMsg)
                      return
                  }
                })
              } else {
                return
              }
            })
      },
      payOrder() {
        //付款
        let params = {};
        params.paymentType = 0;
        params.orderNo = this.orderNo;
        this.$router.push({
          path: `/orderconfirm/`+this.orderNo
        })
        /* getPrepareIdForPay(params).then((res) => {
          if (res.ret === '0') {
            if(res.data.needPay == "0") {
              MessageBox({
                title: '',
                message: '订单付款成功',
                showCancelButton: false,
                closeOnClickModal: false
              }).then(action => {
                if (action === 'confirm') {
                } else {
                  return
                }
              })  
              this.$router.push({
                path: `/Membercenter/orderstatus/waitsendgood`
              })
            } else {
              console.log("获取预付款id和签名成功", res.data);
            }
          } else {
            MessageBox({
              title: '',
              message: res.retMsg,
              showCancelButton: false,
              closeOnClickModal: false
            }).then(action => {
              if (action === 'confirm') {
              } else {
                return
              }
            }) 
          }
        }) */
      },
      cancelOrderForAlreadyPaid(orderNo) {
        MessageBox({
              title: '',
              message: '是否取消此已付款订单',
              showCancelButton: true,
              closeOnClickModal: false
            }).then(action => {
              if (action === 'confirm') {
                cancelOrderForAlreadyPaid(orderNo).then((res) => {
                  if (res.ret === '0') {
                    this.checkoutfn('取消已付款订单成功')
                    this.$router.push({
                      path: `/Membercenter/orderstatus/allorder`
                    })
                  } else {
                    this.checkoutfn(res.retMsg)
                  }
                })
              } else {
                return
              }
            })

      },
      receiveOrder(orderNo) {
            MessageBox({
              title: '',
              message: '是否确认收货',
              showCancelButton: true,
              closeOnClickModal: false
            }).then(action => {
              if (action === 'confirm') {
                alreadyReceived(orderNo).then((res) => {
                  if (res.ret === '0') {
                    this.checkoutfn('确认收货成功')
                    this.$router.push({
                      path: `/Membercenter/orderstatus/allorder`
                    })
                  } else {
                    this.checkoutfn(res.retMsg)
                  }
                })
              } else {
                return
              }
            })
        
      },
      gotoItemDeatil(itemId) {
        this.$router.push({
          path: `/Goodsdetail/`+itemId
        })
      }
    },
    activated() {
      console.log(123)
    },
    mounted() {
      var that=this
      setTimeout(function () {
        this.sss=true
      }.bind(that),30)
    },
    components: {
      IsatPublictoptitle
    },
    watch: {
      '$route': function () {
        this.orderNo = this.$route.params.id;
        if(this.$route.fullPath.indexOf("orderdetail") != -1) {
          this._getOrderDetail()
        }
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .shoppingcart
    .shoppingcart-content
      padding-bottom: 60px
      position fixed
      top 40px
      bottom 0px
      width 100%
      overflow-y scroll
      z-index 105
      background #f5f4f3
      .stateGoods
        height 97px
        background #ffb33a url("../../common/images/order-pay.png") no-repeat 85% center;
        background-size: auto 75%;
        .tipcontent
          height 100%
          display flex
          flex-direction column
          justify-content space-around
          margin-left 30px
          color white
          p
            font-size 20px
          span
            font-size 12px
      .addrecive
        padding 10px
        background #fff
        color #666666
        font-size 14px
        h3
          height 23px
          line-height 23px
          padding-left 23px
          span
          i
            font-style normal
        p
          line-height 23px
          padding-left 23px
          background url("../../common/images/address.png") no-repeat left center
          background-size 20px
          i
            font-style normal
          b
            margin-left 20px
            color #999999
      .sidai
        background url("../../common/images/order-bg.png")
        height 3px
        background-repeat repeat-x
        background-position bottom
        background-size 34px
      .noaddress
        background #fff
        h3
          display flex
          height 40px
          align-items center
          justify-content space-between
          padding 10px
          .leftss
            display flex
            align-items center
            img
              width 20px
              height 20px
              margin-right 15px
      .shopgoods
        background #fff
        .shophead
          display flex
          align-items center
          height 40px
          padding 0 10px
          img
            width 24px
            height 24px
          span
            font-size 14px
        .goodslist
          background #fafafa
          padding 0 10px
          li
            display flex
            align-items center
            img
              width 75px
              height 75px
              margin-right 10px
              margin-bottom 10px
              margin-top 10px
            .goodintroduce
              display flex
              flex-direction column
              justify-content space-between
              overflow: hidden
              p
                color #333
                font-size 14px
                line-height 17px
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              h3
                display flex
                justify-content space-between
                margin-top 10px
                span
                  no-wrap()
                  color #ef2f2f
                i
                  font-style normal
        .allprice
          h3
            display flex
            justify-content flex-end
            padding 0px 10px
            overflow hidden
            align-items center
            height 30px
            span
            no-wrap()
            i
              font-style normal
              padding-left 30px
            em
              color #ef2f2f
              no-wrap()
              font-style normal
              font-size  17px
      .address-list
        margin-top: 5px;
        .orderList
          li
            background #fff
            margin-bottom 6px
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
              position relative
              z-index 10
              h3
                height 50px
                display flex
                flex-direction column
                justify-content space-around
                padding 5px 0px
                &:after
                  content: "";
                  position: absolute;
                  z-index: 10;
                  background: #fff;
                  border: 1px solid #e1e1e2;
                  -webkit-transform: rotate(45deg);
                  transform: rotate(45deg);
                  top: 94%;
                  right: 6.5%;
                  width: 8px;
                  height: 8px;
                p
                  display flex
                  justify-content space-between
                  color #999999
                  font-size 12px
                .allPrice
                  display flex
                  justify-content space-between
                  font-size 14px
                  color #3d4145
            .paymethod
              padding  0 10px
              border-bottom 1px solid #e5e5e5
              position relative
              background: #fff;
              z-index 11
              h3
                height 50px
                display flex
                flex-direction column
                justify-content space-around
                padding 5px 0px
                p
                  display flex
                  justify-content flex-end
                  color #999999
                  font-size 13px
                .allPrice
                  display flex
                  justify-content space-between
                  font-size 13px
                  color #3d4145
            .appriec
              padding  0 10px
              h4
                height 40px
                display flex
                justify-content flex-end
                align-items center
                padding 5px 0px
                span
                  font-size 15px
                  color #ef2f2f
                p
                  font-size 13px

      .leaveWord
        background #fff
        padding  0 10px
        border-bottom 1px solid #e5e5e5
        h3
          display flex
          align-items center
          font-size 14px
          height 30px
          padding 5px 0px
          border-bottom 1px solid #e5e5e5
          span
            padding:4px 5px 2px 5px;
            border: 1px solid #ef2f2f;
            color: #ef2f2f;
            border-radius: 2px;
            margin-right: 1rem;
            vertical-align: middle;
            font-size: 12px;
          i
            font-style normal
            color #ef2f2f
        .dbconcat
          height 30px
          padding 5px 0px
          display flex
          justify-content space-around
          align-items center
          a
            width 100%
            text-align center
            font-size 14px
            color #4d4d4d
            padding: 5px 0px;
            &.external
              background url("../../common/images/detail-contact.png")
              background-repeat: no-repeat;
              background-position 20% center
              background-size 16px
              border-right: 1px solid #f5f4f3;
            &.phone
              background url("../../common/images/detail-tel.png")
              background-repeat: no-repeat;
              background-position 20% center
              background-size 16px
              border-right: 1px solid #f5f4f3;
      .postage
        background #fff
        padding 10px
        border-bottom 1px solid  #ededed
        margin-top 6px
        h3
          display flex
          align-items flex-start
          justify-content space-between
          flex-direction column
          height 40px
          font-size 14px
          color #9f9f9f
      .btnDb
        padding 10px
        margin-top 6px
        h3
          display flex
          align-items center
          justify-content flex-end
          height 40px
          a
            text-align: center;
            margin-right: 6px;
            border-radius: 3px;
            border: 1px solid #b0b0b0;
            width 80px
            padding 7px 0px
            font-size: 13px
            color: #5e5e5e;
            &.pay
              border-color: #ef2f2f;
              color: #ef2f2f;
      .discount
        background #fff
        border-top 8px solid #f5f4f3;
        padding 0px 10px
        border-bottom 1px solid #ededed
        h3
          display flex
          align-items center
          justify-content space-between
          height 40px
          span
            font-size 14px
      .countPrice
        background #fff
        padding 10px
        h3
          display flex
          justify-content flex-end
          align-items center
          height 20px
          span
            font-size 14px
          i
            color #ef2f2f
            font-style normal
      .payBtn
        width: 90%;
        margin 15px auto 0px auto
        a
          background: #ef2f2f;
          display block
          text-align center
          color #fff
          padding 11px 0
          font-size 18px
          text-decoration none
          border-radius 3px
  .slidex-enter-active,.slidex-leave-active
    transition transform  0.3s
  .slidex-enter
    transform translate3d(100%,0,0)
  .slidex-leave-to
    transform translate3d(100%,0,0)
</style>
