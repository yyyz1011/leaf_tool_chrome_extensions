<script setup lang="ts">
import { Form, Field, Button, Cell } from 'vant';
import { ref } from 'vue';
import { handleCopy } from '../../utils/copy';

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
  },
  fieldProps: {
    type: Object,
    default: () => ({})
  }
});

const input = ref<string>('');
const res = ref<string>('');

function onSubmit(values: any) {
  res.value = props.transformFunc(values.input) as string;
}
</script>

<template>
  <Form @submit="onSubmit">
    <Field
      v-model="input"
      v-bind="props.fieldProps"
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
      <slot name="res-content" :res="res">
        <div class="content">
          {{ res || '暂无结果' }}
          <Button v-if="res" size="small" @click="() => handleCopy(res)">
            复制
          </Button>
        </div>
      </slot>
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
