<template>
  <div class="loginPage">
    <div class="loginpage-top">
      <mt-header :title="Goodstitle">
       <!-- <router-link to="/Homepage" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>-->
        <div slot="left">
          <mt-button   @click.native.prevent.stop="back"  icon="back"></mt-button>
          <!-- <mt-button @click="handleClose">关闭</mt-button>-->
        </div>
        <mt-button  @click.native.prevent.stop="handleClick" slot="right">
          <i class="icon-home"></i>
        </mt-button>
      </mt-header>
    </div>
    <isat-login></isat-login>
  </div>
</template>
<script type="text/ecmascript-6">
  import IsatLogin from 'base/login/login'
  export default {
    data () {
      return {
        Goodstitle: '登录'
      }
    },
    methods: {
      handleClick(e) {
        this.$router.push({
          path: '/'
        })
      },
      back() {
        this.$router.back()
      }
    },
    components: {
      IsatLogin
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .icon-home
    color white
    font-size 23px
    margin 0 5px

</style>
