import Vue from 'vue'
// Vue 单文件组件
// https://cn.vuejs.org/v2/guide/single-file-components.html
import App from './App.vue'

// @ => webpack resolve => /src 方法不同的地方去引用 src 目录
import '@/assets/static/css/css.css';

import router from '@/router';

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
