import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
      path: '/index',
      name: 'index',
      component: r => require.ensure([], () => r(require('./modules/main/index.vue')), 'module-index'),
  },
  {
      path: '/login',
      name: 'login',
      component: r => require.ensure([], () => r(require('./modules/login/index.vue')), 'module-index'),
  },
]

export default new Router({
  routes
});