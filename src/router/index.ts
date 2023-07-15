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
  },
  {
    path: '/search',
    name: 'overview-search',
    component: () => import('@/views/overview/OverviewSearch.vue')
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
