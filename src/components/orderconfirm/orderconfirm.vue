<template>
  <div class="shoppingcart">
    <isat-publictoptitle  :titles="Goodstitle"></isat-publictoptitle>
    <transition name="slidex">
       <div class="shoppingcart-content" v-show="sss">
          <p style="background: white;
                    font-size: 16px;
                    color: #7a7a7a;
                    padding-left: 5px;
                    padding-top: 10px;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 10px;" v-if="fromRecharge=='1' && needAddress != '0'">
              充值商品收货地址：
          </p>
         <div class="addrecive" v-if="isUseDefault && needAddress != '0'">
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
             <b @click.prevent.stop="changeAddress">更换地址 ></b>
           </p>
         </div>
         <div class="noaddress" v-show="needAddress != '0'" v-else>
          <h3 @click.prevent.stop="changeAddress">
            <div class="leftss">
              <img src="../../common/images/add.svg" alt="">
              <span>请填写收货地址</span>
            </div>
            <i class="icon-right"></i>
          </h3>
         </div>
         <div class="sidai">
         </div>
         <div class="shopgoods">
           <div class="shophead">            
             <img src="../../common/images/shop.jpg" alt="">
             <span>加沃微商城</span>
           </div>
           <ul class="goodslist">
             <li v-for="orderItem in orderInfo.orderItemList" @click.prevent.stop="gotoItemDeatil(orderItem.itemId)">
               <img :src="imageDomainName+orderItem.photo" alt="">
               <div class="goodintroduce">
                 <p>{{orderItem.title}}</p>
                 <p>{{orderItem.itemsDataStr}}</p>
                 <h3><span>￥{{((orderItem.totalFee/orderItem.itemNum)/100).toFixed(2)}}</span><i>x{{orderItem.itemNum}}</i></h3>
               </div>
             </li>
           </ul>
           <div class="allprice" v-if="fromRecharge!='1'">
             <h3>
               <span>共{{orderInfo.orderItemList.length}}件商品</span>
               <i>小计：</i>
               <em>
                 <b>￥{{((orderInfo.wemallOrder.originalOrderPrice-orderInfo.wemallOrder.freightPrice)/100).toFixed(2)}}</b>
               </em>
             </h3>
           </div>
           <div class="allprice" v-if="fromRecharge=='1'">
             <h3>
               <span>本次充值{{((orderInfo.wemallOrder.originalOrderPrice-orderInfo.wemallOrder.freightPrice)/100).toFixed(2)}}元</span>
             </h3>
           </div>
         </div>
         <div class="leaveWord" v-if="fromRecharge!='1'">
           <h3 class='acChos'>
             <span>活动选择：</span>
             <!-- <select>
              <option value="volvo">Volvddddddddddddddddddddo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select> -->
            <select name="activitySelect" id="" v-model="activity" maxlength="100" @change="chooseActivity()">
                <option value="" disabled>请选择活动</option>
                <option v-for="activityInfo in orderInfo.activityList" :value="activityInfo.idStr">{{activityInfo.activity.name}}</option>
             </select>
           </h3>
         </div>
         <div class="leaveWord" v-if="fromRecharge!='1'"> 
           <h3>
             <span>买家留言：</span>
             <textarea name="" id="" v-model="buyerMessage" maxlength="100" rows="1" placeholder="选填，可填写您和卖家达成一致的要求"></textarea>
           </h3>
         </div>
         <div class="postage" v-if="fromRecharge!='1'">
            <h3>
              <span>配送方式</span>
              <p>
                快递费用：
                <span v-if="orderInfo.wemallOrder.freightPrice == 0">包邮</span>
                <span v-if="orderInfo.wemallOrder.freightPrice != 0">￥{{(orderInfo.wemallOrder.freightPrice/100).toFixed(2)}}</span>
              </p>
            </h3>
         </div>
         <!-- <div class="discount">
            <h3>
              <span>可使用200积分抵扣￥2</span>
              <mt-switch v-model="isUseDefault"></mt-switch>
            </h3>
         </div> -->
         <div class="postage" v-if="fromRecharge!='1'">
            <h3>
              <span>最多可使用{{orderInfo.userCurScoreNum > orderInfo.canUseTotalScore ? orderInfo.canUseTotalScore : orderInfo.userCurScoreNum}}积分抵扣</span>
              <span>积分与人民币兑换比例({{orderInfo.scoreRate}}：1)</span>
            </h3>
         </div>
         <div class="leaveWord" v-if="fromRecharge!='1'">
            <h3>
              <span>使用积分数</span>
              <textarea name="" id="" @blur="useScore()" v-model="useScoreNum" maxlength="100" rows="1" placeholder="选填，可填写您使用的积分数"></textarea>
            </h3>
         </div>

         <div class="postage" v-if="fromRecharge!='1'">
            <h3>
              <span>用户所剩余额：{{(orderInfo.userCurBountyNum/100).toFixed(2)}}元</span>
            </h3>
         </div>
         <div class="leaveWord" v-if="fromRecharge!='1'">
            <h3>
              <span>使用余额数（单位/元）</span>
              <textarea name="" id="" @blur="useBounty()" v-model="useBountyNum" maxlength="100" rows="1" placeholder="选填，可填写您使用的余额数"></textarea>
            </h3>
         </div>

         <div class="countPrice">
          <h3>
            <span>合计：</span>
            <i>￥{{lastPrice}}</i>
          </h3>
         </div>
         <div class="payBtn">
           <a href="javascript:void(0)" @click.prevent.stop="payOrder()">微信支付/微信代付</a>
         </div>
       </div>
    </transition>
    <transition name="slidex">
      <div v-show="chooseadd" class="chooseadd">
        <div class="headtop">
          <h3>
            <a href="javascript:void(0);" @click.prevent.stop="chooseadd=false">取消</a>
          </h3>
        </div>
        <div class="addressList">
          <ul>
            <li v-for="n in 10">
              <h3>
                <strong>请问</strong>
                <span>13144556677</span>
              </h3>
              <p><i>收货地址：</i><span>北京东城区呃呃呃呃呃呃呃</span></p>
            </li>
          </ul>
          <h3 class="addnewaddress"><span @click.prevent.stop="addnewADD">新增收获地址</span></h3>
        </div>
      </div>
    </transition>
  </div>

</template>
<script  type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import {getOrderDetail, getPrepareIdForPay, getPrepareIdForRechargePay, jsonToObj, objToJson, wxPay} from 'api/getdata'
  import {ERR_OK, imageDomainName} from 'api/config'
  import { Toast, MessageBox } from 'mint-ui'
  export default {
    data() {
      return {
        orderNo: "",
        orderInfo: {
          orderItemList: [],
          wemallOrder: {},
          wemallOrderAddress: {}
        },
        Goodstitle: '提交订单',
        sss: false,
        hasAddress: false,
        isUseDefault: false,
        chooseadd: false,
        imageDomainName: imageDomainName,
        buyerMessage: "",
        activity: "",
        lastPrice: "",
        useScoreNum: "",
        useBountyNum: "",
        fromRecharge: "",
        needAddress: ""
      }
    },
    created() {
      this.orderNo = this.$route.params.id;
      this._getOrderDetail()
    },
    methods:{
      _getOrderDetail() {
        this.fromRecharge = this.$route.query.fromRecharge
        this.needAddress = this.$route.query.needAddress
        getOrderDetail(this.orderNo).then((res) => {
          if (res.ret === '0') {
            this.orderInfo = res.data;
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

            //判断收货地址
            if(this.orderInfo.wemallOrderAddress) {
              this.isUseDefault = true;
            }

            //判断收货地址
            for(let index in this.orderInfo.activityList) {
              let activityInfo = this.orderInfo.activityList[index];
              activityInfo.idStr = activityInfo.activityId + "_" + activityInfo.activityType;
            }
            this.lastPrice = (this.orderInfo.wemallOrder.originalOrderPrice/100).toFixed(2);
          }
        })
      },
      changeAddress() {
        //this.chooseadd=true
        /*this.$router.push({
          path:'orderconfirm/chooseaddress'
        })*/

        if (this.isUseDefault) {
            this.$router.push({
              path: '/Membercenter/receiveraddress',
              query:{
                type:2,
                orderNo:this.orderNo
              }
            })
          } else {
            this.$router.push({
              path: '/Membercenter/addreceiveradd',
              query:{
                type:2,
                orderNo:this.orderNo
              }
            })
          }
      },
      addnewADD() {
        console.log(123)
      },
      payOrder() {
        //付款
        let params = {};
        params.paymentType = 0;
        params.orderNo = this.orderNo;
        params.buyerMessage = this.buyerMessage;

        if(this.fromRecharge=='1') {
          params.needAddress = this.needAddress
          getPrepareIdForRechargePay(params).then((res) => {
            if (res.ret === '0') {
              if(res.data.needPay == "0") {
                this.checkoutfn("订单付款成功");
                this.$router.push({
                  path: `/Membercenter/orderstatus/waitsendgood`
                })
              } else {
                console.log("获取预付款id和签名成功", res.data);
                wxPay(res.data.payRequestParams);
              }
            } else {
              this.checkoutfn(res.retMsg);
            }
          })
        } else {
          if(this.activity != "") {
            params.activityId=this.activity.split("_")[0];
            params.activityType=this.activity.split("_")[1];
          }
          if(this.useScoreNum != 0 && this.useScoreNum != "") {
            params.scoreUsageNum=this.useScoreNum;
          }
          if(this.useBountyNum != 0 && this.useBountyNum != "") {
            params.bountyUsageNum=this.useBountyNum;
          }

          getPrepareIdForPay(params).then((res) => {
            if (res.ret === '0') {
              if(res.data.needPay == "0") {
                this.checkoutfn("订单付款成功");
                this.$router.push({
                  path: `/Membercenter/orderstatus/waitsendgood`
                })
              } else {
                console.log("获取预付款id和签名成功", res.data);
                wxPay(res.data.payRequestParams);
              }
            } else {
              this.checkoutfn(res.retMsg);
            }
          })
        }
      },
      gotoItemDeatil(itemId) {
        this.$router.push({
          path: `/Goodsdetail/`+itemId
        })
      },
      chooseActivity() {
        let useActivity = false;
        for(let index in this.orderInfo.activityList) {
          let activityInfo = this.orderInfo.activityList[index];
          let idStr = activityInfo.activityId + "_" + activityInfo.activityType;
          if(this.activity == idStr) {
            this.lastPrice = activityInfo.joinPrice/100;
            //积分减价
            if(this.useScoreNum != 0 && this.useScoreNum != "") {
              this.lastPrice = this.lastPrice - this.useScoreNum/this.orderInfo.scoreRate;
              if(this.lastPrice < 0) this.lastPrice = 0;
            }
            //余额减价
            if(this.useBountyNum != 0 && this.useBountyNum != "") {
              this.lastPrice = this.lastPrice - this.useBountyNum;
              if(this.lastPrice < 0) this.lastPrice = 0;
            }
            this.lastPrice = this.lastPrice.toFixed(2);

            useActivity = true;
          }
        }

        if(!useActivity) {
          this.lastPrice = this.orderInfo.wemallOrder.originalOrderPrice/100;
          //积分减价
          if(this.useScoreNum != 0 && this.useScoreNum != "") {
            this.lastPrice = this.lastPrice - this.useScoreNum/this.orderInfo.scoreRate;
            if(this.lastPrice < 0) this.lastPrice = 0;
          }
          //余额减价
          if(this.useBountyNum != 0 && this.useBountyNum != "") {
            this.lastPrice = this.lastPrice - this.useBountyNum;
            if(this.lastPrice < 0) this.lastPrice = 0;
          }
          this.lastPrice = this.lastPrice.toFixed(2);
        }
      },
      useScore() {
        if(isNaN(this.useScoreNum)) {
          this.checkoutfn("使用积分数必须为数字！");
          this.useScoreNum = 0;
          return;
        }

        let maxScore = this.orderInfo.userCurScoreNum > this.orderInfo.canUseTotalScore ? this.orderInfo.canUseTotalScore : this.orderInfo.userCurScoreNum;
        if(maxScore < this.useScoreNum) {
          this.checkoutfn("使用积分数不可超过最大使用积分值！");
          this.useScoreNum = 0;
          return;
        }

        this.chooseActivity();
      },
      useBounty() {
        if(isNaN(this.useBountyNum)) {
          this.checkoutfn("使用余额数必须为数字！");
          this.useBountyNum = 0;
          return;
        }

        let maxBounty = this.orderInfo.userCurBountyNum/100;
        if(maxBounty < this.useBountyNum) {
          this.checkoutfn("使用余额数不可超过用户剩余余额数！");
          this.useBountyNum = 0;
          return;
        }

        this.chooseActivity();
      },
      checkoutfn(value) {
        Toast({
          message: value,
          duration: 1000
        })
      }
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
        if(this.$route.fullPath.indexOf("orderconfirm") != -1) {
          this.orderNo = this.$route.params.id;
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
      .leaveWord
        background #fff
        border-top 8px solid  #f5f4f3
        padding 10px
        border-bottom 1px solid  #ededed
        h3
          height 20px
          display flex
          align-items center
          span
            font-size 14px
            color #4d4d4d
          &.acChos
            display: flex
            height: 40px
            span
              flex:1
            select
              height:30px
              flex:3
          textarea
            flex 1
            outline none
            resize none
            border none
            padding 0
            font-size 13px
            font-family inherit
            padding-left 5px
            color #4d4d4d
      .postage
        background #fff
        padding 10px
        border-bottom 1px solid  #ededed
        h3
          display flex
          align-items center
          justify-content space-between
          height 20px
          span
            font-size 14px
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

    .chooseadd
      position fixed
      width 100%
      height 100%
      top 0px
      bottom 0px
      background #fff
      z-index 110
      .headtop
        h3
          height 40px
          display flex
          align-items center
          justify-content flex-end
          a
            color #ff9e00
            padding 5px 8px

      .addressList
        height calc(100% - 40px)
        overflow-x: hidden
        overflow-y scroll
        .addnewaddress
          padding-bottom 80px
          color #ff9e00
          font-size 18px
        ul
          padding 30px 0px
          li
            padding 10px 10px
            border-bottom:1px solid #bfbfbf;
            h3
              display flex
              justify-content space-between
              align-items center
              height 30px
              margin-bottom 5px
              strong
                font-size 15px
              span
                font-size 14px
            p
              margin 10px 0
              font-size 13px
              line-height 15px
              i
                font-style normal
              span
                font-size 13px

  .slidex-enter-active,.slidex-leave-active
    transition transform  0.3s
  .slidex-enter
    transform translate3d(100%,0,0)
  .slidex-leave-to
    transform translate3d(100%,0,0)
</style>
