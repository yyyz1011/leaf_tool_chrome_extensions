<script setup lang="ts">
import { ref } from 'vue';
import { Field, Button, CellGroup, Cell } from 'vant';
import Header from '@/components/basic/Header.vue';
import { formatPathInfo } from '@/utils/format';
import type { FormatPathInfoResp } from '@/utils/format';

const pathVal = ref<string>('');
const resList = ref<FormatPathInfoResp[]>([]);

function handleDealPath() {
  resList.value = pathVal.value
    .split('\n')
    .filter(Boolean)
    .map((path) => {
      return formatPathInfo(path);
    });
}
</script>

<template>
  <Header title="路径转换"></Header>
  <div class="path-convertor-wrapper">
    <Field
      v-model="pathVal"
      rows="1"
      autosize
      label="路径"
      type="textarea"
      label-width="30px"
      placeholder="请输入路径，一行一个"
    ></Field>
    <Button block square type="primary" @click="handleDealPath">生成</Button>
  </div>
  <template v-if="resList.length > 0">
    <CellGroup
      v-for="(item, idx) in resList"
      :key="`res-path-${idx}`"
      :title="`结果${idx}`"
    >
      <Cell title="完整路径" :value="item.path"></Cell>
      <Cell title="文件路径" :value="item.pathName"></Cell>
      <Cell title="文件名" :value="item.fileName"></Cell>
    </CellGroup>
  </template>
</template>

<style scoped lang="scss"></style>
