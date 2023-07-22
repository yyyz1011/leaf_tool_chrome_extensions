<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ROUTER_STORAGE_KEY } from '@/consts';

const router = useRouter();

const currentPage = localStorage.getItem(ROUTER_STORAGE_KEY);
if (currentPage && currentPage !== '/') {
  router.push(currentPage);
}
</script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="scss">
//
</style>
