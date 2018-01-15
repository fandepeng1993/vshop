<template>
 <div class="login">
   <div class="part1">
     <img src="../../common/images/login.png" alt="">
   </div>
   <div class="part2">
     <mt-field label="用户名" placeholder="请输入手机号或者用户账号" ></mt-field>
     <mt-field label="密码" placeholder="请输入密码" type="password" ></mt-field>
    <!-- <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
     <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
     <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
     <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
     <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>-->
    <!-- <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></mt-field>-->
   </div>
   <div class="part3">
     <mt-button :disabled="disabled" size="large" type="danger">登录</mt-button>
   </div>
   <div class="part4">
     <a href="#" class="signIn">注册新账号</a>
     <a href="#" class="forget">忘记密码？</a>
   </div>
 </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        disabled: false
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .login
    background #f5f4f3
    position fixed
    top 40px
    bottom 0px
    height 100%
    width 100%
    overflow hidden
    z-index: 102;
    .part1
      width: 35%;
      margin: 8% auto;
      img
        width 100%
    .part3
      margin 10% auto 5%
    .part4
      display flex
      justify-content space-around
      a
        text-decoration underline
        &.signIn
          text-align left
          color #ef4f4f
        &.forget
          text-align right
          color #ef4f4f



</style>
