import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from '@/components/common/toast';
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload';

Vue.config.productionTip = false
// Vue.prototype.$bus=new Vue()

// 安装toast插件
Vue.use(toast)

// 解决移动端浏览器点击300ms延迟
FastClick.attach(document.body)

// 使用懒加载(最简单的用法)
Vue.use(LazyLoad)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
