<template>
  <div class="publicbtn" @click.prevent.stop="jumpage">
    <a class="footerbox">
      <span>{{btnText}}</span>
    </a>
  </div>
</template>
<script type="text/ecmascript-6">
  import { Toast } from 'mint-ui'
  import {mapMutations, mapGetters, mapActions} from 'vuex'
  import {addUserAddress, updateUserAddress, updateOrderAddress} from 'api/getdata'
  export default {
    props: {
      btnText: {
        type: String,
        default: ''
      },
      linkUrl: {
        type: String,
        default: ''
      },
      contentInfo: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      jumpage() {
        if (this.tempcontentInfo) {
          console.log(this.tempcontentInfo)
          // 做校验
          if (this.checkout_name) {
            this.checkoutfn(this.checkout_name)
            return
          }
          if (this.checkout_concat) {
            this.checkoutfn(this.checkout_concat)
            return
          }
          if (this.checkout_address) {
            this.checkoutfn(this.checkout_address)
            return
          }
          if (this.checkout_addressInfo) {
            this.checkoutfn(this.checkout_addressInfo)
            return
          }
          if (this.linkUrl) {
            let tempId = this.$route.params.id
            if (tempId) {
              updateUserAddress(this.tempcontentInfo).then((res) => {
                if (res.ret === '0') {
                  //编辑修改
                  if (this.address[Number(tempId)].isDefault !== this.tempcontentInfo.isDefault) {
                    this.editDefaultAddress(Number(tempId))
                    this.editAddressIndexInfo({
                      list: this.tempcontentInfo,
                      index: tempId
                    })
                    
                    this.$router.back()
                  } else {
                    this.editAddressIndexInfo({
                      list: this.tempcontentInfo,
                      index: tempId
                    })
                    this.$router.back()
                  }
                } else {
                  this.checkoutfn('提交失败')
                }
              });
            } else {
              //添加
              let tempLen = this.address.length
              if (tempLen <= 0) {
                this.tempcontentInfo.isDefault = 1
              }
              //发起提交地址信息
              addUserAddress(this.tempcontentInfo).then((res) => {
                if (res.ret === '0') {
                  this.tempcontentInfo.id = res.data.id
                  if (tempLen <= 0) {
                    this.set_Address(this.tempcontentInfo)
                  } else {
                    if (this.checkout_defaultaddress) {
                      this.set_Address(this.tempcontentInfo)
                      this.editDefaultAddress(0)
                    } else {
                      this.set_Address(this.tempcontentInfo)
                    }
                  }
                  /* console.log(this.address) */

                  if(this.$route.query.type == 2 && this.$route.query.fromListPage != 1) {
                    //是从订单选择收货地址跳过来的，执行设置订单收货地址
                    let params = {}
                    params.userAddressId = res.data.id
                    params.orderNo = this.$route.query.orderNo
                    updateOrderAddress(params).then((result) => {
                      if (result.ret === '0') {
                        this.$router.back()
                      }
                    });

                  } else {
                    this.$router.push({
                      path: this.linkUrl
                    })
                  }
                } else {
                  this.checkoutfn('提交失败')
                }
              });
            }
          }
        } else {
          if (this.linkUrl) {
            //此外组件保存按钮
            this.$router.push({
              path: `/Membercenter` + this.linkUrl
            })
          }
        }
      },
      checkoutfn(value) {
        Toast({
          message: value,
          duration: 1000
        })
      },
      ...mapMutations({
        set_Address: 'SET_ADDRESS'
      }),
      ...mapActions([
        'editDefaultAddress',
        'editAddressIndexInfo'
      ])
    },
    computed: {
      tempcontentInfo() {
        return this.contentInfo
      },
      checkout_defaultaddress() {
        return this.tempcontentInfo.isDefault
      },
      checkout_name() {
        var tempV = this.tempcontentInfo.receiverName.trim()
        if (tempV) {
          if (tempV.length >= 2 && tempV.length <= 8) {
            return false
          } else {
            return '收货人姓名为2-8个字符'
          }
        } else {
          return '请填写收货人姓名'
        }
      },
      checkout_concat() {
        var tempN =  this.tempcontentInfo.receiverMobile.trim()
        var reg = /^1[345789]\d{9}$/
        if (tempN) {
          if (reg.test(tempN)) {
            return false
          } else {
            return '请填写正确的手机号码'
          }
        } else {
          return '请填写联系电话'
        }
      },
      checkout_address() {
        var tempadd = this.tempcontentInfo.receiverProvince.trim()
        if (tempadd) {
          return false
        } else {
          return '请填写收货地址'
        }
      },
      checkout_addressInfo() {
        var tempaddinfo = this.tempcontentInfo.receiverAddress.trim()
        if (tempaddinfo) {
          if (tempaddinfo.length >= 5) {
            return false
          } else {
            return '地址信息不得少于5个字符'
          }
        } else {
          return '请填写收货地址'
        }
      },
      ...mapGetters([
        'address'
      ])
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .publicbtn
    .footerbox
      height 50px
      display flex
      align-items center
      justify-content center
      background-color #ef2f2f
      &:active
        background-color #26a2ff
      span
        color #fff
        font-size 20px
</style>
