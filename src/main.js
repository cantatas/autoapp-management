import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { installAnt } from './commons/ant-design-use';
import './assets/css/reset.css';
Vue.config.productionTip = false

const install = function (Vue) {
  if (install.installed) return;
  installAnt(Vue);
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
