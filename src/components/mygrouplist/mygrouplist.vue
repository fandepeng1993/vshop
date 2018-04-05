<template>
  <div class="couponslist">
    <scroll class="scroll-content" datas="activityList" v-if="activityList.length > 0">
      <ul>
        <!-- <li v-for="activity in ul" style="line-height: 30px">{{activity.name}}</li> -->

        <li class="case" v-for="activity in activityList" @click.prevent.stop="gotoItemsForActivity(activity)">
         <div>
           <h3 class="acName">
              <span>{{activity.name}}</span>
           </h3>
           <h3 class="acTime">
             活动时间：<span>{{activity.startDate}}~{{activity.endDate}}</span>
           </h3>
           <p  class="acRemark">
             <span>{{activity.remarks}}</span>
           </p>
         </div>
         <i class="icon-right"></i>
       </li>
      </ul>
    </scroll>
    <div class="noData" v-if="activityList.length == 0">
      <div class="img">
        <img src="../../common/images/nodata.png">
      </div>
      <div class="text-gray">暂无活动</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import {findListByActivityType} from 'api/getdata'
  import {ERR_OK, imageDomainName} from 'api/config'
  export default {
    data() {
      return {
        activityList: [],
        pageNo: 1,
        pageSize: 1000,
        imageDomainName: imageDomainName,
        nexttitle: ""
      }
    },
    activated(){
     /* console.log(123)*/
    },
    created() {
      this._findListByActivityType();
    },
    methods: {
      _findListByActivityType() {
        let activityType = this.$route.params.id;
        //获取活动列表
        findListByActivityType(activityType).then((res) => {
          if (res.ret === '0') {
            this.activityList = res.data.list
          }
        })
      },
      gotoItemsForActivity(activity) {
        //跳转到商品列表页面，展示对应活动的参与商品
        this.$router.push({
          path: `/Groupgoods/activity`,
          query: {
            activityId: activity.id,
            activityType: this.$route.params.id
          }
        })
      },
      checkoutfn(value) {
        Toast({
          message: value,
          duration: 1000
        })
      }
    },
    watch: {
      '$route': function () {
        if(this.$route.fullPath.indexOf("mygroup") != -1) {
          this._findListByActivityType();
        }
      }
    },
    components: {
      Scroll
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet">
  @import "~common/stylus/mixin"
  .couponslist
    background-color #fff
    width 100%
    height calc(100% - 88px)
    overflow hidden
    .scroll-content
      width 100%
      height 100%
      overflow hidden
      ul
        li
          border-bottom: 1px solid #e7e7e7
          display:flex
          align-items: center;
          padding: 10px;
          .acName
            font-size: 18px;
            color: red
            margin-bottom:5px
          .acTime
            font-size:16px
            margin-bottom:5px
            span
              color: #777
          .acRemark
            font-size:16px 
            color: #333
    .noData
      height 150px
      width 100%
      display flex
      flex-direction column
      justify-content space-around
      border-bottom: 1px solid #d6d7d9
      background-color: #fff
      .img
        display flex
        justify-content center
      .text-gray
        text-align center
        font-size 16px
        color #999999
</style>
