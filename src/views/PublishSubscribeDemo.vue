<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  
  <div>
    <label>Keyword: </label><input @change="changeValue($event.target.value)" />
  </div>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';
import { EventObserver } from '@/utils/designPatterns/publish_subscribe';


const changeValue = (key) => {
  console.log(key);
  EventObserver.listen(key, function (val) {
    console.log(`listen:${key} - ${val}`);
  });

  EventObserver.trigger(key, 789);

  // console.log(`EventObserver.list:${EventObserver.list} `);
  const items = EventObserver.list;
  Object.entries(EventObserver.list).forEach(e => {
    console.log(`EventObserver.list:${typeof(e)} ${Object.entries(e)} `);

  });
};

</script>


<style scoped lang='scss'>

</style>