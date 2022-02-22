<template lang="">
  <div> 
    <h1>动态组件</h1>
    <div id ="example"> 
        <button @click="change">切换页面</button> 
        <component :is="currentView"></component> 
    </div> 
  </div>
</template>

<script setup>
import {ref, computed} from "vue";
// import archive from './DynamicArchive.vue'
// import post from './DynamicPost.vue'
// import home from './DynamicHome.vue'

// var home = {template: "<div>我是主页</div>"};
// var post = {template: "<div>我是提交页</div>"};
// var archive = {template: "<div>我是存档页</div>"};

// const arr = [home, post, archive];
const arr = [
    {template: "<div>我是主页</div>"},
    {template: "<div>我是提交页</div>"},
    {template: "<div>我是存档页</div>"}
    ];

const index = ref(0);

const currentView = computed({
  get: () => {
    return arr[index.value];
  },
});

const change = () => {
  index.value = ++index.value % 3;
  console.log(index.value, currentView);
};
</script>
<style lang=""></style>
