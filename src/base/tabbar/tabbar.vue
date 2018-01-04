<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/Homepage">
      <div class="linkpng png1"></div>
      <p class="tab-link">首页</p>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Groupgoods">
      <div class="linkpng png2"></div>
      <p class="tab-link">商品分组</p>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Joinsales">
      <div class="linkpng png3"></div>
      <p class="tab-link">加入分销</p>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Shoppingcart">
      <div class="linkpng png4"></div>
      <p class="tab-link">购物车</p>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Membercenter">
      <div class="linkpng png5"></div>
      <p class="tab-link">会员中心</p>
    </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display:flex
    height:55px
    font-size: $font-size-medium
    right: 0
    bottom: 0
    left: 0
    position: fixed
    z-index: 1
    background $color-tabbar-bg
    .tab-item
      flex:1
      text-align:center
      .linkpng
        margin 5px auto
        width 25px
        height 25px
      .png1
        background-image: url('./../../common/images/homepage.png')
        background-repeat no-repeat
        background-position center
        background-size contain
      .png2
        background-image: url('./../../common/images/groupgood.png')
        background-repeat no-repeat
        background-position center
        background-size contain
      .png3
        background-image: url('./../../common/images/joinsale.png')
        background-repeat no-repeat
        background-position center
        background-size contain
      .png4
        background-image: url('./../../common/images/shopingcart.png')
        background-repeat no-repeat
        background-position center
        background-size contain
      .png5
        background-image: url('./../../common/images/membercenter.png')
        background-repeat no-repeat
        background-position center
        background-size contain
      .tab-link
        height: 20px
        line-height 20px
        no-wrap()
        color: $color-highlight-background
      &.router-link-active
        background-color: #eaeaea
        .tab-link
          color: #26a2ff
          /*border-bottom:2px solid $color-theme*/
</style>
