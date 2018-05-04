import Vue from 'vue'
import Router from 'vue-router'

import ActiveOneIndex from '@/components/MarchActive/index'
import ActiveOneHome from '@/components/MarchActive/home'
import ActiveOneSuccess from '@/components/MarchActive/success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/MarchActive'
    },
    {
      path: '/MarchActive',
      component: ActiveOneIndex,
      children:[
        {
          path:'',
          redirect: '/MarchActive/home'
        },
        {
          path:'home',
          component : ActiveOneHome,
        },
        {
          path:'success',
          component : ActiveOneSuccess,
        }
      ]
    }
  ]
})
