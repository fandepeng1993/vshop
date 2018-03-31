import Vue from 'vue'
import Router from 'vue-router'
import Homepage from 'components/homepage/homepage'
import Groupgoods from 'components/groupgoods/groupgoods'
import Joinsales from 'components/joinsales/joinsales'
import Membercenter from 'components/membercenter/membercenter'
import Shoppingcart from 'components/shoppingcart/shoppingcart'
import Goodsinfomation from 'components/goodsinfomation/goodsinfomation'
import Comprehensive from 'components/fourtabRouter/isat-comprehensive'
import SalesVolume from 'components/fourtabRouter/isat-salesVolume'
import NewProduct from 'components/fourtabRouter/isat-newProduct'
import Price from 'components/fourtabRouter/isat-price'
import Loginpage from 'components/loginpage/loginpage'
import Goodsdetail from 'components/goodsdetail/goodsdetail'
import Singlepagegoods from 'base/singlepagegoods/singlepagegoods'
import Orderstatus from 'components/orderstatus/orderstatus'
import Singerorderstate from 'components/singerorderstate/singerorderstate'
import Bounty from 'components/bounty/bounty'
import IncomeIndetail from 'components/incomeIndetail/incomeIndetail'
import Bonusrules from 'components/bonusrules/bonusrules'
import Receiveraddress from 'components/receiveraddress/receiveraddress'
import Addreceiveradd from 'components/addreceiveradd/addreceiveradd'
import Membershipcard from 'components/membershipcard/membershipcard'
import MembershipcardList from 'components/membershipcardList/membershipcardList'
import MembershipcardInfo from 'components/membershipcardInfo/membershipcardInfo'
import Integralmall from 'components/integralmall/integralmall'
import Deduction from 'components/deduction/deduction'
import Integrationinfo from 'components/integrationinfo/integrationinfo'
import IntegrationinfoList from 'components/integrationinfoList/integrationinfoList'
import Integrationrule from 'components/integrationrule/integrationrule'
import Coupons from 'components/coupons/coupons'
import Couponslist from 'components/couponslist/couponslist'
import Crazybargaining from 'components/crazybargaining/crazybargaining'
import Crazybargaininglist from 'components/crazybargaininglist/crazybargaininglist'
import Mygroup from 'components/mygroup/mygroup'
import Mygrouplist from 'components/mygrouplist/mygrouplist'
import Personalsetting from 'components/personalsetting/personalsetting'
import Personalsettingpage from 'components/personalsettingpage/personalsettingpage'
import UploadImg from 'components/uploadImg/uploadImg'
import afterSale from 'components/afterSale/afterSale'
import aftercontent from 'components/aftercontent/aftercontent'
import orderconfirm from 'components/orderconfirm/orderconfirm'
import orderdetail from 'components/orderdetail/orderdetail'
/*import chooseaddress from 'base/chooseaddress/chooseaddress'*/
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Homepage'
    },
    {
      path: '/Homepage',
      component: Homepage,
      name: '主页',
      props: {
        mms: '主页'
      }
    },
    {
      path: '/Joinsales',
      component: Joinsales
    },
    {
      path: '/Membercenter',
      component: Membercenter,
     /*meta: {
        keepAlive: true // 不需要缓存
      },*/
      children: [
        {
          path: 'orderstatus',
          component: Orderstatus,
          children: [
            {
              path: ':id',
              component: Singerorderstate,
              name: 'orderstate'
            },
            {
              path: '',
              redirect: 'allorder'
            }
          ]
        },
        {
          path: 'bounty',
          component: Bounty,
          children: [
            {
              path: ':id', component: IncomeIndetail, name: 'IncomeIndetail'
            },
            {
              path: '',
              redirect: 'all'
            }
          ]
        },
        {
          path: 'bonusrules',
          component: Bonusrules
        },
        {
          path: 'membershipcard',
          component: Membershipcard,
          children: [
            {
              path: 'membershipcardList',
              component: MembershipcardList,
              children: [
                {
                  path: 'membershipcardInfo',
                  component: MembershipcardInfo
                }
              ]
            }
          ]
        },
        {
          path: 'integralmall',
          component: Integralmall,
          children: [
            {
              path: ':id',
              component: Deduction
            }
          ]
        },
        {
          path: 'integrationinfo',
          component: Integrationinfo,
          children: [
            {
              path: ':id',
              component: IntegrationinfoList
            }
          ]
        },
        {
          path: 'integrationrule',
          component: Integrationrule
        },
        {
          path: 'coupons',
          component: Coupons,
          children: [
            {
              path: ':id',
              component: Couponslist
            }
          ]
        },
        {
          path: 'crazybargaining',
          component: Crazybargaining,
          children: [
            {
              path: ':id',
              component: Crazybargaininglist
            }
          ]
        },
        {
          path: 'mygroup',
          component: Mygroup,
          children: [
            {
              path: ':id',
              component: Mygrouplist
            }
          ]
        },
        {
          path: 'personalsetting',
          component: Personalsetting,
          children: [
            {
              path: ':id',
              component: Personalsettingpage,
              children: [
                {
                  path: 'uploadImg',
                  component: UploadImg
                }
              ]
            }
          ]
        },
        {
          path: 'receiveraddress',
          component: Receiveraddress
        },
        {
          path: 'addreceiveradd',
          component: Addreceiveradd
        },
        {
          path: 'addreceiveradd/:id',
          component: Addreceiveradd
        },
        {
          path: 'afterSale',
          component: afterSale,
          children: [
            {
              path: ':id',
              component: aftercontent
            }
          ]
        }
      ]
    },
    {
      path: '/Shoppingcart',
      /* path: '/Shoppingcart/:id', */
      component: Shoppingcart,
      props: {
        mms: '购物车'
      },
      name: 'shopcart'
    },
    {
      path: '/orderconfirm/:id',
      component: orderconfirm/*,
      children: [
        {
          path: 'chooseaddress',
          component: chooseaddress
        }
      ]*/
     /* meta: {
        keepAlive: true // 不需要缓存
      }*/
    },
    {
      path:'/orderdetail/:id',
      component: orderdetail
      /*meta: {
        keepAlive: true // 不需要缓存
      }*/
    },
    {
      path: '/login',
      component: Loginpage
    },
    {
      path: '/Groupgoods',
      component: Groupgoods,
      children: [
        {
          path: ':id',
          component: Goodsinfomation,
          children: [
            {
              /* 注意在children中 path 是不允许加斜杠的 */
              path: 'comprehensive',
              component: Comprehensive
            },
            {
              path: 'salesVolume',
              component: SalesVolume
            },
            {
              path: 'newProduct',
              component: NewProduct
            },
            {
              path: 'price',
              component: Price
            },
            {
              path: '',
              redirect: 'comprehensive'
            }
          ]
        }
      ]
    },
    {
      path: '/Goodsdetail',
      component: Goodsdetail,
      children: [
        {
          path: ':id',
          component: Singlepagegoods
        },
        {
          path: '',
          redirect: '/Groupgoods'
        }
      ]
    }
  ]
})
