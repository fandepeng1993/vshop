<template>
  <transition name="slide">
    <div class="membershipcard">
      <isat-publictoptitle :isback="false" :defaultHome="'/Membercenter'" :titles="titlesname"></isat-publictoptitle>
      <scroll :datas="address" class="address-content">
        <div class="address-list">
          <ul>
            <li v-for="(item, index) in address">
              <div class="all">
                <div class="add-detail">
                  <p><i>{{item.defaultInfos[0].value}}</i><span>{{item.defaultInfos[1].value}}</span></p>
                  <p><span><mt-badge v-if="item.defaultAddress" type="warning" class="defaultmt" size="small">默认</mt-badge>{{item.defaultInfos[2].value}}{{item.defaultInfos[3].value}}</span></p>
                </div>
                <div class="confirm">
                  <p>
                    <span class="span" @click.prevent.stop="checkedThis(index)">
                      <i :class="{on: item.defaultAddress}"></i>
                      默认地址
                    </span>
                    <b>
                      <span class="edit" @click.prevent.stop="editAddressList(index)"><a class="external" href="javascript:0;">编辑</a></span>
                      <span class="delet" @click.prevent.stop="deleteAddressList(index)"><a class="external" href="javascript:0;">删除</a></span>
                    </b>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </scroll>
      <isat-pbottombtn :linkUrl="'/addreceiveradd'" :btnText="'添加收获地址'" ></isat-pbottombtn>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import Scroll from 'base/scroll/scroll'
  import {mapActions, mapGetters} from 'vuex'
  import IsatPbottombtn from 'base/pbottombtn/pbottombtn'
  import { MessageBox } from 'mint-ui'
  export default {
    data() {
      return {
        titlesname: '收货地址管理'
      }
    },
    beforeCreate() {
      // 计算属性 返回结果不能在该钩子函数中获取。
      // undefined
    },
    activated() {
      console.log(123)
    },
    created() {
      console.log(123)
    },
    computed: {
      ...mapGetters(['address'])
    },
    methods: {
      checkedThis(index) {
        if (!this.address[index].defaultAddress) {
          MessageBox({
            title: '',
            message: '设置该条地址为默认收货地址么?',
            showCancelButton: true,
            closeOnClickModal: false
          }).then(action => {
            if (action === 'confirm') {
              this.editDefaultAddress(index)
            } else {
              return
            }
          })
        } else {
          return
        }
      },
      editAddressList(index) {
        /* this.$emit('editAddress', index) */
        this.$router.push({
          path: `addreceiveradd/${index}`,
          query: {
            name: `fdp${index}`
          }
        })
      },
      deleteAddressList(index) {
        MessageBox({
          title: '',
          message: '确定要删除该条收货地址么?',
          showCancelButton: true,
          closeOnClickModal: false
        }).then(action => {
          if (action === 'confirm') {
            this.deleteAddress(index)
            this.editDefaultAddress(0)
          } else {
            return
          }
        })
      },
      ...mapActions([
        'editDefaultAddress',
        'deleteAddress'
      ])
    },
    mounted() {},
    components: {
      IsatPublictoptitle,
      Scroll,
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
    background-color #fff
    color #4d4d4d
    font-family: "Microsoft YaHei", Arial, sans-serif
    font-size 14px
    .address-content
      height: calc(100% - 95px);
      width: 100%;
      overflow: hidden;
      z-index: 105;
      background: #fafafa;
      .address-list
        ul
          li
            .all
              border-bottom 6px solid #f5f4f3
              padding-bottom 12px
              .add-detail
                display flex
                flex-direction column
                flex-wrap wrap
                padding: 8px 10px 0 14px
                border-bottom: 1px solid #bfbfbf
                p
                  display flex
                  flex-direction row
                  justify-content space-between
                  margin 5px 0px 12px 0px
                  line-height 20px
                  span
                    .defaultmt
                      margin-right 10px
                      line-height 16px
                  i
                    font-style normal
              .confirm
                padding 10px 16px 0px 16px
                p
                  display flex
                  flex-direction row
                  justify-content space-between
                  align-items center
                  .span
                    display flex
                    align-items center
                    i
                      width: 15px
                      height: 15px
                      border-radius: 50%
                      border: 1px solid #e1e1e2
                      margin: 0px 5px 0px 0px
                      position: relative
                      display inline-block
                      &.on
                        background-image url('../../common/images/add1.png')
                        background-color  #ffc107
                        background-repeat  no-repeat
                        background-size 10px 10px
                        background-position center
                        border: 1px solid #ffc107
                  b
                    span
                      padding 0 0 0 19px
                      &.edit
                        background-image url("../../common/images/edit.png")
                        background-repeat no-repeat
                        background-size 13px
                        background-position left center
                        margin-right 10px
                      &.delet
                        background-image url("../../common/images/add3.png")
                        background-repeat no-repeat
                        background-size 13px
                        background-position left center
  .slide-enter-active,.slide-leave-active
    transition transform  0.3s
  .slide-enter
    transform translate3d(100%,0,0)
  .slide-leave-to
    transform translate3d(100%,0,0)
</style>
