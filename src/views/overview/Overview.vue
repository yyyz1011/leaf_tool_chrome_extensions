<script setup lang="ts">
import { NavBar, Cell, CellGroup } from 'vant';
import { toolList } from '@/consts/overview';
</script>

<template>
  <NavBar title="LeafTool工具库"></NavBar>
  <CellGroup v-for="item in toolList" :key="item.key" :title="item.title">
    <Cell
      v-for="cItem in item.children"
      :key="cItem.key"
      :title="cItem.title"
      is-link
      :to="cItem.to"
    ></Cell>
  </CellGroup>
</template>