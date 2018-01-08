import Vue from 'vue'
import Router from 'vue-router'
import Homepage from 'components/homepage/homepage'
import Groupgoods from 'components/groupgoods/groupgoods'
import Joinsales from 'components/joinsales/joinsales'
import Membercenter from 'components/membercenter/membercenter'
import Shoppingcart from 'components/shoppingcart/shoppingcart'
import Goodsinfomation from 'components/goodsinfomation/goodsinfomation'
import GoodsList from 'components/goodsList/goodsList'
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
      component: Shoppingcart
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
              component: GoodsList
            },
            {
              path: 'salesVolume',
              component: GoodsList
            },
            {
              path: 'newProduct',
              component: GoodsList
            },
            {
              path: 'price',
              component: GoodsList
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
