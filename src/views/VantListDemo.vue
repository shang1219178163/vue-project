<template>
    <navbar 
    navBarTitle="下拉刷新上拉加载" 
    isleftarrow
    isFixed>
    </navbar>
    <van-pull-refresh
      class="van-pull-refresh" 
      v-model="loading" 
      :head-height="80" 
      @refresh="onRefresh"
      :disabled="false"
    >
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
</template>


<script setup>
import navbar from '@/components/navbar.vue'

import { ref } from 'vue';
import { Toast } from 'vant';

const list = ref([]);

// const refreshing = ref(false);
const loading = ref(false);
const finished = ref(false);

const onRefresh = async () => {
  loading.value = true;

  list.value.splice(0, list.value.length)
  for (let i = 0; i < 10; i++) {
    list.value.push(list.value.length + 1);
  }

  setTimeout(() => {

    Toast('刷新成功');
    loading.value = false;

  }, 1500);
};

const onLoad = async () => {
  loading.value = true;
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};

</script>


<style scoped lang="scss">
    
</style>