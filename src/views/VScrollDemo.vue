<template>
  <div class="page_container">
    <navbar
      isleftarrow
      navBarTitle="动态组件进阶" 
      closeWebview
    >
      <template #right>
        <van-icon name="ellipsis" size="17" @click="onMore" />
      </template>
    </navbar> 

    <VScroll class="wrapper"
      :data="list"
      :pulldown="pulldown"
      @pulldown="loadData"
    >
      <ul class="content">
        <li class="content__cell" v-for="item in list">{{item}}</li>
      </ul>
      <div class="loading-wrapper"></div>
    </VScroll>
  </div> 
</template>

<script setup>
import navbar from '@/components/navbar.vue';

import { ref, reactive, onMounted } from 'vue';

let list = reactive([]);

const pulldown = ref(true);

const onMore = () => {
  loadData();
};

onMounted(() => {
  loadData();
});

const requestData = () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: [1,2,3,4,5,6,7,8,9]
    });
  });
};

const loadData = () => {
  requestData().then((res) => {
    list.push(...res.data);
  })
};

  
</script>


<style scoped lang="scss">
.page_container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  background-color: #f6f6f6;
}

.wrapper {
  // display: flex;
  // flex-direction: column;
  // width: 100%;
  // height: 100%;
  // margin-top: 46px;
  // height: calc(100% - 46px);

  background-color: #f6f6f6;
}

.content{
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
}

.content__cell{
  height: 90px;

  font-size:17px
}

.content__cell:nth-child(odd){
  background-color: green;
}


</style>
