import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'overview',
    component: () => import('@/views/overview/Overview.vue')
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
