<template>
  <transition name="slide">
    <div class="membershipcard" >
      <isat-publictoptitle :isback="true" :titles="titlesname"></isat-publictoptitle>
      <div @click="contentInfo.showAddressProup=false" class="wraperpage">
        <ul class="wraperm">
          <li v-for="item in contentInfo.defaultInfos">
            <div class="wraper">
              <span v-if="item.textinfo">{{item.textinfo}}</span>
              <input type="text" v-if="item.type === 'input'" :placeholder="item.placeholder" v-model="item.value"/>
              <div class="address" v-if="item.type === 'address'" @click.prevent.stop="contentInfo.showAddressProup=true">
                <span v-if="item.value">{{item.value}}</span>
                <span v-else class="addEdit">{{item.placeholder}}</span>
                <i class="icon-right"></i>
              </div>
              <textarea v-if="item.type === 'textarea'" v-model="item.value" minlength="5" :placeholder="item.placeholder" name="" id="" ></textarea>
            </div>
          </li>
        </ul>
        <mt-cell title="设置为默认" >
          <mt-switch v-model="contentInfo.defaultAddress"></mt-switch>
        </mt-cell>
      </div>
      <isat-pbottombtn :linkUrl="'/receiveraddress'" :btnText="'保存'" :contentInfo="contentInfo"></isat-pbottombtn>
      <isat-selectaddress :popupVisible="contentInfo.showAddressProup" @cancleProup="cancleproup">
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
        contentinfos: {
          defaultAddress: false,
          showAddressProup: false,
          defaultInfos: [
            {textinfo: '收货人', type: 'input', name: 'rname', placeholder: '请输入收货人姓名', value: ''},
            {textinfo: '联系电话', type: 'input', name: 'rnumber', placeholder: '请输入手机号', value: ''},
            {textinfo: '所在地区', type: 'address', name: 'address', placeholder: '修改/添加', value: ''},
            {textinfo: '', type: 'textarea', name: 'infoaddress', placeholder: '填写详细地址，不少于5个字', value: ''}
          ]
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
      contentInfo() {
        var tempId = this.$route.params.id
        if (tempId) {
          var tempThis = this.contentinfos
          var tempState = this.address[Number(tempId)]
          for (let j in tempThis) {
            if (j === 'defaultInfos') {
              for (let z in tempState[j]) {
                for (let m in tempState[j][z]) {
                  tempThis[j][z][m] = tempState[j][z][m]
                }
              }
              /* tempThis[j] = tempState[j].slice() */
              /* console.log(tempThis[j]) */
            } else {
              tempThis[j] = tempState[j]
            }
          }
          return tempThis
        } else {
          return this.contentinfos
        }
      },
      defaultAddress() {
        return this.contentInfo.defaultAddress
      },
      titlesname() {
        let tempval = this.$route.params.id
        if (tempval) {
          return '修改收货地址'
        } else {
          return '添加收货地址'
        }
      },
      ...mapGetters([
        'address'
      ])
    },
    methods: {
      cancleproup(index, value) {
        this.contentInfo.defaultInfos[2].value = value
        this.contentInfo.showAddressProup = false
      }
    },
    watch: {
      defaultAddress(newval, oldval) {
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
      }
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
