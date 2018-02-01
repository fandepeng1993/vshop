<template>
  <div class="infourtab">
    <div v-for="item in datastab" v-if="!(item.name===vhiddenName)" class="tab-item">
      <router-link tag="div" :to="item.srcfirst + dirPath + item.srclast">
        <p class="tab-link">{{item.name}}</p>
      </router-link>
    </div>

   <!-- <router-link tag="div" class="tab-item" :to="'/Groupgoods/'+dirPath+'/salesVolume'">
      <p class="tab-link">销量</p>
    </router-link>
    <router-link tag="div" class="tab-item" :to="'/Groupgoods/'+dirPath+'/newProduct'">
      <p class="tab-link">新品</p>
    </router-link>
    <router-link tag="div" class="tab-item" :to="'/Groupgoods/'+dirPath+'/price'">
      <p class="tab-link">价格</p>
    </router-link>-->
    <div class="changeIcon" @click="exchangeIc" v-show="isShow">
      <i :class="{'icon-caidan': !menuIcon, 'icon-icon122': menuIcon}" ></i>
    </div>
    <div class="datesearch" @click.prevent.stop="checkDate" v-if="datesearh">
      <img src="../../common/images/memberimage/date.png"></img>
      <p>日期筛选</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      menuIcon: {
        type: Boolean,
        default: false
      },
      isShow: {
        type: Boolean,
        default: true
      },
      datastab: {
        type: Array,
        default: []
      },
      dirfalse: {
        type: Boolean,
        default: false
      },
      vhiddenName: {
        type: String,
        default: ''
      },
      datesearh: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
      }
    },
    methods: {
      exchangeIc() {
        let changeValue = !this.menuIcon
        this.$emit('changeIcon', changeValue)
      },
      checkDate() {
        this.$emit('checkDate')
      }
    },
    computed: {
      dirPath() {
        if (!this.dirfalse) {
          return this.$route.params.id
        } else {
          return ''
        }
      }
    },
    mounted() {
    },
    created() {
      /* this.dirPath = this.$route.params.id */
       /* console.log(this.$route) */
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .infourtab
    display flex
    height auto
    font-size: $font-size-medium
    position relative
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
    .datesearch
      flex 1
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      p
        font-size 10px
      img
        width 18%
    .tab-item
      flex:1
      text-align:center
      .tab-link
        no-wrap()
        color: $color-highlight-background
      div
        padding 17px 0
        &.router-link-active
          border-bottom: 2px solid #26a2ff;
          margin-bottom: 0px;
          .tab-link
            color: #26a2ff
    &:after
      content: ''
      position: absolute
      left 0
      bottom 0
      right auto
      top auto
      height 1px
      width 100%
      background-color #e7e7e7
      display block
      z-index 15
    &:before
      content ''
      position absolute
      left 0
      top 0
      right auto
      top auto
      height 1px
      width 100%
      background-color #e7e7e7
      display block
      z-index 15
  /*border-bottom:2px solid $color-theme*/
</style>
