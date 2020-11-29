import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/myViewer',
      name: 'myViewer',
      component: () => import("@/views/myViewer"),
    },
    {
      path: '/overflowShow',
      name: 'overflowShow',
      component: () => import("@/views/overflowShow"),
    },{
      path: '/mySteps',
      name: 'mySteps',
      component: () => import("@/views/mySteps"),
    },{
      path: '/myUpLoad',
      name: 'myUpLoad',
      component: () => import("@/views/upLoad"),
    },{
      path: '/test',
      name: 'test',
      component: () => import("@/views/test"),
    },
  ]
})
