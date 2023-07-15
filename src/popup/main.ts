import { createApp } from 'vue';
import { ConfigProvider } from 'vant';
import App from './App.vue';
import '@/assets/scss/common.scss';
import 'vant/lib/index.css';
import router from '@/router';

const app = createApp(App);
app.use(ConfigProvider);
app.use(router);

app.mount('#app');
