<script setup lang="ts">
import { showSuccessToast } from 'vant';
import Header from '@/components/basic/Header.vue';
import FormatTransform from '../../components/tool/FormatTransform.vue';
import { ref } from 'vue';
import JsonViewer from 'vue-json-viewer';
import 'vue-json-viewer/style.css';

const errMsg = ref<string>('');

function transformFunc(str: string): string {
	return str;
}

function getJsonObj(jsonText: string) {
	if (jsonText.trim() === '') {
		return {};
	}

	let obj = {};
	try {
		// eslint-disable-next-line no-eval
		obj = eval(`(${(jsonText as any).replaceAll(`'`, `"`)})`);
		errMsg.value = '';
	} catch (e) {
		errMsg.value = `解析出错:${e}`;
	}
	return obj;
}

function handleCopy() {
	showSuccessToast('复制成功');
}
</script>

<template>
	<Header title="json格式化"></Header>
	<FormatTransform
		title="json"
		:transform-func="transformFunc"
		:field-props="{
			rows: 2,
			autosize: true,
			type: 'textarea'
		}"
	>
		<template #res-content="{ res }">
			<div v-if="!res">内容为空</div>
			<div v-else-if="errMsg" class="err-message">{{ errMsg }}</div>
			<JsonViewer
				v-else
				:value="getJsonObj(res)"
				sort
				show-double-quotes
				copyable
				@copied="handleCopy"
			></JsonViewer>
		</template>
	</FormatTransform>
</template>

<style scoped lang="scss">
.err-message {
	color: rgb(255 46 46);
}
</style>
