<template>
   <van-cell is-link @click="showPopup">DatetimePicker</van-cell>
    <van-popup 
      v-model:show="show" 
      position="bottom"
      close-on-popstate
      :close-on-click-overlay="false"
      safe-area-inset-bottom
    >
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :filter="filter"
        title="选择完整时间"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="confirm"
        @cancel="cancel"
      />
    </van-popup> 
    <button @click="onfilter">filter</button>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, computed, watch, onMounted, } from 'vue';
import { Toast } from 'vant';
import { useToggle } from '@vant/use';


const show = ref(false);
const showPopup = () => {
  show.value = true;
};

const hidePopup = () => {
  show.value = false;
};

const initailDate = new Date();

const currentDate = ref(initailDate);
const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 10, 1);

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
    return options.filter((option) =>  Number(option) % 10 === 0 );
  }
  return options;
}


const confirm = (date) => {
  hidePopup();
  console.log(currentDate)

}

const cancel = () => {
  hidePopup();
  currentDate.value = initailDate;
  console.log(currentDate)
}
</script>


<style scoped lang='scss'>

</style>