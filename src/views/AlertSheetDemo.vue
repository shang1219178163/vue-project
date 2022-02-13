
<template>
  <div class='container'>
    <van-nav-bar title="人员清单" left-arrow  @click-left="onClickLeft"/>
    <van-cell is-link title="基础用法" @click="show = true" />
    <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" cancel-text="取消"
 />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Toast } from 'vant';

const onClickLeft = () => history.back();

const show = ref(false);
const actions = [
    { name: '选项一' },
    { name: '选项二' },
    { name: '选项三' },
];
const onSelect = (item) => {
    // 默认情况下点击选项时不会自动收起
    // 可以通过 close-on-click-action 属性开启自动收起
    show.value = false;
    Toast(item.name);
};

</script>