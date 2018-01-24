<template>
    <div class="outWrap">
      <div class="bottomwrap">
        <div class="bottomImg">
          <div class="imgwraper">
            <img :src="imgurl.picUrl" >
          </div>
          <div class="imgInfo">
            <span>¥39.00</span>
            <p>库存<i>25</i>件</p>
          </div>
          <i class="closeICon" @click.prevent.stop="changeShower"></i>
        </div>
        <div class="bottomNumber">
          <div>
            <h4>购买数量</h4>
          </div>
          <div class="btngroup">
            <button @click.prevent.stop="decrease" :disabled="notdecre">-</button>
            <input type="number" name="number" v-model="countNum" maxlength="2" readonly>
            <button @click.prevent.stop="increase" :disabled="notadd">+</button>
          </div>
        </div>
      </div>
      <div class="bottomqr">
        <span>确认</span>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    imgurl: {
      type: Object,
      default: {picUrl: '../../common/images/default.png'}
    }
  },
  data() {
    return {
      countNum: 1,
      notdecre: true,
      notadd: false
    }
  },
  methods: {
    changeShower() {
      this.$emit('closeBotBox', false)
    },
    decrease() {
      this.countNum--
    },
    increase() {
      this.countNum++
    }
  },
  watch: {
    countNum(newval) {
      if (newval === 1) {
         this.notdecre = true
      } else if (newval >= 99) {
        this.notadd = true
      }else {
        this.notdecre = false
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
    height 155px
    padding 10px
    box-sizing border-box
    .bottomImg
      position relative
      height 90px
      display flex
      border-bottom 1px solid #f6f6f6
      .imgwraper
        width 30%
        overflow hidden
        padding 4px
        background-color #fff
        border-radius: 3%
        position absolute
        top -50%
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
    .bottomNumber
      height 55px
      display flex
      justify-content space-between
      align-items center
      .btngroup
        input
          width 27px
          height 25px
          float left
          border-top 1px solid #9d9d9d
          border-bottom 1px solid #9d9d9d
          text-align center
        button
          width 27px
          height 27px
          float left
          background none
          outline none
          border: 1px solid #9d9d9d
          font-size 17px
  .bottomqr
    height 45px
    background-color #ef2f2f
    color white
    display flex
    justify-content center
    align-items center
    font-size 18px
</style>
