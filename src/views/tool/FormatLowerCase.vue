<script setup lang="ts">
import Header from '@/components/basic/Header.vue';
import FormatTransform from '../../components/tool/FormatTransform.vue';

function transformFunc(str: string): string {
  return str.toLowerCase();
}
</script>

<template>
  <Header title="变量转小写"></Header>
  <FormatTransform
    title="变量"
    :transform-func="transformFunc"
  ></FormatTransform>
</template>