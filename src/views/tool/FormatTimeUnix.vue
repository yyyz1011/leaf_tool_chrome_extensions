<script setup lang="ts">
import { CellGroup, Cell, Form, Field, Radio, RadioGroup, Button } from 'vant';
import dayjs from 'dayjs';
import { ref, onUnmounted, onMounted, watch } from 'vue';
import Header from '@/components/basic/Header.vue';
import { handleCopy } from '../../utils/copy';

const timer = ref<any>(null);
const currentDateInfo = ref<any>({
  currentDate: dayjs().format('YYYY-MM-DD HH:mm:ss')
});

const formTime = ref<string>(dayjs().unix().toString());
const formIsUnix = ref<string>('1');
const formRes = ref<string>('');

onMounted(() => {
  timer.value = setInterval(() => {
    currentDateInfo.value.currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer.value);
  timer.value = null;
});

function handleChangeToTime(val: any) {
  if (val.formIsUnix === '1') {
    formRes.value = dayjs(Number(val.formTime) * 1000).format(
      'YYYY-MM-DD HH:mm:ss'
    );
  } else {
    formRes.value = dayjs(Number(val.formTime)).format('YYYY-MM-DD HH:mm:ss');
  }
}

watch(
  () => formIsUnix.value,
  (val) => {
    if (val === '1') {
      formTime.value = dayjs().unix().toString();
    } else {
      formTime.value = dayjs().valueOf().toString();
    }
  },
  {
    immediate: true
  }
);
</script>

<template>
  <Header title="时间戳转时间"></Header>

  <CellGroup title="当前时间信息">
    <Cell title="时间" :value="currentDateInfo.currentDate"></Cell>
    <Cell
      title="时间戳（秒）"
      :value="dayjs(currentDateInfo.currentDate).unix()"
    ></Cell>
  </CellGroup>

  <CellGroup title="时间戳转时间">
    <Form @submit="handleChangeToTime">
      <Field v-model="formTime" name="formTime"></Field>
      <Field name="formIsUnix" label="格式类型">
        <template #input>
          <RadioGroup v-model="formIsUnix" direction="horizontal">
            <Radio name="1">秒</Radio>
            <Radio name="2">毫秒</Radio>
          </RadioGroup>
        </template>
      </Field>
      <Button block square type="primary" native-type="submit">转化</Button>
    </Form>
    <Cell class="res-content" :title="`转换结果`">
      <template #label>
        <div class="res-content--content">
          {{ formRes || '暂无结果' }}
          <Button
            v-if="formRes"
            size="small"
            @click="() => handleCopy(formRes)"
          >
            复制
          </Button>
        </div>
      </template>
    </Cell>
  </CellGroup>
</template>

<style scoped lang="scss">
.res-content {
  margin-top: 8px;

  &--content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
