<script setup lang="ts">
import { ref } from 'vue';
import {
	Field,
	Button,
	CellGroup,
	Cell,
	showSuccessToast,
	showFailToast
} from 'vant';
import { Copy } from '@icon-park/vue-next';
import Header from '@/components/basic/Header.vue';
import { formatPathInfo } from '@/utils/format';
import type { FormatPathInfoResp } from '@/utils/format';
import { handleCopy } from '@/utils/copy';

const pathVal = ref<string>('');
const resList = ref<FormatPathInfoResp[]>([]);

function handleDealPath() {
	if (!pathVal.value) {
		showFailToast('内容不能为空');
		return;
	}
	resList.value = pathVal.value
		.split('\n')
		.filter(Boolean)
		.map((path) => {
			return formatPathInfo(path);
		});
	if (resList.value.length > 0) {
		showSuccessToast(`生成成功，共${resList.value.length}个结果`);
	}
}
</script>

<template>
	<Header title="路径转换"></Header>
	<div class="path-convertor-wrapper">
		<Field
			v-model="pathVal"
			rows="1"
			autosize
			label="路径"
			type="textarea"
			label-width="30px"
			placeholder="请输入路径，一行一个"
		></Field>
		<Button block square type="primary" @click="handleDealPath">生成</Button>
	</div>
	<template v-if="resList.length > 0">
		<CellGroup
			v-for="(item, idx) in resList"
			:key="`res-path-${idx}`"
			:title="`结果${idx + 1}`"
		>
			<Cell title="完整路径">
				{{ item.path }}
				<Copy
					v-if="item.path"
					class="copy-icon"
					@click="() => handleCopy(item.path)"
				></Copy>
			</Cell>
			<Cell title="文件路径">
				{{ item.pathName }}
				<Copy
					v-if="item.pathName"
					class="copy-icon"
					@click="() => handleCopy(item.pathName)"
				></Copy>
			</Cell>
			<Cell title="文件名">
				{{ item.fileName }}
				<Copy
					v-if="item.fileName"
					class="copy-icon"
					@click="() => handleCopy(item.fileName)"
				></Copy>
			</Cell>
		</CellGroup>
	</template>
</template>

<style scoped lang="scss">
.copy-icon {
	margin-left: 4px;
}
</style>
