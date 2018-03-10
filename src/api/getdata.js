import jsonps from 'common/js/jsonp'
import {commonParams, options, domainName} from './config'
import axios from 'axios'
axios.defaults.withCredentials=true;
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

//获取商城首页数据
export function getWemallHomepage() {
  const url = domainName + '/f/interface/wemall/sys/getHomePageData'
  const data = {}
  return sendPost(url, data);
}

//获取商品分类信息
export function getItemSortList() {
  const url = domainName + '/f/interface/wemall/item/getItemSortList'
  const data = {}
  return sendPost(url, data);
}

//获取商品列表信息
export function getItemList(params) {
  const url = domainName + '/f/interface/wemall/item/getItemList'
  return sendPost(url, params);
}

//获取商品详情信息
export function getItemDetail(id) {
  const url = domainName + '/f/interface/wemall/item/getItemDetail'
  const params = {id: id}
  return sendPost(url, params);
}

//获取订单商品评价列表信息
export function getBuyerCommentList(params) {
  const url = domainName + '/f/interface/wemall/order/getBuyerCommentList'
  return sendPost(url, params);
}

//获取购物车列表信息
export function getShopCarList(params) {
  const url = domainName + '/f/interface/wemall/userRelated/getShopCarList'
  return sendPost(url, params);
}

//添加购物车信息//itemId.itemNum,itemSpecIds
export function addShopCarInfo(params) {
  const url = domainName + '/f/interface/wemall/userRelated/addShopCarInfo'
  return sendPost(url, params);
}

//删除购物车信息
export function removeShopCarInfo(ids) {
  const url = domainName + '/f/interface/wemall/userRelated/removeShopCarInfo'
  const params = {ids: ids}
  return sendPost(url, params);
}

//获取当前微信用户信息
export function getCurrentUser() {
  const url = domainName + '/f/interface/wemall/user/getCurrentUser'
  const data = {}
  return sendPost(url, data);
}

//获取积分明细列表信息
export function getScoreInfoList(params) {
  const url = domainName + '/f/interface/wemall/userRelated/getScoreInfoList'
  return sendPost(url, params);
}

//获取奖励金明细列表信息
export function getBountyInfoList(params) {
  const url = domainName + '/f/interface/wemall/userRelated/getBountyInfoList'
  return sendPost(url, params);
}

function sendPost(url, params) {
  const data = params
  console.log("传参为：", params);

  //格式化参数形式，用于post方式提交
  let ret = ''
  for (let it in data) {
    ret += '&' + it + '=' + data[it];
  }
  ret = ret + "&"

  console.log("传参为：", ret);
  return axios.post(url, {
    params: ret
  },{
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