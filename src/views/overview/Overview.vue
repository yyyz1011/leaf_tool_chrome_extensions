<script setup lang="ts">
import { ref } from 'vue';
import { NavBar } from 'vant';
import { useRouter } from 'vue-router';
import { Search } from '@icon-park/vue-next';
import { toolList, STORAGE_KEY } from '@/consts/overview';
import type { ToolChildrenItem } from '@/consts/overview';
import OverviewCard from '@/components/overview/OverviewCard.vue';
import NewFeatureTip from '@/components/basic/NewFeatureTip.vue';

const router = useRouter();

const list = ref<ToolChildrenItem[]>([]);

function initList() {
  const collectItem: ToolChildrenItem[] = [];
  const noCollectItem: ToolChildrenItem[] = [];
  const collectStorageList = JSON.parse(
    localStorage.getItem(STORAGE_KEY) ?? '[]'
  );
  toolList.forEach((item: any) => {
    if (collectStorageList.find((key: string) => key === item.key)) {
      collectItem.push(item);
    } else {
      noCollectItem.push(item);
    }
  });
  list.value = [...collectItem, ...noCollectItem];
}
initList();

function handleGoSearch() {
  router.push({
    name: 'overview-search'
  });
}
</script>

<template>
  <NavBar fixed placeholder safe-area-inset-top title="LeafTool工具库">
    <template #right>
      <Search @click="handleGoSearch"></Search>
    </template>
  </NavBar>
  <div v-for="(item, index) in list" :key="item.key" class="overview-wrapper">
    <OverviewCard :info="item" :index="index + 1"></OverviewCard>
  </div>
  <NewFeatureTip></NewFeatureTip>
</template>

<style lang="scss" scoped>
.overview-wrapper {
  margin-top: 12px;
}
</style>
