<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { Tab, Tabs } from 'vant';

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: String,
    default: ''
  }
});
const emits = defineEmits(['update:modelValue']);

const active = ref(props.modelValue);
const tabList = ref<any>(props.list);

watchEffect(() => {
  active.value = props.modelValue;
});

function handleChangeTab(key: string) {
  active.value = key;
  emits('update:modelValue', key);
}
</script>

<template>
  <div class="tool-tab-list">
    <Tabs v-model="active" sticky :ellipsis="false" @change="handleChangeTab">
      <Tab
        v-for="item in tabList"
        :key="item.key"
        :name="item.key"
        :title="item.label"
      ></Tab>
    </Tabs>
  </div>
</template>
