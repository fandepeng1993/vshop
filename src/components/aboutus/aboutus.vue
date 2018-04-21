<template>
  <div class="shoppingcart">
    <isat-publictoptitle :home="false" :person="false" :titles="Goodstitle"></isat-publictoptitle>
    <!-- <div>关于我们页面</div> -->
    <div class="titletabs">
    	<ul>
    		<li v-for="(category,index) in categoryList" :class="[activeIndex==index? 'active': '']" @click.prevent.stop="selectCategory(category.id,index)">
    		<span :class="[categoryList.length==index+1? 'lastone': '']">{{category.name}}</span>
    		</li>
    	</ul>
    	<div class="contentWrap" v-html="article.articleData.content"></div> 
    </div>	
    
  </div>
</template>
<script type="text/ecmascript-6">
  import IsatPublictoptitle from 'base/publictoptitle/publictoptitle'
  import {getIntroduceData, getArticleListByCategory, getArticleById} from 'api/getdata'
  import {ERR_OK, imageDomainName} from 'api/config'
  export default {
    data() {
      return {
        Goodstitle: '关于我们',
     	categoryList : [],
     	article: {
     		articleData: {}
     	},
     	activeIndex: 0
      }
    },
    created() {
      this._getIntroduceData();
    },
    mounted() {

    },	
    computed: {
      
    },
    methods: {
    	//获取咨询类别列表
      _getIntroduceData() {
        getIntroduceData().then((res) => {
          if (res.ret === '0') {
            this.categoryList = res.data.list;
            if(this.categoryList.length > 0) {
            	this.selectCategory(this.categoryList[0].id, 0, true);
            }
          }
        })
      },
      	//获取特定咨询对应的文章内容
      selectCategory(categoryId, index, isInit) {
      	if(this.categoryList.length > 0 && index == this.activeIndex && !isInit) {
      		return
      	}
      	let params = {}
      	params.pageNo = 1;
      	params.pageSize = 1;
      	params["category.id"] = categoryId;
        getArticleListByCategory(params).then((res) => {
          if (res.ret === '0') {
          	if(res.data.list.length > 0) {
          		let articleId = res.data.list[0].id;
	            getArticleById(articleId).then((res) => {
		          if (res.ret === '0') {
		            this.article = res.data;
		            this.activeIndex = index
		          }
		        })
          	}
          }
        })
      },
    },
    components: {
      IsatPublictoptitle
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .shoppingcart
    .shoppingcart-content
      position fixed
      top 40px
      bottom 0px
      height calc(100% - 95px)
      width 100%
      overflow hidden
      z-index 105
      background #fafafa
  	.titletabs
  		height calc(100% - 95px)
  		position fixed
  		overflow-y scroll
  		width: 100%
  		ul
  			display flex
  			padding 10px 10px 0px 10px
  			justify-content flex-start
  			flex-wrap wrap
  			border-bottom 1px solid #ccc
  			li
  				text-align center
  				width: calc(25%)
  				line-height 30px
  				border-radius 4px
  				margin-bottom 10px
  				&.active
  					background #26a2ff
  					color white
					span
						display block
						border-right 1px solid #ccc
						&.lastone
							border none
		.contentWrap
			padding 5px

	





.slide-fade-enter-active
  transition: all .3s ease;
.slide-fade-leave-active
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(100%)
</style>

