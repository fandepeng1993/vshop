<template>
  <transition name="slidex">
    <div class="personalsetting">
      <isat-publictoptitle
        :titles="'个人设置'"
        :isback="false"
        :defaultHome="'/Membercenter'"
      ></isat-publictoptitle>
      <scroll class="scroll-conent">
        <div>
          <ul class="settingwrap">
            <li @click.prevent.stop="selectli(item,index)" :class="{on: index === 5 ||index === personalInfo.length - 1}" v-for="(item, index) in personalInfo">
              <div class="setLeft">
                <img  :src="require('../../common/images/setting/' + item.icon.slice(0,-4) + item.icon.slice(-4))"/>
                <span>{{item.name}}</span>
              </div>
              <div class="setRight">
                <!-- <img v-if="item.avatar" :src="require('../../common/images/setting/' + item.avatar.slice(0,-4) + item.avatar.slice(-4))"/> -->
                <img v-if="item.avatar" :src="item.avatar"/>
                <span v-else>{{item.info}}</span>
                <i v-show="item.right" class="icon-right"></i>
              </div>
            </li>
          </ul>
        </div>
      </scroll>
      <!-- <isat-selectaddress :popupVisible="showList[0]" @cancleProup="cancleproup">
      </isat-selectaddress>
      <event-calendar :popupVisible="showList[1]" @cancleProup="cancleproup"></event-calendar> -->
      <isat-selectsex :popupVisible="showList[0]" @cancleProup="cancleproup">
      </isat-selectsex>
      <isat-pbottombtn :btnText="'保存'" :callback="callback"></isat-pbottombtn>
      <!--<a class="footerbox">
        <span>保存</span>
      </a>-->
      <router-view></router-view>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import Scroll from 'base/scroll/scroll'
  import IsatSelectaddress from 'base/selectaddress/selectaddress'
  import IsatSelectsex from 'base/selectsex/selectsex'
  import IsatPbottombtn from 'base/pbottombtn/pbottombtn'
  import EventCalendar from 'base/eventcalendar/eventcalendar'
  import {imageDomainName} from 'api/config'
  import {getCurrentUser, updateWemallUserInfo} from 'api/getdata'
  import { Toast, MessageBox } from 'mint-ui'
  export default {
    data() {
      return {
        showList: [false],
        IndexData: -1,
        userInfo: {},
        imageDomainName: imageDomainName,
        callback: function() {},
        personalInfo: [
          {
            icon: 'setting-1.png',
            avatar: 'login-img1.png',
            name: '头像',
            right: true,
            info: ''
          },
          {
            icon: 'phone-num.svg',
            name: '手机号',
            right: true,
            info: ''
          },
          /*{
            icon: 'setting-4.png',
            name: '常住城市',
            right: true,
            info: '北京 东城区'
          },
          {
            icon: 'setting-5.png',
            name: '生日',
            right: true,
            info: '2000-12-07'
          },*/
          {
            icon: 'setting-6.png',
            name: '性别',
            right: true,
            info: ''
          },
          {
            icon: 'setting-7.png',
            name: '真实姓名',
            right: true,
            info: ''
          },
          {
            icon: 'setting-8.png',
            name: '昵称',
            right: true,
            info: ''
          }/*,
          {
            icon: 'setting-9.png',
            name: '修改密码',
            right: true,
            info: '修改'
          },
          {
            icon: 'setting-2.png',
            name: '退出登录',
            right: true,
            info: ''
          }*/
        ]
      }
    },
    created() {
      let that = this;
      /* console.log(this.personalInfo[0].icon.slice(0, -4) + this.personalInfo[0].icon.slice(-4)) */
      this.hidenall()
      this._getCurrentUser()
      this.callback = function() {
        let params = {}
        console.log(that.userInfo)
        params.id = that.userInfo.id;
        params.mobile = that.personalInfo[1].info;
        params.userName = that.personalInfo[3].info;
        params.nickName = that.personalInfo[4].info
        params.sex = that.personalInfo[2].info == "男" ? "1" : "0";
        updateWemallUserInfo(params).then((res) => {
          if (res.ret === '0') {
            alert("保存成功");
            that._getCurrentUser();
          } else {
            alert(res.retMsg);
          }
        })
      }
    },
    methods: {
      _getCurrentUser() {
        getCurrentUser().then((res) => {
          if (res.ret === '0') {
            this.userInfo = res.data.userInfo
            this.personalInfo[0].avatar = this.userInfo.headImgUrl
            this.personalInfo[1].info = typeof(this.userInfo.mobile) == "undefined" ? "" : this.userInfo.mobile;
            this.personalInfo[2].info = typeof(this.userInfo.sex) == "undefined" ? "" : (this.userInfo.sex == "1" ? "男" : "女");
            this.personalInfo[3].info = typeof(this.userInfo.userName) == "undefined" ? "" : this.userInfo.userName;
            this.personalInfo[4].info = typeof(this.userInfo.nickName) == "undefined" ? "" : this.userInfo.nickName;

          } else {
            //跳转到登录界面

          }
        })
      },
      selectli(item, index) {
        this.hidenall()
        let tempIndex = index - 2

        if(index == 0) {
          //头像
        } else if(index == 1) {
          //手机
          MessageBox.prompt('修改手机号','').then(({ value, action }) => {
            this.personalInfo[1].info = value;
          },(err)=>{
            console.log(err)
          })
        } else if(index == 2) {
          //性别
          this.showList.splice(0, 1, true)
        } else if(index == 3) {
          //真实姓名
          MessageBox.prompt('修改真实姓名','').then(({ value, action }) => {
            this.personalInfo[3].info = (value ==  null ? "" : value);
          },(err)=>{
            console.log(err)
          })
        } else if(index == 4) {
          //昵称
          MessageBox.prompt('修改昵称','').then(({ value, action }) => {
            this.personalInfo[4].info = (value ==  null ? "" : value);
          },(err)=>{
            console.log(err)
          })
        }

        /* if (tempIndex >= 0 && tempIndex < 3) {
          this.showList.splice(tempIndex, 1, true)
        } else if (tempIndex === -1 ) {
            
          this.$router.push({
            path: `/Membercenter/personalsetting/${tempIndex + 2}`
          })
        } else if (tempIndex === -2 || tempIndex === 3) {
         
        } else {
          this.hidenall()
        } */
      },
      cancleproup(index, value) {
        if(index == "sex") {
          this.personalInfo[2].info = value
        }
        //this.personalInfo[index + 2].info = value
        this.hidenall()
      },
      hidenall() {
        for (let i in this.showList) {
          if (this.showList[i]) {
            this.showList.splice(i, 1, false)
          }
        }
      }
    },
    components: {
      IsatPublictoptitle,
      Scroll,
      IsatSelectaddress,
      EventCalendar,
      IsatSelectsex,
      IsatPbottombtn
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .personalsetting
    position fixed
    top 0px
    bottom 0px
    width 100%
    height 100%
    overflow hidden
    background-color #f3f3f3
    .scroll-conent
      width 100%
      height calc(100% - 90px)
      overflow hidden
      .settingwrap
        background-color #fff
        li
          padding: 3% 2% 3% 4%
          display flex
          justify-content space-between
          border-bottom 1px solid #f5f4f3
          &.on
            border-top: 5px solid #f5f4f3
          .setLeft
            display flex
            flex 1
            align-items center
            no-wrap()
            img
              width 24px
              height 24px
            span
              no-wrap()
              margin-left 10px
              margin-top 3px
          .setRight
            display flex
            flex 1
            align-items  center
            justify-content flex-end
            no-wrap()
            img
              width 46px
              height 46px
            span
              line-height 24px
              color #a9a9a9
              no-wrap()
            i
              margin-left 5px
              color #a9a9a9
              font-size 20px

    /*.footerbox
      height 50px
      display flex
      align-items center
      justify-content center
      background-color #ef2f2f
      &:active
        background-color #26a2ff
      span
        color #fff
        font-size 20px*/

  .slidex-enter-active,.slidex-leave-active
    transition transform  0.3s
  .slidex-enter
    transform translate3d(100%,0,0)
  .slidex-leave-to
    transform translate3d(100%,0,0)
</style>
