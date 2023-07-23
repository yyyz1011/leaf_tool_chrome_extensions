<script setup lang="ts">
import Header from '@/components/basic/Header.vue';
import { CellGroup, Cell, showDialog, showSuccessToast } from 'vant';
import { ref, computed } from 'vue';
import { THEME_STORAGE_KEY } from '@/consts/index';

const isOpenDarkTheme = ref<boolean>(false);

const themeText = computed(() =>
	isOpenDarkTheme.value ? '黑夜模式' : '白天模式'
);

function initSettingInfo() {
	isOpenDarkTheme.value = Boolean(
		(localStorage.getItem(THEME_STORAGE_KEY) ?? 'light') === 'dark'
	);
}
initSettingInfo();

async function handleChangeTheme() {
	try {
		await showDialog({
			title: '主题更改',
			message: `确认更改为${
				isOpenDarkTheme.value ? '白天模式' : '黑夜模式'
			}吗？`,
			showCancelButton: true,
			confirmButtonText: '更改主题'
		});
		isOpenDarkTheme.value = !isOpenDarkTheme.value;
		localStorage.setItem(
			THEME_STORAGE_KEY,
			isOpenDarkTheme.value ? 'dark' : 'light'
		);
		document.documentElement.setAttribute(
			'data-theme',
			isOpenDarkTheme.value ? 'dark' : 'light'
		);
		showSuccessToast('主题切换成功');
	} catch {
		//
	}
}

async function handleCallBack() {
	try {
		await showDialog({
			title: '反馈',
			message: '请点击链接前往反馈',
			confirmButtonText: '我要反馈'
		});
		window.open(
			'https://github.com/yyyz1011/leaf_tool_chrome_extensions/issues',
			'_target'
		);
	} catch {
		//
	}
}
</script>

<template>
	<Header title="设置"></Header>
	<CellGroup>
		<Cell
			title="主题设置"
			:value="themeText"
			is-link
			@click="handleChangeTheme"
		></Cell>
		<Cell title="反馈" value="我要反馈" is-link @click="handleCallBack"></Cell>
	</CellGroup>
</template>
