<template>
  <div class="babyList">
    <ul>
      <li v-on:click="select(item)" :class="{topNum1:index===0}" v-for="(item,index) in babyListdata">
       <!-- <router-link :to="'/Groupgoods/'+item.id">-->
          <span>{{item.name}}</span>
          <i class="icon-right"></i>
       <!-- </router-link>-->
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      babyListdata: {
        type: Array,
        default: []
      },
      query: {
        type: String,
        default: ''
      }
    },
    methods: {
      select(goodsId) {
        this.$emit('select', goodsId)
      }

    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .babyList
    ul
      background #f5f4f3
      display flex
      flex-direction column
      color #3d4145
      li
        display flex
        background white
        padding 10px
        line-height 20px
        justify-content space-between
        border-bottom: 1px solid #f5f4f3;
        &.topNum1
          margin 10px 0
</style>
