<template>
  <mt-header :title="titles">
    <!-- <router-link to="/Groupgoods" slot="left">
     </router-link>-->
    <div slot="left" v-if="isback">
      <mt-button icon="back" @click="back"></mt-button>
      <!-- <mt-button @click="handleClose">关闭</mt-button>-->
    </div>

    <router-link :to="defaultHome" v-else  slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    <mt-button @click.native.prevent.stop="handleperson" v-if="person" class="isatbtn" slot="right">
      <i class="icon-huiyuan1"></i>
    </mt-button>
    <mt-button @click.native.prevent.stop="handleshop" v-if="home" class="isatbtn" slot="right">
      <i class="icon-gouwuche"></i>
    </mt-button>
  </mt-header>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      titles: {
        type: String,
        default: ''
      },
      home: {
        type: Boolean,
        default: true
      },
      person: {
        type: Boolean,
        default: true
      },
      isback: {
        type: Boolean,
        default: true
      },
      defaultHome: {
        type: String,
        default: '/Homepage'
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      handleperson() {
        console.log('person')
      },
      handleshop() {
        console.log('shop')
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .icon-gouwuche
    color white
    font-size 23px
    margin 0 5px
  .icon-huiyuan1
    color white
    font-size 23px
    margin 0 5px
</style>
