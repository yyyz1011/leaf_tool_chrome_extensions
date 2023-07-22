<script setup lang="ts">
import {
  CellGroup,
  Cell,
  Form,
  Field,
  DatePicker,
  ActionSheet,
  TimePicker,
  Radio,
  RadioGroup,
  Button
} from 'vant';
import dayjs from 'dayjs';
import { ref, onUnmounted, onMounted } from 'vue';
import Header from '@/components/basic/Header.vue';
import { handleCopy } from '../../utils/copy';

const timer = ref<any>(null);
const currentDateInfo = ref<any>({
  currentDate: dayjs().format('YYYY-MM-DD HH:mm:ss')
});

const isShowDatePickerSheet = ref<boolean>(false);
const formDate = ref<string[]>(dayjs().format('YYYY-MM-DD').split('-'));
const isShowTimePickerSheet = ref<boolean>(false);
const formTime = ref<string[]>(dayjs().format('HH:mm:ss').split(':'));
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

const formatter = (type: string, option: any) => {
  if (type === 'year') {
    option.text += '年';
  }
  if (type === 'month') {
    option.text += '月';
  }
  if (type === 'day') {
    option.text += '日';
  }
  return option;
};

const formatterTime = (type: string, option: any) => {
  if (type === 'hour') {
    option.text += '时';
  }
  if (type === 'minute') {
    option.text += '分';
  }
  if (type === 'second') {
    option.text += '秒';
  }
  return option;
};

function handleConfirmDate(val: any) {
  formDate.value = val.selectedValues;
  isShowDatePickerSheet.value = false;
}

function handleConfirmTime(val: any) {
  formTime.value = val.selectedValues;
  isShowTimePickerSheet.value = false;
}

function handleChangeToTime(val: any) {
  const dateText = `${formDate.value.join('-')} ${formTime.value.join(':')}`;
  if (val.formIsUnix === '1') {
    formRes.value = dayjs(dateText).unix().toString();
  } else {
    formRes.value = dayjs(dateText).valueOf().toString();
  }
}
</script>

<template>
  <Header title="时间转时间戳"></Header>

  <CellGroup title="当前时间信息">
    <Cell title="时间" :value="currentDateInfo.currentDate"></Cell>
    <Cell
      title="时间戳（秒）"
      :value="dayjs(currentDateInfo.currentDate).unix()"
    ></Cell>
  </CellGroup>

  <CellGroup title="时间戳转时间">
    <Form @submit="handleChangeToTime">
      <Cell
        title="当前日期"
        is-link
        :value="formDate.join('-')"
        @click="isShowDatePickerSheet = true"
      ></Cell>
      <Cell
        title="当前时间"
        is-link
        :value="formTime.join(':')"
        @click="isShowTimePickerSheet = true"
      ></Cell>
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

  <ActionSheet v-model:show="isShowDatePickerSheet">
    <DatePicker
      v-model="formDate"
      title="选择日期"
      :columns-type="['year', 'month', 'day']"
      :formatter="formatter"
      @cancel="isShowDatePickerSheet = false"
      @confirm="handleConfirmDate"
    ></DatePicker>
  </ActionSheet>
  <ActionSheet v-model:show="isShowTimePickerSheet">
    <TimePicker
      v-model="formTime"
      title="选择时间"
      :columns-type="['hour', 'minute', 'second']"
      :formatter="formatterTime"
      @cancel="isShowTimePickerSheet = false"
      @confirm="handleConfirmTime"
    ></TimePicker>
  </ActionSheet>
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
