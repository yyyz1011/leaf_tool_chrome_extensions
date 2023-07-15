import { createRouter, createWebHashHistory } from 'vue-router';

interface RouteItem {
  path: string;
  name: string;
  component: any;
}

const routes: RouteItem[] = [
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
