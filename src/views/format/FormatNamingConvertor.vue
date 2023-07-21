<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/basic/Header.vue';
import ToolTabList from '@/components/basic/ToolTabList.vue';
import FormatTransform from '@/components/tool/FormatTransform.vue';
import {
  formatToUnderline,
  formatToHump,
  formatToUpperCase,
  formatToLowerCase
} from '@/utils/format';
import {
  FormatNamingConvertorList,
  HUMP2UNDERLINE,
  UNDERLINE2HUMP,
  STR2UPPERCASE,
  SRT2LOWERCASE
} from '@/consts/tool';

const active = ref(FormatNamingConvertorList[0].key);

function transformFunc(str: string) {
  switch (active.value) {
    case HUMP2UNDERLINE:
      return formatToUnderline(str);
    case UNDERLINE2HUMP:
      return formatToHump(str);
    case STR2UPPERCASE:
      return formatToUpperCase(str);
    case SRT2LOWERCASE:
      return formatToLowerCase(str);
    default:
      return str;
  }
}
</script>

<template>
  <Header title="命名风格转换" back="overview-sub"></Header>
  <ToolTabList v-model="active" :list="FormatNamingConvertorList"></ToolTabList>
  <FormatTransform
    title="变量"
    :transform-func="transformFunc"
  ></FormatTransform>
</template>
