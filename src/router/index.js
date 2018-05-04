import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import ActiveOneIndex from '@/components/MarchActive/index'
import ActiveOneHome from '@/components/MarchActive/home'
import ActiveOneSuccess from '@/components/MarchActive/success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
