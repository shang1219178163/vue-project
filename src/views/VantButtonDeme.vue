<template>
  <h1>van-button</h1>
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>

  <van-button plain type="primary">朴素按钮</van-button>

  <h1>van-checkbox</h1>
  <van-checkbox v-model="checked">复选框</van-checkbox>

  <h1>van-radio-group </h1>
  <van-radio-group v-model="checked">
    <van-radio name="1">单选框 1</van-radio>
    <van-radio name="2">单选框 2</van-radio>
  </van-radio-group>


</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

const checked = ref(true);

const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>

</style>