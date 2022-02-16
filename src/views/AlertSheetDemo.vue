
<template>
  <div class='container'>
    <van-nav-bar title="人员清单" left-arrow  @click-left="onClickLeft"/>
    <van-cell is-link title="基础用法" @click="show = true" />
    <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" cancel-text="取消"
 />

     <van-cell is-link title="基础用法 ios-action-sheet" @click="click" />

    <div di="ios-action-sheet" ></div>
    <ios-action-sheet>sheet</ios-action-sheet>
    <my-header>
        <template #title> 
          Building Your Own Vue 3 Plugin - <i> A Full Guide </i>
        </template>
        <template #author> 
          Matt Maribojoc
        </template>
    </my-header>
    <div>qqqq</div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue';
import { Toast, Overlay } from 'vant';

// import { MyHeader } from '@/components/MyHeader.vue';

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

const instance = getCurrentInstance()
console.log(instance);


const json = [[{
        text: 'multi button group',
        label: true,
        color: true
      }], [{
        text: 'button in next group',
        label: true
      }, {
        text: 'button disabled',
        disable: true
      }, {
        text: 'button with click callback',
        handle: function(data){
          alert(JSON.stringify(data));
        }
      }]]

const click = () => {
  
  // instance.appContext.config.globalProperties.$iosActionSheet()
}


</script>


<style>
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