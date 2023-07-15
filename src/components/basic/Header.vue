<script setup lang="ts">
import { NavBar } from 'vant';
import { useRouter } from 'vue-router';
import BackNavigateIcon from '@/assets/icon/back_navigate.png';

const router = useRouter();
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
});

function handleBack() {
  router.back();
}
</script>

<template>
  <NavBar :title="props.title">
    <template #left>
      <img :src="BackNavigateIcon" class="back-icon" @click="handleBack" />
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
