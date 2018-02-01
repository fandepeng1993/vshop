<template>
  <div class="integrationinfoList">
   <scroll class="content-scroll">
     <ul class="content-ul">
       <li class="case" v-for="n in 15">
         <h3>
           <span>会员注册</span>
           <span>+200</span>
         </h3>
         <p>
           <span>注册新用户</span>
           <span >2018-01-24 14:38</span>
         </p>
       </li>
     </ul>
   </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default {
    components: {
      Scroll
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet">
  @import "~common/stylus/mixin"
  .integrationinfoList
    width 100%
    height calc(100% - 208px)
    overflow hidden
    position absolute
    .content-scroll
      overflow hidden
      width 100%
      height 100%
      .content-ul
        .case
          padding 16px 11px
          border 1px solid #f3f3f3
          h3
            display flex
            justify-content space-between
            align-items center
            margin-bottom 10px
          p
            display flex
            justify-content space-between
            align-items center
            font-size 10px
            color #999999

</style>
