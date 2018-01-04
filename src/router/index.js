import Vue from 'vue'
import Router from 'vue-router'
import Homepage from 'components/homepage/homepage'
import Groupgoods from 'components/groupgoods/groupgoods'
import Joinsales from 'components/joinsales/joinsales'
import Membercenter from 'components/membercenter/membercenter'
import Shoppingcart from 'components/shoppingcart/shoppingcart'
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
      component: Groupgoods
    }

  ]
})
