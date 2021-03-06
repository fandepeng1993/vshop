import jsonps from 'common/js/jsonp'
import {commonParams, options, domainName} from './config'
import axios from 'axios'

axios.defaults.withCredentials = true;

export function getJsonpHomepage() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonps(url, data, options)
}

export function getAxiosHomepage() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = {
    g_tk: 924607227,
    uin: 0,
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'h5',
    needNewCode: 1
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}

// 获取商城首页数据
export function getWemallHomepage() {
  const url = domainName + '/f/interface/wemall/sys/getHomePageData'
  const data = {}
  return sendPost(url, data);
}

// 获取商品分类信息
export function getItemSortList() {
  const url = domainName + '/f/interface/wemall/item/getItemSortList'
  const data = {}
  return sendPost(url, data);
}

// 获取商品列表信息
export function getItemList(params) {
  const url = domainName + '/f/interface/wemall/item/getItemList'
  return sendPost(url, params);
}

// 获取商品详情信息
export function getItemDetail(id) {
  const url = domainName + '/f/interface/wemall/item/getItemDetail'
  const params = {id: id}
  return sendPost(url, params);
}

// 获取订单商品评价列表信息
export function getBuyerCommentList(params) {
  const url = domainName + '/f/interface/wemall/order/getBuyerCommentList'
  return sendPost(url, params);
}

// 获取购物车列表信息
export function getShopCarList(params) {
  const url = domainName + '/f/interface/wemall/userRelated/getShopCarList'
  return sendPost(url, params);
}

// 添加购物车信息//itemId.itemNum,itemSpecIds
export function addShopCarInfo(params) {
  const url = domainName + '/f/interface/wemall/userRelated/addShopCarInfo'
  return sendPost(url, params);
}

// 删除购物车信息
export function removeShopCarInfo(ids) {
  const url = domainName + '/f/interface/wemall/userRelated/removeShopCarInfo'
  const params = {ids: ids}
  return sendPost(url, params);
}

// 获取当前微信用户信息
export function getCurrentUser() {
  const url = domainName + '/f/interface/wemall/user/getCurrentUser'
  const data = {}
  return sendPost(url, data);
}

// 获取积分明细列表信息
export function getScoreInfoList(params) {
  const url = domainName + '/f/interface/wemall/userRelated/getScoreInfoList'
  return sendPost(url, params);
}

// 获取奖励金明细列表信息
export function getBountyInfoList(params) {
  const url = domainName + '/f/interface/wemall/userRelated/getBountyInfoList'
  return sendPost(url, params);
}


// 获取用户收货地址列表的接口
// isDefault=是否默认（1--默认，0--非默认）
export function getUserAddressList(params) {
  const url = domainName + '/f/interface/wemall/userRelated/getUserAddressList'
  return sendPost(url, params);
}

// 获取用户收货地址详情的接口
// id（*）=主键id
export function getUserAddressDetail(params) {
  const url = domainName + '/f/interface/wemall/userRelated/getUserAddressDetail'
  return sendPost(url, params);
}

// 添加用户收货地址的接口
// receiverCountry（*）=国家
// receiverProvince（*）=省份
// receiverCity（*）=城市
// receiverDistrict（*）=区县
// receiverAddress（*）=收货地址
// receiverZip（*）=邮编
// receiverName（*）=收货人姓名
// receiverMobile（*）=收货人手机
// receiverPhone（*）=收货人电话
// isDefault（*）=是否默认（1--默认，0--非默认）
export function addUserAddress(params) {
  const url = domainName + '/f/interface/wemall/userRelated/addUserAddress'
  return sendPost(url, params);
}

// 设置默认用户收货地址的接口
// id（*）=主键id
export function setDefaultUserAddr(params) {
  const url = domainName + '/f/interface/wemall/userRelated/setDefaultUserAddr'
  return sendPost(url, params);
}

// 更新用户收货地址的接口
// id（*）=主键id
// receiverCountry（*）=国家
// receiverProvince（*）=省份
// receiverCity（*）=城市
// receiverDistrict（*）=区县
// receiverAddress（*）=收货地址
// receiverZip（*）=邮编
// receiverName（*）=收货人姓名
// receiverMobile（*）=收货人手机
// receiverPhone（*）=收货人电话
// isDefault（*）=是否默认（1--默认，0--非默认）
export function updateUserAddress(params) {
  const url = domainName + '/f/interface/wemall/userRelated/updateUserAddress'
  return sendPost(url, params);
}

// 删除用户收货地址的接口
// ids（*）=主键id列表
export function deleteUserAddress(params) {
  const url = domainName + '/f/interface/wemall/userRelated/deleteUserAddress'
  return sendPost(url, params);
}

// 根据购物车id列表生成订单的接口
// shopCarStr（*）=购物车json字符串
export function generateOrderByShopCarIds(shopCarStr) {
  const url = domainName + '/f/interface/wemall/order/generateOrderByShopCarIds'
  const params = {shopCarStr: shopCarStr}
  return sendPost(url, params);
}

// 根据单个商品生成订单的接口
// itemId（*）=商品id
// itemNum（*）=商品数量
// itemSpecIds=商品属性id列表
export function generateOrderByItem(params) {
  const url = domainName + '/f/interface/wemall/order/generateOrderByItem'
  return sendPost(url, params);
}

// 更新订单地址的接口
// userAddressId（*）=收货地址id
// orderNo（*）=订单号
export function updateOrderAddress(params) {
  const url = domainName + '/f/interface/wemall/order/updateOrderAddress'
  return sendPost(url, params);
}

// 根据订单号和付款方式获取预付款id及付款签名信息的接口
// paymentType（*）=付款方式
// orderNo（*）=订单号
// buyerMessage=买家留言
// activityId=活动id
// activityType=活动类别
// scoreUsageNum=使用积分数
export function getPrepareIdForPay(params) {
  const url = domainName + '/f/interface/wemall/order/getPrepareIdForPay'
  return sendPost(url, params);
}

// 取消订单的接口
// orderNo（*）=订单号
export function cancelOrder(orderNo) {
  const url = domainName + '/f/interface/wemall/order/cancelOrder'
  const params = {orderNo: orderNo}
  return sendPost(url, params);
}

// 已付款取消订单的接口
// orderNo（*）=订单号
export function cancelOrderForAlreadyPaid(orderNo) {
  const url = domainName + '/f/interface/wemall/order/cancelOrderForAlreadyPaid'
  const params = {orderNo: orderNo}
  return sendPost(url, params);
}

// 用户确认收货的接口
// orderNo（*）=订单号
export function alreadyReceived(orderNo) {
  const url = domainName + '/f/interface/wemall/order/alreadyReceived'
  const params = {orderNo: orderNo}
  return sendPost(url, params);
}

// 根据订单商品id获取订单商品的接口
// id（*）=订单商品id
export function getOrderItemDetail(id) {
  const url = domainName + '/f/interface/wemall/order/getOrderItemDetail'
  const params = {id: id}
  return sendPost(url, params);
}

// 用户评论订单商品的接口
// id（*）=订单商品id
// buyerScore（*）=买家评分
// buyerMessage=买家留言
export function commentItem(params) {
  const url = domainName + '/f/interface/wemall/order/commentItem'
  return sendPost(url, params);
}

// 用户提交退货申请的接口
// orderNo（*）=订单号
export function applyForReject(orderNo) {
  const url = domainName + '/f/interface/wemall/order/applyForReject'
  const params = {orderNo: orderNo}
  return sendPost(url, params);
}


// 根据订单号获取订单详情的接口
// orderNo（*）=订单号
export function getOrderDetail(orderNo) {
  const url = domainName + '/f/interface/wemall/order/getOrderDetail'
  const params = {orderNo: orderNo}
  return sendPost(url, params);
}

// 获取订单列表的接口。
// status (*）=状态（1、未付款，2、已付款，3、已发货，4、已收货，5、已评论，6、交易退货，7、交易关闭，8、已取消）
// orderCategory=订单类别
export function getOrderList(params) {
  const url = domainName + '/f/interface/wemall/order/getOrderList'
  return sendPost(url, params);
}

// 保存用户信息的接口。
// id（*）
// mobile
// userName
// nickName
// sex
export function updateWemallUserInfo(params) {
  const url = domainName + '/f/interface/wemall/user/updateWemallUserInfo'
  return sendPost(url, params);
}

// 根据活动类别，获取当前未过期的活动列表的接口。
// activityType（*）=活动类别
export function findListByActivityType(activityType) {
  const url = domainName + '/f/interface/wemall/market/findListByActivityType'
  const params = {activityType: activityType}
  return sendPost(url, params);
}

// 根据活动id和活动类别，获取参与该活动的商品列表。
// activityId（*）=活动id
// activityType（*）=活动类别
export function findItemsByActivity(params) {
  const url = domainName + '/f/interface/wemall/market/findItemsByActivity'
  return sendPost(url, params);
}

// 获取充值设置列表。
export function getRechargeList() {
  const url = domainName + '/f/interface/wemall/market/getRechargeList'
  return sendPost(url, {});
}

// 根据单个商品生成订单的接口。
// rechargeId（*）=充值设定id
export function generateOrderByRecharge(rechargeId) {
  const url = domainName + '/f/interface/wemall/order/generateOrderByRecharge'
  const params = {rechargeId: rechargeId}
  return sendPost(url, params);
}

// 充值订单，根据订单号，付款方式生成并返回预付款id。
// paymentType（*）=付款方式
// orderNo（*）=订单号
// buyerMessage=买家留言
// needAddress=是否需要收货地址
export function getPrepareIdForRechargePay(params) {
  const url = domainName + '/f/interface/wemall/order/getPrepareIdForRechargePay'
  return sendPost(url, params);
}

// 获取公司宣传文章类别列表获取接口
export function getIntroduceData() {
  const url = domainName + '/f/interface/wemall/sys/getIntroduceData'
  return sendPost(url, {});
}

// 根据资讯类型进行分页查询
// category.id=类别id
// pageNo
// pageSize
export function getArticleListByCategory(params) {
  const url = domainName + '/f/interface/wemall/operate/getArticleListByCategory'
  return sendPost(url, params);
}

// 根据资讯文章id获取详情
// id=资讯文章id
export function getArticleById(id) {
  const url = domainName + '/f/interface/wemall/operate/getArticleById'
  const params = {id: id}
  return sendPost(url, params);
}

export function jsonToObj(str) {
  return JSON.parse(str);
}

export function objToJson(obj) {
  return JSON.stringify(obj);
}

export function wxPay(params) {
  function onBridgeReady(){
    WeixinJSBridge.invoke(
         'getBrandWCPayRequest', {
             "appId":params.appId,     //公众号名称，由商户传入     
             "timeStamp":params.timeStamp,         //时间戳，自1970年以来的秒数     
             "nonceStr":params.nonceStr, //随机串     
             "package":params.package,     
             "signType":params.signType,         //微信签名方式：     
             "paySign":params.paySign //微信签名 
         },
         function(res){
             if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                setTimeout(function() { 
                  window.location.href = "/#/Membercenter/orderstatus/waitsendgood";
                }, 1000);
             }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
         }
     ); 
  }
  if (typeof WeixinJSBridge == "undefined"){
     if( document.addEventListener ){
         document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
     }else if (document.attachEvent){
         document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
         document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
     }
  }else{
     onBridgeReady();
  }
}


function sendPost(url, params) {
  const data = params
  console.log("传参为：", params);
  console.log(url)

  // 格式化参数形式，用于post方式提交
  let ret = ''
  for (let it in data) {
    ret += '&' + it + '=' + data[it];
  }
  ret = ret + "&"

  console.log("传参为：", ret);
  return axios.post(url, {
    params: ret
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then((res) => {
    console.log("接收到的数据为：", res)
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
