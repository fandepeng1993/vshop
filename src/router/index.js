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
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Homepage'
    },
    {
      path: '/Homepage',
      component: Homepage
    },
    {
      path: '/Joinsales',
      component: Joinsales
    },
    {
      path: '/Membercenter',
      component: Membercenter
    },
    {
      path: '/Shoppingcart',
      /* path: '/Shoppingcart/:id', */
      component: Shoppingcart
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
    }

  ]
})
