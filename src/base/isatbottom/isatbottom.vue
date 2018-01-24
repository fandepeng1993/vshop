<template>
  <div>
    <div class="footerBottom">
      <ul class="footerBottomUl">
        <li>
          <div class="contact">
            <img  src="../../common/images/contact.svg" >
            <br/>
            <span>客服</span>
          </div>
        </li>
        <li></li>
        <li class="addSHop">
          <span>加入购物车</span>
        </li>
        <li class="buyIt">
          <span>立即购买</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .footerBottom
    .footerBottomUl
      height 55px
      display flex
      align-items stretch
      border-top 1px solid #bfbfbf
      li
        flex 1
        display flex
        justify-content center
        align-items center
        &.addSHop
          background-color #ffb33a
          color white
          border-top: 1px solid #ffb33a
        &.buyIt
          background-color #ef2f2f
          color white
          border-top: 1px solid #ef2f2f
        .contact
          text-align center
          img
            width 20px
          span
            font-size 13px
</style>
