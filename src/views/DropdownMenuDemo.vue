<template>
  <navbar
    title="数据透传1"
    left-text="返回1"
    right-text="按钮1"
    left-arrow      
    navBarTitle="数据透传"
    isleftarrow
  >
    <template #title>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      <!-- <van-dropdown-item v-model="value2" :options="option2" /> -->
      </van-dropdown-menu>
    </template>
  </navbar>

  <!-- <div>
    <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
  </div> -->
</template>


<script setup>
import navbar from '@/components/navbar.vue';

import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;
import { useRouter, useRoute } from 'vue-router';
import { DropdownMenu, DropdownItem } from 'vant';

const value1 = ref(0);
const value2 = ref('a');
const option1 = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
];
const option2 = [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
];

const handleRouteParams = () => {

};


const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>

:deep .van-nav-bar__title{
  width: 250px;
}
</style>