<script setup lang="ts">
import { ref, computed } from 'vue';
import Header from '@/components/basic/Header.vue';
import ToolTabList from '@/components/basic/ToolTabList.vue';
import FormatTransform from '@/components/tool/FormatTransform.vue';
import {
  formatHump2Underline,
  formatUnderLine2Hump,
  formatStr2UpperCase,
  formatStr2LowerCase
} from '@/utils/format';

const list = [
  {
    key: 'hump2Underline',
    label: '驼峰转下划线'
  },
  {
    key: 'underline2Hump',
    label: '下划线转驼峰'
  },
  {
    key: 'str2UpperCase',
    label: '变量转大写'
  },
  {
    key: 'str2LowerCase',
    label: '变量转小写'
  }
];

const active = ref(list[0].key);

function transformFunc(str: string) {
  switch (active.value) {
    case 'hump2Underline':
      return formatHump2Underline(str);
    case 'underline2Hump':
      return formatUnderLine2Hump(str);
    case 'str2UpperCase':
      return formatStr2UpperCase(str);
    case 'str2LowerCase':
      return formatStr2LowerCase(str);
    default:
      return str;
  }
}
</script>

<template>
  <Header title="命名风格转换" back="overview-sub"></Header>
  <ToolTabList v-model="active" :list="list"></ToolTabList>
  <FormatTransform
    title="变量"
    :transform-func="transformFunc"
  ></FormatTransform>
</template>
