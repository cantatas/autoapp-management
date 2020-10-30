import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './commons/ant-design-use';
import './assets/css/reset.css';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
