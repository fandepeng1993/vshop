<template>
  <transition name="slide">
    <div class="membershipcard" >
      <isat-publictoptitle :isback="true" :titles="titlesname"></isat-publictoptitle>
      <div @click="showAddressProup=false" class="wraperpage">
        <ul class="wraperm">
          <li>
            <div class="wraper">
              <span>收货人</span>
              <input type="text"  placeholder="请输入收货人姓名" v-model="newdata.receiverName"/>
            </div>
          </li>
          <li >
            <div class="wraper">
              <span>联系电话</span>
              <input type="text"  placeholder="请输入手机号" v-model="newdata.receiverMobile"/>
            </div>
          </li>
          <li >
            <div class="wraper">
              <span>所在地区</span>
              <div class="address" @click.prevent.stop="showAddressProup=true">
                <span v-if="newdata.receiverProvince">{{newdata.receiverProvince + newdata.receiverCity + newdata.receiverDistrict}}</span>
                <span v-else class="addEdit">修改/添加</span>
                <i class="icon-right"></i>
              </div>
            </div>
          </li>
          <li >
            <div class="wraper">
              <textarea  v-model="newdata.receiverAddress" minlength="5" placeholder="填写详细地址，不少于5个字" name="" id="" ></textarea>
            </div>
          </li>
        </ul>
        <mt-cell title="设置为默认" >
          <mt-switch v-model="defaultAddress"></mt-switch>
        </mt-cell>
      </div>
      <isat-pbottombtn :linkUrl="'/receiveraddress'" :btnText="'保存'" :contentInfo="newdata"></isat-pbottombtn>
      <isat-selectaddress :popupVisible="showAddressProup" @cancleProup="cancleproup">
      </isat-selectaddress>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import IsatSelectaddress from 'base/selectaddress/selectaddress'
  import IsatPbottombtn from 'base/pbottombtn/pbottombtn'
  import {mapGetters} from 'vuex'
  import { MessageBox } from 'mint-ui'
  export default {
    data() {
      return {
        showAddressProup: false,
        defaultAddress:false,
        newdatas: {
          createDate:'',
          id:'',
          isDefault:0,
          receiverAddress:'',
          receiverCity:'',
          receiverCountry:'中国',
          receiverDistrict:'',
          receiverMobile:'',
          receiverName:'',
          receiverPhone:'',
          receiverProvince:'',
          receiverZip: '',
          updateDate:'',
          user:{}
        }
      }
    },
    activated() {
      // console.log(123)
    },
    deactivated() {
      // console.log(456)
    },
    created() {
    },
    computed: {
      newdata() {
        var tempId = this.$route.params.id
        if (tempId) {
          var tempThis = this.newdatas
          var tempState = this.address[Number(tempId)]
          if(tempState.isDefault===1) {
            this.defaultAddress=true
          }
          for (let j in tempThis) {
            tempThis[j] = tempState[j]
          }
          return tempThis
        } else {
          return this.newdatas
        }
      },
  /*    defaultAddress:{
        // getter
        get: function() {
          return this.newdata.isDefault===1
        },
        // setter
        set: function(newValue) {
          this.newdata.isDefault = newValue?1:0
        }
      },*/
      titlesname() {
/*        let tempval = this.$route.params.id
        if (tempval) {
          return '修改收货地址'
        } else {
          return '添加收货地址'
        }*/
      },
      ...mapGetters([
        'address'
      ])
    },
    methods: {
      cancleproup(index, value) {
        let tempaddress=value.split(' ')
        this.newdata.receiverProvince=tempaddress[0]
        this.newdata.receiverCity=tempaddress[1]
        this.newdata.receiverDistrict=tempaddress[2]
        /*this.contentInfo.defaultInfos[2].value = value*/
        this.showAddressProup = false
      }
    },
    watch: {
        defaultAddress(newval, oldval) {
          let temp = this.$route.params.id
          if (temp && this.address[Number(temp)].isDefault && oldval) {
            MessageBox({
              title: '',
              message: '默认的地址不能直接修改成普通地址',
              showCancelButton: false,
              closeOnClickModal: false
            }).then(action => {
              if (action === 'confirm') {
                this.newdata.isDefault = 1
                this.defaultAddress=true
              } else {
                return
              }
            })
          } else {
            this.newdata.isDefault = newval?1:0
          }

        }
/*      defaultAddress(newval, oldval) {
        let temp = this.$route.params.id
        if (temp && this.address[Number(temp)].defaultAddress && oldval) {
          MessageBox({
            title: '',
            message: '默认的地址不能直接修改成普通地址',
            showCancelButton: false,
            closeOnClickModal: false
          }).then(action => {
            if (action === 'confirm') {
              this.contentInfo.defaultAddress = true
            } else {
              return
            }
          })
        }
      }*/
    },
    components: {
      IsatPublictoptitle,
      IsatSelectaddress,
      IsatPbottombtn
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .membershipcard
    position fixed
    top 0px
    bottom 0px
    width 100%
    height 100%
    background-color #f5f4f3
    .wraperpage
      height calc( 100% - 90px)
      .wraperm
        li
          border-bottom: 1px solid #bfbfbf;
          .wraper
            display flex
            flex-direction row
            justify-content space-between
            align-items center
            padding 15px 10px
            background #fff
            span
              width 20%
              overflow hidden
            input
              width 80%
              outline none
            textarea
              outline none
              resize none
              width 100%
              border none
              min-height 80px
              padding 0
              font-size 16px
              color: #4d4d4d
              font-family 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif, 'Droid Sans Fallback'
            .address
              width 80%
              display flex
              justify-content space-between
              span
                no-wrap()
                flex-grow 1
                &.addEdit
                  color #999

  .slide-enter-active,.slide-leave-active
    transition transform  0.3s
  .slide-enter
    transform translate3d(100%,0,0)
  .slide-leave-to
    transform translate3d(100%,0,0)
</style>
