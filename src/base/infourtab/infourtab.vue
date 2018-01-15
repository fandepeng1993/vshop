<template>
  <div class="infourtab">
    <router-link tag="div" class="tab-item" :to="'/Groupgoods/'+dirPath+'/comprehensive'">
      <p class="tab-link">综合</p>
    </router-link>
    <router-link tag="div" class="tab-item" :to="'/Groupgoods/'+dirPath+'/salesVolume'">
      <p class="tab-link">销量</p>
    </router-link>
    <router-link tag="div" class="tab-item" :to="'/Groupgoods/'+dirPath+'/newProduct'">
      <p class="tab-link">新品</p>
    </router-link>
    <router-link tag="div" class="tab-item" :to="'/Groupgoods/'+dirPath+'/price'">
      <p class="tab-link">价格</p>
    </router-link>
    <div class="changeIcon" @click="exchangeIc" >
      <i :class="{'icon-caidan': !datas, 'icon-icon122': datas}" ></i>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      datas: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        dirPath: ''
      }
    },
    methods: {
      exchangeIc() {
        let changeValue = !this.datas
        this.$emit('changeIcon', changeValue)
      }
    },
    created() {
      this.dirPath = this.$route.params.id
      /*console.log(this.$route)*/
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .infourtab
    display flex
    height auto
    font-size: $font-size-medium
    .changeIcon
      display flex
      flex-direction row
      /*justify-content center
      align-items center*/
      width 30px
      i
        align-self center
        font-size: 20px;
        flex 1
    .tab-item
      flex:1
      text-align:center
      padding 17px 0
      .tab-link
        no-wrap()
        color: $color-highlight-background
      &.router-link-active
        border-bottom: 2px solid #26a2ff;
        margin-bottom: -2px;
        .tab-link
          color: #26a2ff
  /*border-bottom:2px solid $color-theme*/
</style>
