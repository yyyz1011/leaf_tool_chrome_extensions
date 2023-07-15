import { createApp } from 'vue';
import App from './App.vue';
import { ConfigProvider } from 'vant';
import '@/assets/scss/common.scss';
import router from '@/router';

const app = createApp(App);
app.use(ConfigProvider);
app.use(router);

app.mount('#app');
