<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ROUTER_STORAGE_KEY } from '@/consts';
import { ConfigProvider } from 'vant';
import { THEME_STORAGE_KEY } from '@/consts/index';
import { ref, onMounted } from 'vue';

const router = useRouter();
const theme = ref('light');

function init() {
	const currentPage = localStorage.getItem(ROUTER_STORAGE_KEY);
	if (currentPage && currentPage !== '/') {
		router.push(currentPage);
	}

	const initTheme = localStorage.getItem(THEME_STORAGE_KEY) ?? 'light';
	theme.value = initTheme;
	document.documentElement.setAttribute('data-theme', initTheme);
}
init();

onMounted(() => {
	window.addEventListener('setItemEvent', function (e: any) {
		if (e.key === THEME_STORAGE_KEY) {
			theme.value = e.newValue;
		}
	});
});
</script>

<template>
	<ConfigProvider :theme="theme">
		<router-view></router-view>
	</ConfigProvider>
</template>

<style scoped lang="scss">
//
</style>
