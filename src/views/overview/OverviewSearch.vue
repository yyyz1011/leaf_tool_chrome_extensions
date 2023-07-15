<script setup lang="ts">
import { NavBar, Search, Empty } from 'vant';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import BackNavigateIcon from '@/assets/icon/back_navigate.png';

const searchVal = ref('');

const router = useRouter();

function handleBack() {
  router.push({
    name: 'overview'
  });
}
</script>

<template>
  <NavBar title="工具搜索">
    <template #left>
      <img :src="BackNavigateIcon" class="back-icon" @click="handleBack" />
    </template>
  </NavBar>
  <Search v-model="searchVal" placeholder="请输入搜索功能"></Search>
  <Empty>
    <template #description>
      <div class="description-text">暂无功能或功能未开发</div>
      <div class="description-text">
        请联系：
        <a
          href="https://github.com/yyyz1011/leaf_tool_chrome_extensions/issues"
          target="_blank"
        >
          开发者打工人
        </a>
        新增功能
      </div>
    </template>
  </Empty>
</template>

<style scoped lang="scss">
.back-icon {
  width: 15px;
  height: 15px;
  cursor: pointer;
}

.description-text {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep .van-empty__description {
  padding: 0 !important;
}
</style>
