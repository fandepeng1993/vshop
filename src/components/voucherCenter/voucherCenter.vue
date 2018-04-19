<template>
<transition name="slide">
  <div class="vouchercenter">
    <isat-publictoptitle :isback="true" :person="false" :home="false"  :titles="titlesname"></isat-publictoptitle>
    <div class="content">
      <h3>充值选项</h3>
      <ul class="tabsbtn">
        <li v-for="(item,index) in listData" @click.prevent.stop="tabs(index)" :class="index==activeIndex ? 'active' : ''">
          <p>{{item.price}}</p>
          <p class="info">售价{{item.price}}元</p>
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
  export default {
    name: "voucher-center",
    data() {
      return {
        titlesname: '充值中心',
        listData: [
          {price: '10', info: '充值项的简要描述：充值10元'},
          {price: '20', info: '充值项的简要描述：充值20元'},
          {price: '50', info: '充值项的简要描述：充值50元'},
          {price: '100', info: '充值项的简要描述：充值100元'},
          {price: '200', info: '充值项的简要描述：充值200元'}
        ],
        tabcontent: '',
        activeIndex: 0,
        btnText: '确认充值'
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
