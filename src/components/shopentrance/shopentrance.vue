<template>
  <div class="shopenter">
    <div class="shopTop">
      <h3><i class="shopImg"></i><span>ISAT创作团队</span></h3>
    </div>
    <ul class="shopcontent">
      <li>
        <span>35</span>
        <p>全部商品</p>
      </li>
      <li class="middleLi">
        <span>0</span>
        <p>上新品</p>
      </li>
      <li>
        <span class="red">100%</span>
        <p>商品好评率</p>
      </li>
    </ul>
    <div class="shopbottom">
      <div class="shopbtn">
        <a @click.prevent.stop="checkgroup">
          <img src="../../common/images/menu.png" alt="">
          <span>查看分组</span>
        </a>
      </div>
      <div class="shopbtn">
        <a @click.prevent.stop="enterHome">
          <img src="../../common/images/store.png" alt="">
          <span>进店逛逛</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
   methods: {
    checkgroup() {
      this.$route.push({
        path:'/Groupgoods'
      })
    },
    enterHome() {
      this.$route.push({
        path:'/Homepage'
      })
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .shopenter
    .shopTop
      h3
        margin 8px
        display flex
        align-items center
        span
          font-size 18px
        .shopImg
          width 40px
          height 40px
          display inline-block
          background-image url("../../common/images/shop.jpg")
          background-repeat no-repeat
          background-size cover
          background-position center
          margin-right 10px
    .shopcontent
      display flex
      li
        flex 1
        text-align center
        &.middleLi
          border-left 1px solid #cfcfcf
          border-right 1px solid #cfcfcf
        span
          &.red
            color #ef2f2f
        p
          color #828282
          font-size 14px
          margin 10px 0
    .shopbottom
      display flex
      justify-content center
      padding  20px 0px
      border-bottom: 6px solid #f5f4f3;
      .shopbtn
        display flex
        align-items center
        border 0.05rem solid #ef2f2f
        margin 0 10px
        a
          color #ef2f2f
          display flex
          align-items center
          padding 4px 15px
          no-wrap()
          img
            margin-right 5px
          span
            font-size 16px
</style>
