<template>
  <div class="page_container">
    <navbar
      isleftarrow
      navBarTitle="动态组件进阶" 
      closeWebview
    >
    </navbar> 
    <component 
      v-for="(item, index) in items" 
      :key="index"
      :is="currentComp(item.type)"
      :obj="item"
    >
    </component> 
    </div> 
</template>

<script setup>
import navbar from '@/components/navbar.vue';
import DynamicCellOne from '@/components/DynamicCellOne.vue'
import DynamicCellTwo from '@/components/DynamicCellTwo.vue'
import DynamicCellThree from '@/components/DynamicCellThree.vue'

import {ref, reactive, computed} from "vue";

const items = reactive([
  {
    title: '热门活动',
    content: '您收到一条热门活动',
    icon: require('@/assets/images/icon_notice_popular.png'),
    imgUrl: 'https://ys-oss-zjrs.haier.net/content/img/2022081016074732563876.jpg',
    type: 5,
    eventID: 'BD10030',
    index: 0,
    time: "2022-08-10 09:15",
  },
  {
    title: '系统通知',
    content: '您收到一条系统通知',
    icon: require('@/assets/images/icon_notice_system.png'),
    type: 0,
    imgUrl: 'https://ys-oss-zjrs.haier.net/content/img/2022081016074732563876.jpg',
    eventID:'BD10031',
    index: 1,
    time: "2022-08-11 11:15",
  },
  {
    title: '进度消息',
    content: '您收到一条进度消息',
    icon: require('@/assets/images/icon_notice_schedule.png'),
    imgUrl: 'https://ys-oss-zjrs.haier.net/content/img/2022081016074732563876.jpg',
    type: 6,
    eventID: 'BD10032',
    index: 2,
    time: "2022-08-12 19:15",
  },
]);

// 所有类型和组件映射关系
const typeMap = {
  5: DynamicCellOne,
  0: DynamicCellTwo,
  6: DynamicCellThree,
};

// 当前组件
const currentComp = (type) => {
  const key = type.toString();
  if (Object.keys(typeMap).includes(key)) {
    return typeMap[key];
  }
  return typeMap[0];
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
</style>
