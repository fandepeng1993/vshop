<template>
<transition name="slide">
  <div class="vouchercenter">
    <isat-publictoptitle :isback="true" :person="false" :home="false"  :titles="titlesname"></isat-publictoptitle>
    <div class="content">
      <h3>充值选项</h3>
      <ul class="tabsbtn">
        <li v-for="(item,index) in rechargeList" @click.prevent.stop="tabs(item, index)" :class="index==activeIndex ? 'active' : ''">
          <p>{{item.name}}</p>
          <p class="info">售价{{(item.originalPrice/100).toFixed(2)}}元</p>
        </li>
      </ul>
      <div class="tabscontent" v-show="tabcontent">
        <h3>充值选项描述</h3>
        <p>{{tabcontent}}</p>
      </div>
    </div>
    <div class="publicbtn" @click.prevent.stop="jumpage">
      <a class="footerbox">
        <span>{{btnText}}</span>
      </a>
    </div>
  </div>
</transition>
</template>

<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import {getRechargeList, generateOrderByRecharge} from 'api/getdata'
  import {ERR_OK, imageDomainName} from 'api/config'
  export default {
    name: "voucher-center",
    data() {
      return {
        titlesname: '充值中心',
        rechargeList: [],
        tabcontent: '',
        activeIndex: 0,
        selectRecharge: {},
        btnText: '确认充值'
      }
    },
    created() {
      this._getRechargeList();
    },
    mounted() {},
    methods: {
      _getRechargeList() {
        getRechargeList().then((res) => {
          if (res.ret === '0') {
            this.rechargeList = res.data.list;
            this.tabs(this.rechargeList[0],0);
          }
        })
      },
      tabs(obj, index) {
        this.tabcontent = obj.desc
        this.activeIndex = index
        this.selectRecharge = obj
      },
      jumpage() {
        //确认充值
        generateOrderByRecharge(this.selectRecharge.id).then((res) => {
          if (res.ret === '0') {
            this.$router.push({
              path: '/orderconfirm/'+res.data.orderNo,
              query: {needAddress: this.selectRecharge.needaddress,
                    fromRecharge: "1"}
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
    components: {
      IsatPublictoptitle
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .vouchercenter
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
      .tabsbtn
        display: flex
        flex-wrap wrap
        justify-content flex-start
        li
          width 30%
          margin-left calc(3.3% - 2px)
          margin-bottom 10px
          margin-top 10px
          padding 5px 0px
          color #5ca7d9
          border:1px solid #5ca7d9
          border-radius 4px
          &.active
            background  #5ca7d9
            border-color white
            color white
          p
            text-align center
            &.info
              font-size 14px
      .tabscontent
        margin-top 10px
        p
          margin 10px 0px
          color #7e8c8d
          font-size 14px
          padding-left 20px
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
