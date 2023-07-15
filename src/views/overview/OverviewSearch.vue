<script setup lang="ts">
import { NavBar, Search, Empty, CellGroup, Cell } from 'vant';
import { useRouter } from 'vue-router';
import { ref, watch, computed } from 'vue';
import pinyin from 'pinyin';
import { debounce } from 'lodash-es';
import BackNavigateIcon from '@/assets/icon/back_navigate.png';
import { toolList } from '@/consts/overview';

const searchVal = ref('');
const list = ref<any>([]);
const searchList = ref<any>([]);

const router = useRouter();

watch(
  () => searchVal.value,
  debounce((val) => {
    if (!val) {
      searchList.value = [];
    } else {
      const res = list.value.filter((item: any) =>
        Boolean(item.title.includes(val) || item.pinyinTitle.includes(val))
      );
      searchList.value = res;
    }
  }, 150)
);

/**
 * 对toolList进行处理，增加拼音支持英文搜索
 */
function initToolList() {
  const resList: any = [];
  toolList.forEach((item) => {
    item.children.forEach((cItem) => {
      resList.push({
        ...cItem,
        title: cItem.title,
        pinyinTitle: pinyin(cItem.title, {
          compact: true,
          style: 'normal'
        })?.[0]?.join('')
      });
    });
  });
  list.value = resList;
}
initToolList();

function handleBack() {
  router.push({
    name: 'overview'
  });
}

const isNoSearchData = computed(
  () => searchVal.value && searchList.value.length === 0
);
const hasSearchData = computed(
  () => searchVal.value && searchList.value.length > 0
);
</script>

<template>
  <NavBar title="工具搜索">
    <template #left>
      <img :src="BackNavigateIcon" class="back-icon" @click="handleBack" />
    </template>
  </NavBar>
  <Search v-model="searchVal" placeholder="请输入搜索功能"></Search>

  <div v-if="hasSearchData">
    <CellGroup title="搜索结果">
      <Cell
        v-for="item in searchList"
        :key="item.key"
        :title="item.title"
        is-link
        :to="item.to"
      ></Cell>
    </CellGroup>
  </div>
  <Empty v-else>
    <template #description>
      <div v-if="isNoSearchData">
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
      </div>
      <div v-else>暂无内容</div>
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
