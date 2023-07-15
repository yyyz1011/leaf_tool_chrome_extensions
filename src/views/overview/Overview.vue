<script setup lang="ts">
import { NavBar, Cell, CellGroup } from 'vant';
import { useRouter } from 'vue-router';
import { toolList } from '@/consts/overview';
import SearchIcon from '@/assets/icon/search.png';

const router = useRouter();

function handleGoSearch() {
  router.push({
    name: 'overview-search'
  });
}
</script>

<template>
  <NavBar fixed placeholder safe-area-inset-top title="LeafTool工具库">
    <template #right>
      <img class="search-icon" :src="SearchIcon" @click="handleGoSearch" />
    </template>
  </NavBar>
  <CellGroup v-for="item in toolList" :key="item.key" :title="item.title">
    <Cell
      v-for="cItem in item.children"
      :key="cItem.key"
      :title="cItem.title"
      is-link
      :to="cItem.to"
    ></Cell>
  </CellGroup>
  <div class="bottom-tip">
    到底啦，更多功能请联系
    <a
      href="https://github.com/yyyz1011/leaf_tool_chrome_extensions/issues"
      target="_blank"
    >
      开发者打工人
    </a>
  </div>
</template>

<style lang="scss" scoped>
.search-icon {
  width: 15px;
  height: 15px;
  cursor: pointer;
}

.bottom-tip {
  color: #969799;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  padding: 8px 0 16px;
}
</style>