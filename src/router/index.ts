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
  },
  {
    path: '/tool-format-underline',
    name: 'tool-format-underline',
    component: () => import('@/views/tool/FormatUnderline.vue')
  },
  {
    path: '/tool-format-hump',
    name: 'tool-format-hump',
    component: () => import('@/views/tool/FormatHump.vue')
  },
  {
    path: '/tool-format-upper-case',
    name: 'tool-format-upper-case',
    component: () => import('@/views/tool/FormatUpperCase.vue')
  },
  {
    path: '/tool-format-lower-case',
    name: 'tool-format-lower-case',
    component: () => import('@/views/tool/FormatLowerCase.vue')
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
