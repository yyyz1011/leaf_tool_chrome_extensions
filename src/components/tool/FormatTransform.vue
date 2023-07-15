<script setup lang="ts">
import {
  Form,
  Field,
  Button,
  Cell,
  showSuccessToast,
  showFailToast
} from 'vant';
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  submitText: {
    type: String,
    default: '转换'
  },
  transformFunc: {
    type: Function,
    default: () => {}
  }
});

const input = ref<string>('');
const res = ref<string>('');

function onSubmit(values: any) {
  res.value = props.transformFunc(values.input) as string;
}

function handleCopy() {
  try {
    const text = res.value;
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showSuccessToast('复制成功');
  } catch {
    showFailToast('复制失败，请联系开发者');
  }
}
</script>

<template>
  <Form @submit="onSubmit">
    <Field
      v-model="input"
      name="input"
      :label="props.title"
      :placeholder="`请填写${props.title}`"
      :rules="[{ required: true, message: `请填写${props.title}` }]"
    ></Field>
    <Button block square type="primary" native-type="submit">
      {{ props.submitText }}
    </Button>
  </Form>
  <Cell class="res-content" :title="`${props.submitText}结果`">
    <template #label>
      <div class="content">
        {{ res || '暂无结果' }}
        <Button v-if="res" size="small" @click="handleCopy">复制</Button>
      </div>
    </template>
  </Cell>
</template>

<style scoped lang="scss">
.res-content {
  margin-top: 8px;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>