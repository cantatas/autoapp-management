import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const routes = [{
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: r => require.ensure([], () => r(require('./modules/main/index.vue')), 'module-index'),
  },
  {
    path: '/editer',
    name: 'editer',
    component: r => require.ensure([], () => r(require('./modules/editer/index.vue')), 'module-editer'),
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