<script setup lang="ts">
import Header from '@/components/basic/Header.vue';
import FormatTransform from '../../components/tool/FormatTransform.vue';

function transformFunc(str: string): string {
  let temp = str.replace(/[A-Z]/g, (match) => {
    return `_${match.toLowerCase()}`;
  });
  if (temp.slice(0, 1) === '_') {
    // 如果首字母是大写，执行replace时会多一个_，这里需要去掉
    temp = temp.slice(1);
  }
  return temp;
}
</script>

<template>
  <Header title="驼峰转下划线"></Header>
  <FormatTransform
    title="驼峰转下划线"
    :transform-func="transformFunc"
  ></FormatTransform>
</template>