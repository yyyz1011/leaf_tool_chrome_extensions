<script setup lang="ts">
import { ref } from 'vue';
import { showToast } from 'vant';
import { clone } from 'lodash-es';
import { useRouter } from 'vue-router';
import { Like } from '@icon-park/vue-next';
import { STORAGE_KEY } from '@/consts/overview';

const props = defineProps({
	info: {
		type: Object,
		required: true
	},
	index: {
		type: Number,
		required: true
	},
	linkFunc: {
		type: [Boolean, Function],
		default: false
	}
});
const router = useRouter();

const active = ref<boolean>(false);

function handleGoSubPage() {
	if (props.linkFunc) {
		(props as any).linkFunc?.(props.info);
		return;
	}
	router.push({
		name: 'overview-sub',
		query: {
			key: props.info.key
		}
	});
}

function initStorageInfo() {
	if (!localStorage.getItem(STORAGE_KEY)) {
		localStorage.setItem(STORAGE_KEY, '[]');
	}
	active.value = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]').includes(
		props.info.key
	);
}
initStorageInfo();

function handleCollect() {
	const list = clone(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'));
	if (list.includes(props.info.key)) {
		const index = list.findIndex((key: string) => key === props.info.key);
		list.splice(index, 1);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
		active.value = false;
		showToast({
			message: '取消收藏',
			icon: 'like-o'
		});
	} else {
		list.push(props.info.key);
		localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
		active.value = true;
		showToast({
			message: '收藏成功',
			icon: 'like'
		});
	}
}
</script>

<template>
	<div class="overview-card" @click="handleGoSubPage">
		<div class="overview-card--header">
			<div class="title">{{ props.index }} {{ props.info.title }}</div>
			<Like v-if="!active" @click.stop="handleCollect"></Like>
			<Like
				v-else
				theme="filled"
				fill="rgb(253, 90, 90)"
				@click.stop="handleCollect"
			></Like>
		</div>
		<div class="overview-card--content">
			<div class="desc">{{ props.info.desc }}</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.overview-card {
	@include overview_card_shadow();

	padding: 12px 8px;
	margin: 0 16px 8px;
	cursor: pointer;

	&--header {
		@include text_color();

		display: flex;
		justify-content: space-between;
		align-items: center;
		user-select: none;

		.title {
			font-size: 14px;
			font-weight: 600;
		}
	}

	&--content {
		@include text_color();

		padding-top: 12px;
		user-select: none;

		.desc {
			font-size: 10px;
		}
	}
}
</style>
