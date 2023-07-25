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
	<NavBar :title="props.title" fixed placeholder @click-left="handleBack">
		<template #left>
			<ArrowLeft class="icon"></ArrowLeft>
		</template>
	</NavBar>
</template>

<style scoped lang="scss">
.icon {
	@include text_color();
}
</style>
