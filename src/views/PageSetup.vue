<template>
  <div>
    <div>{{ page }}</div>
    <div>params:{{ route.params }}</div>
    <div>query:{{ route.query }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import {
  useRouter,
  useRoute,
  // onBeforeRouteEnter,
  onBeforeRouteUpdate,
  onBeforeRouteLeave,
} from "vue-router";

const router = useRouter();
const route = useRoute();

let page = "路由-page1";
let params = "-";
let query = "-";

onMounted(() => {
  params = route.params;
  query = route.query;
  console.log("onMounted", "params:", route.params);
  console.log("onMounted", "query:", route.query);
});

// onBeforeRouteEnter(() => {
//   console.log("当进入当前页面路由时，调用回调函数");
// });

// onBeforeRouteUpdate(() => {
//   console.log("当前路由发生变化时，调用回调函数");
// });

// onBeforeRouteLeave(() => {
//   console.log("当前页面路由离开的时候调用");
// });

// onBeforeRouteEnter((to, from, next) => {
//   console.log(
//     `onBeforeRouteEnter, 当进入当前页面路由时，调用回调函数 to:${to} from: ${from}`
//   );
//   next();
// });

onBeforeRouteUpdate((to, from, next) => {
  console.log(
    `beforeRouteUpdate, 当前路由发生变化时，调用回调函数 to:${to} from: ${from}`
  );
  next();
});

onBeforeRouteLeave((to, from, next) => {
  console.log(`onBeforeRouteLeave, 当前页面路由离开的时候调用 to:${to} from: ${from}`);
  next();
});
</script>

<style scoped></style>
