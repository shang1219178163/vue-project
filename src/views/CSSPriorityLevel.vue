<template>
  <main>
    <div id="container">
      <ul class="menu">
        <li id="item1" class="item1">项目1</li>
        <li class="item2">项目2</li>
        <li class="item3">项目3</li>
      </ul>
    </div>
  </main>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';


const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>

#container li:nth-child(2).item2{
  color: red;
}
#container .menu li.item2{
  color: green;
}
</style>