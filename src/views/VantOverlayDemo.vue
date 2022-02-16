
<template>
  <div class='container'>
    <van-nav-bar title="人员清单" left-arrow  @click-left="onClickLeft"/>
    <!-- <van-button type="primary" text="显示遮罩层" @click="show = true" />
    <van-overlay :show="show" @click="show = false" /> -->
    <van-cell is-link title="Overlay" @click="show = true" />
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block" @click="click" />
      </div>
    </van-overlay>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Toast } from 'vant';

const onClickLeft = () => history.back();

const show = ref(false);

// const actions = [
//     { name: '选项一' },
//     { name: '选项二' },
//     { name: '选项三' },
// ];
// const onSelect = (item) => {
//     // 默认情况下点击选项时不会自动收起
//     // 可以通过 close-on-click-action 属性开启自动收起
//     show.value = false;
//     Toast(item.name);
// };
const click = () => {
    show.value = false;
    console.log("block");
    // Toast("block");
};
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>