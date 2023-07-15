 <script setup lang="ts">
import Header from '@/components/basic/Header.vue';
import FormatTransform from '../../components/tool/FormatTransform.vue';

function transformFunc(str: string): string {
  return str.replace(/([^_])(?:_+([^_]))/g, ($0, $1, $2) => {
    return $1 + $2.toUpperCase();
  });
}
</script>

<template>
  <Header title="下划线转驼峰"></Header>
  <FormatTransform
    title="下划线变量"
    :transform-func="transformFunc"
  ></FormatTransform>
</template>