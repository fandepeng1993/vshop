<template>
    <div class="outWrap">
      <div class="bottomwrap">
        <div class="bottomImg">
          <div class="imgwraper">
            <img :src="imageDomainName+imgurl" >
          </div>
          <div class="imgInfo">
            <span>{{goodsEntityObj.currentPrice/100 | currency('￥')}}</span>
            <p>库存<i>{{goodsEntityObj.storage}}</i>件</p>
          </div>
          <i class="closeICon" @click.prevent.stop="changeShower"></i>
        </div>
        <div class="selectq">
          <div v-if="specInfo.length > 0">
            <h4>选择{{specInfo[0].specName}}</h4>
            <ul>
              <li @click.prevent.stop="chooseQuality(0,index)" v-for="(item,index) in specInfo" :class="[index==chooseNum[0] ? 'actived': '']" >
                <span>{{item.specInfoName}}</span>
              </li>
            </ul>
          </div>
          <!-- <div>
            <h4>选择价格1</h4>
            <ul>
              <li @click.prevent.stop="chooseQuality(1,index)" v-for="(item,index) in specInfo" :class="[index==chooseNum[1] ? 'actived': '']" >
                <span>{{item.specInfoName}}</span>
              </li>
            </ul>
          </div> -->
        </div>
        <div class="bottomNumber">
          <div>
            <h4>购买数量</h4>
          </div>
          <!--<div class="btngroup">
            <button @click.prevent.stop="decrease" :disabled="notdecre">-</button>
            <input type="number" name="number" v-model="countNum" maxlength="2" readonly>
            <button @click.prevent.stop="increase" :disabled="notadd">+</button>
          </div>-->
          <isat-numberoption
            ref="numberoption"
            @increase="increase"
            @decrease="decrease"
            :maxNumber="maxNumber"
            :minNumber="minNumber"
            :countNum="countNum"></isat-numberoption>
        </div>
      </div>
      <div class="bottomqr" @click.prevent.stop="sss">
        <span>确认</span>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
import IsatNumberoption from 'base/numberoption/numberoption'
import { Toast, MessageBox } from 'mint-ui'
import {imageDomainName} from 'api/config'
import {addShopCarInfo, generateOrderByItem} from 'api/getdata'
const digitsRE = /(\d{3})(?=\d)/g
export default {
  props: {
    imgurl: {
      type: String,
      default: '../../common/images/default.png'
    },
    goodsEntity: {
      type: Object,
      default: {}
    },
    buyerType: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      countNum: 1,
      maxNumber: 99,
      imageDomainName: imageDomainName,
      minNumber: 1,
      specInfo: [],
      chooseNum: ['0', '0']
    }
  },
  activated() {
  },
  created() {
    /* if(this.goodsEntityObj.specInfoStr) {
      console.log(JSON.parse(this.goodsEntityObj.specInfoStr))
      this.specInfo = JSON.parse(this.goodsEntityObj.specInfoStr);
    } */
  },
  computed: {
    goodsEntityObj: function () {
      let obj = {};
      for(let i in this.goodsEntity) {
        obj[i] = this.goodsEntity[i]
      }
      return obj;
    }
  },
  methods: {
    changeShower() {
      this.$emit('closeBotBox', false)
    },
    decrease(countNum) {
      this.countNum = countNum - 1
    },
    increase(countNum) {
      this.countNum = countNum + 1
    },
    sss() {
      console.log("buyerType=" + this.buyerType, "itemId="+this.goodsEntityObj.id, "countNum=" + this.countNum)
      let params = {}
      params.itemId=this.goodsEntityObj.id
      params.itemNum=this.countNum
      params.itemSpecIds = this.goodsEntityObj.itemSpecIds
      if(this.buyerType == 1) {
        //加入购物车
        addShopCarInfo(params).then((res) => {
          if (res.ret === '0') {
            /* console.log(res.retMsg)
            alert(res.retMsg) */
            MessageBox({
              title: '',
              message: res.retMsg,
              showCancelButton: false,
              closeOnClickModal: false
            }).then(action => {
              if (action === 'confirm') {
                this.changeShower()
              } else {
                return
              }
            })
          }
        })
      } else {
        //立即购买
        generateOrderByItem(params).then((res) => {
          if (res.ret === '0') {
            this.$router.push({
              path: '/orderconfirm/'+res.data.orderNo
            })
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
        })
      }
    },
    chooseQuality(dIndex, index) {
      /*console.log(dIndex, index)*/
      this.chooseNum.splice(dIndex, 1, index)
      if(this.specInfo && this.specInfo[index]) {
        this.goodsEntityObj.currentPrice = this.specInfo[index].price;
        this.goodsEntityObj.storage = this.specInfo[index].storage;
        this.goodsEntityObj.itemSpecIds = this.specInfo[index].id;
      }
    }
  },
  components: {
    IsatNumberoption
  },
  watch: {
    goodsEntityObj: function() {
      if(this.goodsEntityObj.specInfoStr) {
        this.specInfo = JSON.parse(this.goodsEntityObj.specInfoStr);
        this.chooseQuality(0,0)
      }
    },
    '$route': function () {
      if(this.goodsEntityObj.specInfoStr) {
        this.specInfo = JSON.parse(this.goodsEntityObj.specInfoStr);
      }
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .outWrap
    background-color white
    width 100%
    height 155px
    z-index 106
    bottom 0px
  .bottomwrap
    height 255px
    padding 10px
    box-sizing border-box
    .bottomImg
      position relative
      height 50px
      display flex
      border-bottom 1px solid #f6f6f6
      .imgwraper
        width 30%
        overflow hidden
        padding 4px
        background-color #fff
        border-radius: 3%
        position absolute
        bottom: 0%
        img
          width 100%
      .imgInfo
        flex 1
        margin-left 34%
        span
          color #ef2f2f
          no-wrap()
        p
          no-wrap()
          margin-top 10px
      .closeICon
        width 22px
        height 22px
        background-image url("../../common/images/close.jpg")
        position absolute
        right 0px
        background-repeat no-repeat
        background-size 100%
        background-position center
        extend-click()
    .selectq
      height 140px
      overflow-y scroll
      ul
        display flex
        flex-wrap wrap
        box-sizing border-box
        justify-content space-between
        align-content space-around
        height 84px
        overflow-y: scroll
        li
          width 22%
          display flex
          align-items center
          align-self center
          justify-content center
          background rgba(0,0,0,0.2)
          border-radius 4px
          span
            padding 7px 0px
            font-size 12px
          &.actived
            background skyblue
    .bottomNumber
      height 55px
      display flex
      justify-content space-between
      align-items center
  .bottomqr
    height 45px
    background-color #ef2f2f
    color white
    display flex
    justify-content center
    align-items center
    font-size 18px
</style>
