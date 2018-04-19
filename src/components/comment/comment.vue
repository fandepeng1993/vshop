<template>
  <transition name="slide">
    <div class="comment">
      <isat-publictoptitle :isback="true" :person="false" :home="false"  :titles="titlesname"></isat-publictoptitle>
      <div class="content">
        <div class="goodsInfo">
          <div class="goodsImg">
            <img src="../../common/images/user.jpg" width="100" height="100" alt="" >
          </div>
          <p class="goodsName">
            【野生葛粉】500克/袋，绿色认证，出口日本，39元/袋
          </p>
        </div>
        <div class="goodscomment">
          <isat-iconstar></isat-iconstar>
        </div>
        <div class="commentText">
          <textarea name="" v-model="textval" maxlength="120" rows="8" placeholder="对该商品的评价，最多可输入120个字"></textarea>
          <p v-show="canInByte > 0 ? true : false">还可以输入<span style="color: #5ca7d9">{{canInByte}}</span>个字</p>
          <p v-show="canInByte <= 0 ? true : false"><i style="color: red">*</i> 已经超出<span style="color: red">{{Math.abs(canInByte)}}</span> 个字</p>
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
  import IsatIconstar from 'base/iconstar/iconstar'
  export default {
    name: "voucher-center",
    data() {
      return {
        titlesname: '评价',
        listData: [
          {price: '10', info: '充值项的简要描述：充值10元'},
          {price: '20', info: '充值项的简要描述：充值20元'},
          {price: '50', info: '充值项的简要描述：充值50元'},
          {price: '100', info: '充值项的简要描述：充值100元'},
          {price: '200', info: '充值项的简要描述：充值200元'}
        ],
        tabcontent: '',
        activeIndex: 0,
        btnText: '提交评价',
        textval: ''
      }
    },
    created() {
      this.tabcontent = this.listData[0].info
    },
    mounted() {},
    methods: {
      tabs(index) {
        this.tabcontent = this.listData[index].info
        this.activeIndex = index
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
