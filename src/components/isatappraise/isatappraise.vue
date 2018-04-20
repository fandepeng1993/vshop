<template>
  <div class="appraise">
    <div class="appraisetitle">
      <h3 data-max="5">宝贝评价(<span>{{count}}</span>)</h3>
    </div>
    <div class="appraise-content" v-for="item in dataList">
        <h4>
          <!-- <div class="userImg"></div> -->
          <img style="height:28px;width:28px;" :src="imageDomainName+item.buyerPhoto">
          <span class="userName">{{item.buyerNick}}</span>
        </h4>
        <h5 class="appraise-text">{{item.buyerMessage}}</h5>
        <span>{{item.commentTime}}</span>
    </div>
    <div class="moreWrap">
      <h6>
        <a href="javascript:0;"> 查看更多评价</a>
      </h6>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {getBuyerCommentList} from 'api/getdata'
  import {imageDomainName} from 'api/config'
  export default {
    props: {
      itemId: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        imageDomainName: imageDomainName,
        count: "",
        dataList: [],
        params: {
          itemId: "",
          pageNo: 1,
          pageSize: 20
        }
      }
    },
    created() {
      this._getBuyerCommentList()
    },
    mounted() {
    },
    methods: {
      _getBuyerCommentList() {
        this.params.itemId = this.itemId;
        getBuyerCommentList(this.params).then((res) => {
          if (res.ret === '0') {
            this.dataList = res.data.list
            this.count = res.data.count
          }
        })
      }
    },
    watch: {
      '$route': function () {
        if(this.$route.fullPath.indexOf("Goodsdetail") != -1) {
          this._getBuyerCommentList()
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .appraise
    .appraisetitle
      h3
        padding 0px 10px
        margin 10px 0px
        line-height 30px
    .appraise-content
      padding 5px 10px 10px 10px
      border-top 1px solid #e8e8e8
      border-bottom 1px solid #e8e8e8
      span
        font-size 12px
        color #999
      h4
        margin 5px 0
        padding 0px 10px
        display flex
        align-items center
        .userImg
          width 28px
          height 28px
          display inline-block
          background-image url("../../common/images/user.jpg")
          background-position center
          background-size auto
          background-repeat no-repeat
        .userName
          width 80px
          margin-left 10px
          font-size 14px
          no-wrap()
      .appraise-text
        margin 15px 0
        padding 0px 10px
        font-size 16px
    .moreWrap
      border-bottom:6px solid #f5f4f3;
      h6
        padding 10px 0
        display flex
        justify-content center
        a
          font-size: 14px;
          color: #ef2f2f;
          padding: 5px 15px;
          border-radius: 15px;
          border: 1px solid #ef2f2f;
          text-align: center;
</style>
