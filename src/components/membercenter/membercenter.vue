<template>
  <div class="membercenter">
      <scroll class="membercenyerscroll" ref="membercenyerscroll">
        <div class="scroll-content">
          <div class="scroll-header">
            <div class="content-header">
              <ul>
                <li class="membercard">
                  <div>
                    <img src="../../common/images/memberimage/pc-t1.svg" alt="">
                  </div>
                  <p>暂无会员卡</p>
                </li>
                <li class="memberperson">
                  <div>
                    <img :src="userInfo.headImgUrl" alt="">
                  </div>
                </li>
                <li class="memberintegral">
                  <div>
                    <img src="../../common/images/memberimage/pc-t2.svg" alt="">
                  </div>
                  <p>{{userInfo.user.curScoreNum}}积分</p>
                </li>
              </ul>
            </div>
            <div class="content-center">
              <p class="name" style="padding-bottom:30px">{{userInfo.nickName}}</p>
              <!-- <p class="accountnumber">账号：<span>tianfeng</span></p> -->
            </div>
            <div class="content-foot" v-show="false">
              <div class="qiandao" >
                <a>签到中心</a>
              </div>
              <div>
                <a>+关注</a>
              </div>
            </div>
          </div>
          <div class="scroll-list">
            <ul>
              <li v-for="(item, index) in allorder" @click.prevent.stop="jumppage(item.routeid)">
                <img :src="require('../../common/images/memberimage/pc'+ (index+1) +'.png')" >
                <p>{{item.text}}</p>
              </li>
             <!-- <li>
                <img src="../../common/images/memberimage/pc2.png" alt="">
                <p>代发货</p>
              </li>
              <li>
                <img src="../../common/images/memberimage/pc3.png" alt="">
                <p>代收货</p>
              </li>
              <li>
                <img src="../../common/images/memberimage/pc4.png" alt="">
                <p>代评价</p>
              </li>
              <li>
                <img src="../../common/images/memberimage/pc5.png" alt="">
                <p>全部</p>
              </li>-->
            </ul>
          </div>
          <div class="scroll-footer">
            <ul>
              <li v-for="(item, index) in allImglist" @click.prevent.stop="linkpage(item)">
                <img  @load="lastLoad(index)" :src="require('../../common/images/memberimage/' + item.src)" >
                <p>{{allImglist[index].pname}}</p>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </scroll>
      <router-view :titlesname="checkedname"></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import {imageDomainName} from 'api/config'
  import {getCurrentUser, getUserAddressList} from 'api/getdata'
  import {mapGetters,mapMutations} from 'vuex'
  export default {
    data() {
      return {
        allImglist: [
          /* {pname: '普通订单', src: '1dingdan.svg', link: '/Membercenter/orderstatus/allorder'},
          {pname: '自提订单', src: '2ziti.svg', link: '/Membercenter/orderstatus/allorder', ordername: 'sleflift'},
          {pname: '积分订单', src: 'jifen.png', link: '/Membercenter/orderstatus/allorder', ordername: 'integration'},
          {pname: '奖励金', src: 'bonus.svg', link: '/Membercenter/bounty'},
          {pname: '会员卡', src: 'card.svg', link: '/Membercenter/membershipcard'}, */
          {pname: '积分商城', src: 'jifenshangc.svg', link: '/Membercenter/integralmall/1'},
          /*{pname: '优惠券', src: '7juan.svg', link: '/Membercenter/coupons/1'},*/
          {pname: '满减送', src: '4kanjia.svg', link: '/Membercenter/mygroup/2'},
          {pname: '限时打折', src: 'pintuan.svg', link: '/Membercenter/mygroup/3'},
          {pname: '积分明细', src: 'score-icon.svg', link: '/Membercenter/integrationinfo/1'},
          {pname: '购物车', src: '3gouwu.svg', link: '/Shoppingcart'},
          {pname: '个人设置', src: '8shezhi.svg', link: '/Membercenter/personalsetting'},
          {pname: '收货地址', src: '6map.svg', link: '/Membercenter/receiveraddress', link2: '/Membercenter/addreceiveradd'},
          {pname: '退款/售后', src: '5tuikuan.svg', link: '/Membercenter/afterSale/1'}
        ],
        allorder: [
          {text: '待付款', routeid: 'obligation'},
          {text: '待发货', routeid: 'waitsendgood'},
          {text: '待收货', routeid: 'waitreceivgood'},
          {text: '待评价', routeid: 'waitevaluated'},
          {text: '全部', routeid: 'allorder'}
        ],
        userInfo: {
          user: {}
        },
        checkedname: ''
      }
    },
    created() {
      this._getCurrentUser()
      this._getUserAddressList()
    },
    computed: {
      allImageSrc() {
        let temparray = []
        for (let i in this.allImglist) {
          temparray.push({src: require('../../common/images/memberimage/' + this.allImglist[i])})
        }
        return temparray
      },
      ...mapGetters([
        'address'
      ])
    },
    methods: {
      //取数据，并放入购物车数组中。
      _getCurrentUser() {
        getCurrentUser().then((res) => {
          if (res.ret === '0') {
            this.userInfo = res.data.userInfo
          } else {
            //跳转到登录界面

          }
        })
      },
      _getUserAddressList() {

        getUserAddressList().then((res) => {
          if (res.ret === '0') {
            this.setalladdress(res.data.list)
          }
          console.log(this.address)
        })
      },
      lastLoad(index) {
        if (index >= this.allorder.length - 1) {
          this.$refs.membercenyerscroll.refresh()
        }
      },
      jumppage(id) {
        this.checkedname = '普通订单'
        this.$router.push({
          path: `/Membercenter/orderstatus/${id}`
        })
      },
      linkpage(param) {
        this.checkedname = param.pname
        /* console.log(param.ordername) */


        if (param.pname === '收货地址') {
          if (this.address.length <= 0) {
            this.$router.push({
              path: param.link2,
              query:{
                type:1
              }
            })
          } else {
            this.$router.push({
              path: param.link,
              query:{
                type:1
              }
            })
          }
        } else {
          this.$router.push({
            path: param.link,
            query: {
              ordername: param.ordername
            }
          })
        }
      },
      ...mapMutations({
      setalladdress:'SET_ALLADDRESS'
      })
    },
    components: {
      Scroll
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

  .membercenter
    position: fixed
    width: 100%
    height: calc( 100% - 55px)
    background-color:#f5f4f3
    overflow: hidden
    z-index 2
    .membercenyerscroll
      height 100%
      overflow hidden
      .scroll-content
        .scroll-header
          background-image url("../../common/images/memberimage/pc-tit.jpg")
          background-size: cover
          background-repeat: no-repeat
          color: #fff
          .content-header
            ul
              display flex
              justify-content space-around
              align-items flex-end
              height 116px
              li
                text-align center
                font-size 13px
                div
                  img
                    width 48px
                &.memberperson
                  align-self center
                  img
                    width 84px
          .content-center
            text-align center
            margin 10px 0px
            .accountnumber
              font-size 13px
          .content-foot
            padding-bottom 20px
            display flex
            justify-content center
            div
              display flex
              background: #fd7d56
              border: 1px solid #feb7a2
              padding 5px 14px
              align-items center
              a
                color white
                font-size 14px
              &.qiandao
                margin-right 10px
      .scroll-list
        ul
          display flex
          justify-content space-around
          background #fff
          li
            padding 10px 0px
            text-align center
            color #5d5d5d
            flex 1
            img
              width 30%
            p
              font-size 13px
              margin-top 5px
      .scroll-footer
        margin-top 10px
        background-color  #fff
        ul
          display flex
          flex-wrap wrap
          li
            width 25%
            text-align center
            border-bottom 1px solid #f6f6f6
            border-left 1px solid #f6f6f6
            box-sizing border-box
            padding-top 9%
            padding-bottom  9%
            &:nth-child(4n+1)
              border-left none
            img
              width 30%
            p
              font-size 12px
              margin-top 8px

</style>
