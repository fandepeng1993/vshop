<template>
  <transition name="slide">
    <div class="comment">
      <isat-publictoptitle :isback="true" :person="false" :home="false"  :titles="titlesname"></isat-publictoptitle>
      <div class="content">
        <div class="goodsInfo">
          <div class="goodsImg">
            <img :src="imageDomainName+orderItemInfo.photo" width="100" height="100" alt="" >
          </div>
          <p class="goodsName">
            {{orderItemInfo.title}}
          </p>
        </div>
        <div class="goodscomment">
          <isat-iconstar @ongetstar="getstar"></isat-iconstar>
        </div>
        <div class="commentText">
          <textarea name="" v-model="textval" maxlength="120" rows="8" placeholder="对该商品的评价，最多可输入120个字"></textarea>
          <p v-show="canInByte > 0 ? true : false">还可以输入<span style="color: #5ca7d9">{{canInByte}}</span>个字</p>
          <p v-show="canInByte <= 0 ? true : false"><i style="color: red">*</i> 已经超出<span style="color: red">{{Math.abs(canInByte)}}</span> 个字</p>
        </div>
      </div>
      <div class="publicbtn" @click.prevent.stop="comment">
        <a class="footerbox">
          <span>{{btnText}}</span>
        </a>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {Toast, MessageBox} from 'mint-ui'
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import IsatIconstar from 'base/iconstar/iconstar'
  import {getOrderItemDetail, commentItem} from 'api/getdata'
  import {ERR_OK, imageDomainName} from 'api/config'
  export default {
    name: "voucher-center",
    data() {
      return {
        id: "", //订单商品id
        titlesname: '评价',
        orderItemInfo: {},
        btnText: '提交评价',
        imageDomainName: imageDomainName,
        buyerScore: "",
        textval: ''
      }
    },
    created() {
      this._getOrderItemDetail();
    },
    mounted() {},
    methods: {
      _getOrderItemDetail() {
        this.id = this.$route.query.id;
        getOrderItemDetail(this.id).then((res) => {
          if (res.ret === '0') {
            //this._getOrderList();
            this.orderItemInfo = res.data.orderItemInfo;
          } else {
            this.checkoutfn(res.retMsg);
          }
        })
      },
      comment() {
        let params = {};
        params.id = this.id;
        params.buyerScore = this.buyerScore;//评分
        params.buyerMessage = this.textval;//买家评论

        if(params.buyerScore == "") {
          this.checkoutfn("请填写评分");
          return;
        }
        if(params.buyerMessage == "") {
          switch(params.buyerScore) {
          case 1:
            params.buyerMessage = "差";
            break;
          case 2:
            params.buyerMessage = "差";
            break;
          case 3:
            params.buyerMessage = "一般";
            break;
          case 4:
            params.buyerMessage = "满意";
            break;
          case 5:
            params.buyerMessage = "非常满意";
            break;
          }
        }

        commentItem(params).then((res) => {
          if (res.ret === '0') {
            this.checkoutfn("确认评价成功");
            this.$router.push({
              path: `/Membercenter/orderstatus/waitevaluated`
            })
          } else {
            this.checkoutfn(res.retMsg);
          }
        })
      },
      getstar(val) {
        this.buyerScore = val;
      },
      checkoutfn(value) {
        Toast({
          message: value,
          duration: 1000
        })
      }
    },
    computed: {
      canInByte() {
        return 120 - this.textval.length
      }
    },
    components: {
      IsatPublictoptitle,
      IsatIconstar
    },
    watch: {
      '$route': function () {
        if(this.$route.fullPath.indexOf("comment") != -1 || this.$route.fullPath.indexOf("comment") != -1) {
          this._getOrderItemDetail();
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .comment
    position fixed
    top 0px
    bottom 0px
    width 100%
    height 100%
    background-color #f5f4f3
    overflow: hidden
    .content
      height: calc(100% - 110px)
      overflow-y scroll
      padding 10px
      .goodsInfo
        background #fff
        padding 10px 0px
        .goodsImg
          margin 0 auto 10px auto
          width 100px
          height 100px
          border-radius 50%
          overflow hidden
        .goodsName
          font-size 14px
          text-align center
      .goodscomment
        background #fff
        padding 10px 0px
        font-size 14px
        margin-top 10px
      .commentText
        font-size 14px
        margin-top 10px
        textarea
          width 100%
          outline none
          border none
          resize none
          box-sizing border-box
          font-family '微软雅黑'
          line-height 22px
          padding 5px 8px
        p
          text-align right
    .publicbtn
      .footerbox
        height 50px
        display flex
        align-items center
        justify-content center
        background-color #5ca7d9
        &:active
          background-color #ef2f2f
        span
          color #fff
          font-size 20px
  .slide-enter-active,.slide-leave-active
    transition transform  0.3s
  .slide-enter
    transform translate3d(100%,0,0)
  .slide-leave-to
    transform translate3d(100%,0,0)
</style>
