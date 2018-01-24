<template>
  <div class="person">
    <a href="#" @click.prevent.stop.self="jumpRouter(loginState)" class="icon-huiyuan"></a>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default {
    methods: {
      jumpRouter(item) {
        this.$router.push({
          path: item
        })
      }
    },
    computed: {
      loginState() {
        if (this.loginstate) {
          return '/Membercenter'
        }
        else {
          return '/login'
        }
      },
      ...mapGetters(['loginstate'])
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .person
    display flex
    width 20%
    height 40px
    float right
    align-items center
    justify-content center
    a
      font-size $font-size-super

</style>
