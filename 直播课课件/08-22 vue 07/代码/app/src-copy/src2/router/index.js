import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/views/Main.vue';
import Detail from '@/views/Detail.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

// 注册
Vue.use( VueRouter );
// 创建一个路由对象 和 koa 类似
let router = new VueRouter({
  mode: 'history',
  // 所有的路由映射，每一个路由就是一个对象
  routes: [
    {
      // path => component
      path: '/',
      name: 'Main',
      component: Main
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
});


export default router;