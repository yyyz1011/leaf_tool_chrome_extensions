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
		path: '/overview-sub',
		name: 'overview-sub',
		component: () => import('@/views/overview/OverviewSub.vue')
	},
	{
		path: '/format-naming-convertor',
		name: 'naming-convertor',
		component: () => import('@/views/format/FormatNamingConvertor.vue')
	},
	{
		path: '/format-path-convertor',
		name: 'path-convertor',
		component: () => import('@/views/format/FormatPathConvertor.vue')
	},
	{
		path: '/format-statistics',
		name: 'statistics',
		component: () => import('@/views/format/FormatStatistics.vue')
	},
	// 以下路由废弃
	{
		path: '/tool-format-time',
		name: 'tool-format-time',
		component: () => import('@/views/tool/FormatTime.vue')
	},
	{
		path: '/tool-format-time-unix',
		name: 'tool-format-time-unix',
		component: () => import('@/views/tool/FormatTimeUnix.vue')
	},
	{
		path: '/tool-format-text-json',
		name: 'tool-format-text-json',
		component: () => import('@/views/tool/FormatTextJson.vue')
	}
];

export default createRouter({
	history: createWebHashHistory(),
	routes
});
