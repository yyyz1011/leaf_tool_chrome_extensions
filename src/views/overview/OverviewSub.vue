<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { toolList, STORAGE_KEY } from '@/consts/overview';
import Header from '@/components/basic/Header.vue';
import type { ToolChildrenItem } from '@/consts/overview';
import OverviewCard from '@/components/overview/OverviewCard.vue';
import NewFeatureTip from '@/components/basic/NewFeatureTip.vue';

const route = useRoute();
const router = useRouter();

const curOverviewInfo = computed(() =>
  toolList.find((item) => item.key === route.query?.key ?? 'string-format')
);
const curNavTitle = computed(() => curOverviewInfo.value?.title);
const curSubToolList = computed(() => {
  const collectItem: ToolChildrenItem[] = [];
  const noCollectItem: ToolChildrenItem[] = [];
  const collectStorageList = JSON.parse(
    localStorage.getItem(STORAGE_KEY) ?? '[]'
  );
  curOverviewInfo.value?.children.forEach((item: any) => {
    if (collectStorageList.find((key: string) => key === item.key)) {
      collectItem.push(item);
    } else {
      noCollectItem.push(item);
    }
  });
  return [...collectItem, ...noCollectItem];
});

function linkFunc(val: any) {
  router.push({
    name: val.to
  });
}
</script>

<template>
  <Header :title="curNavTitle"></Header>
  <div
    v-for="(item, index) in curSubToolList"
    :key="item.key"
    class="overview-wrapper"
  >
    <OverviewCard
      :info="item"
      :index="index + 1"
      :link-func="linkFunc"
    ></OverviewCard>
  </div>
  <NewFeatureTip></NewFeatureTip>
</template>

<style scoped lang="scss">
.overview-wrapper {
  margin-top: 12px;
}
</style>
