<template>
  <navbar 
    navBarTitle="下拉刷新上拉加载" 
    isleftarrow
    isFixed
  >
    <template #right>
      <div 
        class="done" 
        @click="done"
      >
        done
      </div>
    </template>
  </navbar>
  <van-pull-refresh
    id="van-pull-refresh"
    class="van-pull-refresh" 
    v-model="loading" 
    :head-height="80" 
    @refresh="onRefresh"
    :disabled="false"
  >
    <van-list
      id="van-list"
      ref="scrollRef"
      @scroll="scrolling"
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </van-pull-refresh>
  <div v-if="bottom">Uhuy! Sampai bawah</div>
</template>


<script setup>
import navbar from '@/components/navbar.vue'

import { ref, onMounted } from 'vue';
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

    console.log(`list:${list.value.length}`);
    loading.value = false;// 加载状态结束

    if (list.value.length >= 50) {
      loading.value = false;// 加载状态结束
      finished.value = true;// 数据全部加载完成
    }
  }, 0.3);
};

const done = () => {
  console.log(`done`);
  console.log(`document.body.scrollTop:${document.body.scrollTop}`);
  console.log(`scrollRef.value.scrollTop:${scrollRef.value.scrollTop}`);

  document.documentElement.scrollTop = document.body.scrollTop = 0;

  // scrollToBottom(el);
  // scrollToBottom(el1);
};

let el;
let el1;

const scrollRef = ref(null);
onMounted(() => {
  console.log(`scrollRef.value`);
  console.log(scrollRef.value);

  el = document.getElementById('van-list');
  el1 = document.getElementById('van-pull-refresh');
  console.log("el:");
  console.log(el);

  console.log("el1:");
  console.log(el1);


  // scrollRef.value.addEventListener('scroll', scrollToTop, false)

  setTimeout(() => {
    console.log("setTimeout");
    // scrollToBottom(el);
    // scrollToBottom(el1);

    scrollToBottom(el);
    setTimeout(() => {
      scrollToTop(el); 
    }, 1000);

  }, 1000);


});

const handleScroll = (val) => {
  console.log(`val:${val}`);


};

// function scrollToTop() { 
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
// 　　console.log(scrollTop) 
// }

const bottom = ref(false)

const scrolling = (e) => {
    const clientHeight = e.target.clientHeight
    const scrollHeight = e.target.scrollHeight
    const scrollTop = e.target.scrollTop
     
    if (scrollTop + clientHeight >= scrollHeight) {
      console.log('Yay!')
      bottom.value = true
    } else {
      bottom.value = false
    }
  }


// 滚动到顶部
const scrollToTop = (e) => e.scrollIntoView({ block: "start" });
// // const goToTop = () => window.scrollTo(0, 0);

// // 滚动到底部"
const scrollToBottom = (e) => e.scrollIntoView({ behavior: "smooth", block: "end" });
</script>


<style scoped lang="scss">
:deep .van-pull-refresh{
  top: 46px;
}
</style>