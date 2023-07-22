import { createApp } from 'vue';
import { ConfigProvider } from 'vant';
import App from './App.vue';
import '@/assets/scss/common.scss';
import 'vant/lib/index.css';
import '@icon-park/vue-next/styles/index.css';
import router from '@/router';
import { ROUTER_STORAGE_KEY } from '@/consts/index';

const app = createApp(App);
app.use(ConfigProvider);
app.use(router);

app.mount('#app');

router.beforeEach((to, from, next) => {
	localStorage.setItem(ROUTER_STORAGE_KEY, to.fullPath);
	next();
});
