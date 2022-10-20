<template>
  <!-- <h1>Stack</h1> -->
  <div class="page">

    <h2>原生实现</h2>
    <div class="stack__content">
      <img class="stack__img" 
      :src="require('@/assets/images/img_placeholder_activity.png')"
      >
      <div class="stack__positioned">
        VStackIm-content
      </div>
    </div>

    <h2>VStack</h2>
    <VStack
      class="vstack" 
      bottom="0" 
      right="0"
      borderRadius="4px 18px 4px 4px"
    >
      <div class="vstack__content">VStackVStackVStackVStackVStackVStackVStackVStackVStackVStackVStack</div>
      <template #positioned>
        <div class="vstack-positioned">
          absolute
        </div>
      </template>
    </VStack>

    <h2>VStackImg</h2>
    <VStackImg
      class="vstack" 
      bottom="0" 
      right="0"
      borderRadius="4px"
    >
      <img 
        class="vstackImg_positioned" 
        :src="icon_like_red_base64" 
      >
    </VStackImg>

    <h2>MessageInteractiveCell</h2>
    <MessageInteractiveCell 
      class="page-view__cell"
      v-for="(item, index) in 1" :key="index"
    >
      MessageInteractiveCell {{ item }}
    </MessageInteractiveCell>

  </div>
</template>


<script setup>
import MessageInteractiveCell from '@/components/Cell/MessageInteractiveCell.vue';

import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;


import icon_like_red_base64 from '@/assets/images/icon_like_red_base64';


onMounted(() => {
  onRefresh();
});

const props = defineProps({
  top: {
    type: String,
    default: "0px",
  },
  left: {
    type: String,
    default: "'0px'",
  },
  bottom: {
    type: String,
    default: undefined,
  },
  right: {
    type: String,
    default: undefined,
  },
  width: {
    type: String,
    default: "100px",
  },
  height: {
    type: String,
    default: "100px",
  },
  overflow: {
    type: String,
    default: "hidden",
  },
})

const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>
.page{
  display: flex;
  flex-direction: column;

  // padding: 15px;;
}

.stack__content{
  position: relative;

  border: 1px solid blue;
}

.stack__img{
  height: 100px;
}

.stack__positioned{
  position: absolute;

  top: 0;
  
  border: 1px solid blue;
}

.vstack{
  width: 100px;
  height: 100px;
  border-radius: 8px;

  border: 1px solid red;
}

.vstack__content{
  // @include syn-text-ellipsis($row: 3);
  white-space: normal; 
  word-break: break-all;
  word-wrap: break-word;
}

.vstack-positioned{
  width: 65px;
  height: 35px;

  background: orange;
}

.vstackImg_positioned{
  width: 35px;
  height: 35px;

  right: 0;
  bottom: 0;
}

.page-view__cell{
  height: 84px;

  // border-top: 1px solid red;
}

</style>