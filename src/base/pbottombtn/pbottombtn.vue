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
          // 做校验
          /* console.log(this.contentInfo, this.checkout_arry) */
          /* for (let z in this.checkout_arry) {
            /!*this.checkoutfn(this.checkout_arry[z].trim(), z)*!/
          } */
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
              if (this.address[Number(tempId)].defaultAddress !== this.tempcontentInfo.defaultAddress) {
                this.editDefaultAddress(Number(tempId))
                this.editAddressIndexInfo({
                  list: this.tempcontentInfo,
                  index: tempId
                })
                this.$router.push({
                  path: `/Membercenter` + this.linkUrl
                })
              } else {
                this.editAddressIndexInfo({
                  list: this.tempcontentInfo,
                  index: tempId
                })
                this.$router.push({
                  path: `/Membercenter` + this.linkUrl
                })
              }
            } else {
              let tempLen = this.address.length
              if (tempLen <= 0) {
                this.tempcontentInfo.defaultAddress = true
                this.set_Address(this.tempcontentInfo)
              } else {
                if (this.checkout_defaultaddress) {
                  this.set_Address(this.tempcontentInfo)
                  this.editDefaultAddress(tempLen)
                } else {
                  this.set_Address(this.tempcontentInfo)
                }
              }
              /* console.log(this.address) */
              this.$router.push({
                path: `/Membercenter` + this.linkUrl
              })
            }
          }
        } else {
          if (this.linkUrl) {
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
      checkout_arry() {
        let temp_arry = []
        for (let i in this.tempcontentInfo.defaultInfos) {
          temp_arry.push(this.tempcontentInfo.defaultInfos[i].value.trim())
        }
        return temp_arry
      },
      checkout_defaultaddress() {
        return this.tempcontentInfo.defaultAddress
      },
      checkout_name() {
        var tempV = this.checkout_arry[0]
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
        var tempN = this.checkout_arry[1]
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
        var tempadd = this.checkout_arry[2]
        if (tempadd) {
          return false
        } else {
          return '请填写收货地址'
        }
      },
      checkout_addressInfo() {
        var tempaddinfo = this.checkout_arry[3]
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
