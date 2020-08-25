import Vue from 'vue';
import VueRouter from 'vue-router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Main from '@/views/Main.vue';
import Detail from '@/views/Detail.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import User from '@/views/User.vue';
import UserProfile from '@/views/User/Profile.vue';
import UserCart from '@/views/User/Cart.vue';

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
    // redirect : 重定向
    {
      path: '/detail/:id',
      redirect: {name: 'Detail'}
    },
    {
        path: '/view/:id',
        name: 'Detail',
        // props 把路由中的 prarms 转成（注入）到组件的 props 中
        props: true,
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
    },
    
    {
      path: '/user',
      // name: 'User',
      component: User,
      children: [
        {
          // path 如果还是以 / 表示绝对 path，而不是相对于其父路由的path
          // path: '/profile',
          // path: 'profile',
          // 如果需要设置默认子路由，那么path就可以留空，同时父级的name不需要设置
          path: '',
          // name: 'UserProfile',
          name: 'User',
          component: UserProfile
        },
        {
          path: 'cart',
          name: 'UserCart',
          component: UserCart
        }
      ]
    }
    
  ]
});

router.beforeEach( (to, from, next) => {

  NProgress.start();

  next();

} );

router.afterEach(() => {

  NProgress.done();

})

export default router;