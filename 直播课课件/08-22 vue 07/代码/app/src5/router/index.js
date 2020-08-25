import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/views/Main.vue';
import View from '@/views/View.vue';
import List from '@/views/List.vue';

Vue.use( VueRouter );
let router = new VueRouter({
  mode: 'history',

  scrollBehavior(to, from, savedPosition) {
    console.log('scrollBehavior');

    console.log('savedPosition', savedPosition);

    // 路由跳转后的页面滚动条的位置
    return savedPosition || {
      x: 0,
      y: 0
    }
  },

  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/view',
      name: 'View',
      component: View
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
    
  ]
});

export default router;