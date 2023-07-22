<script setup lang="ts">
import { ref } from 'vue';
import {
  Field,
  Button,
  CellGroup,
  Cell,
  showFailToast,
  showSuccessToast
} from 'vant';
import { isNull } from 'lodash-es';
import Header from '@/components/basic/Header.vue';
import { formatTextInfo } from '@/utils/format';
import type { FormatTextInfoResp } from '@/utils/format';

const textVal = ref<string>('');
const textInfo = ref<FormatTextInfoResp | null>(null);

function handleDealText() {
  if (!textVal.value) {
    showFailToast('文本内容为空');
    return;
  }
  const data = formatTextInfo(textVal.value);
  textInfo.value = data;
  showSuccessToast('分析成功');
}
</script>

<template>
  <Header title="统计"></Header>
  <Field
    v-model="textVal"
    rows="1"
    autosize
    label="文本"
    type="textarea"
    label-width="30px"
    placeholder="请输入文本内容"
  ></Field>
  <Button block square type="primary" @click="handleDealText">分析</Button>
  <CellGroup v-if="!isNull(textInfo)" title="分析结果">
    <Cell title="段落" :value="textInfo?.paragraphs"></Cell>
    <Cell title="总字符数" :value="textInfo?.textLength"></Cell>
    <Cell title="总标点数" :value="textInfo?.countPunctuation"></Cell>
    <Cell
      title="纯文本数(去标点)"
      :value="textInfo?.textLength - textInfo?.countPunctuation"
    ></Cell>
    <Cell title="汉字数" :value="textInfo?.chineseCount"></Cell>
    <Cell title="字母数" :value="textInfo?.englishCount"></Cell>
  </CellGroup>
</template>
