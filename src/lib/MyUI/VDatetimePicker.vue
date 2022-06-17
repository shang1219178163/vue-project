<template>
  <van-popup 
    v-model:show="showVal" 
    position="bottom"
    close-on-popstate
    safe-area-inset-bottom
    @click-overlay="clickOverlay"
  >
    <van-datetime-picker
      v-model="dateVal"
      type="datetime"
      :filter="filter"
      title="选择时间"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
      @confirm="confirm"
      @cancel="cancel"
    />
  </van-popup> 
</template>


<script setup>
import { ref, reactive, computed, onActivated, } from 'vue';
import { Toast } from 'vant';


const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  minDate: {
    type: Date,
    default: new Date(2000, 0, 1),
  },
  maxDate: {
    type: Date,
    default: new Date(2030, 10, 1),
  },
  minuteStep: {
    type: Number,
    default: 10,
  },
  confirm: {
    type: Function,
    default: undefined,
  },
  cancel: {
    type: Function,
    default: undefined,
  },
});

const emits = defineEmits(['update:show', 'update:date', 'confirm', 'cancel']);
const showVal = computed({
  set: (newVal) => {
    if (showVal.value !== newVal) {
      emits('update:show', newVal);
    }
  },
  get: () => props.show,
});

const dateVal = computed({
  set: (newVal) => {
    if (dateVal.value !== newVal) {
      emits('update:date', newVal);
    }
  },
  get: () => props.date,
});


// const show = ref(false);
const showPopup = () => {
  showVal.value = true;
};

const hidePopup = () => {
  showVal.value = false;
};

const initailDate = ref(props.date);

// const date = ref(initailDate);
// const minDate = new Date(2020, 0, 1);
// const maxDate = new Date(2025, 10, 1);

const formatterObj =  {
  year: '年',
  month: '月',
  day: '日',
  hour: '时',
  minute: '分',
  second: '秒',
};

const formatter = (type, val) => {
  return val + formatterObj[type];
};

const filter = (type, options) => {
  if (type === 'minute') {
    return options.filter((option) =>  Number(option) % Number(props.minuteStep) === 0);
  }
  return options;
}

// const change = (val) => {
//   console.log("change", val)
// }

const confirm = (val) => {
  hidePopup();
  emits('update:date', val);
  emits('confirm');
}

const cancel = () => {
  hidePopup();
  emits('update:date', initailDate.value);
  emits('cancel');
}

const clickOverlay = () => cancel();

</script>


<style scoped lang='scss'>

</style>