<script setup lang="ts">
import { NavBar } from 'vant';
import { useRouter } from 'vue-router';
import { ArrowLeft } from '@icon-park/vue-next';

const router = useRouter();
const props = defineProps({
	title: {
		type: String,
		default: ''
	},
	back: {
		type: String,
		default: 'overview'
	}
});

function handleBack() {
	router.push({
		name: props.back
	});
}
</script>

<template>
	<NavBar :title="props.title" fixed placeholder>
		<template #left>
			<ArrowLeft @click="handleBack"></ArrowLeft>
		</template>
	</NavBar>
</template>

<style scoped lang="scss">
.back-icon {
	width: 15px;
	height: 15px;
	cursor: pointer;
}
</style>
