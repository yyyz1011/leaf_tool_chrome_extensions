<script setup lang="ts">
import Header from '@/components/basic/Header.vue';
import FormatTransform from '../../components/tool/FormatTransform.vue';

function transformFunc(str: string): string {
  return str.toUpperCase();
}
</script>

<template>
  <Header title="变量转大写"></Header>
  <FormatTransform
    title="变量"
    :transform-func="transformFunc"
  ></FormatTransform>
</template>