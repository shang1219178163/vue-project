<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  
  <div id="txt" class="search-wrapper">
    <input id="tt" placeholder="请输入查询条件" :value='text' />
    <div class="search-wrapper-list">
      <div 
        class="search-wrapper-list-cell"
        v-for="(item, index) in 9" :key="index"
        @click="onSelect(index)"
      >item_{{ index }}</div>
    </div>
  </div>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

const text = ref('');

const onSelect = (val) => {
  console.log(val);
  text.value = `item_${val}`;
};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>
// .button {
//   position: absolute;
//   top: 80px;
//   left: 400px;
//   height: 42px;
//   line-height: 42px;
//   text-align: center;
//   padding: 0 24px;
//   border-radius: 4px;
//   background-color: rgb(255, 255, 255);
//   cursor: default;
//   color: #232323;
//   user-select: none;
// }
// .button:hover {
//   background-color: rgb(242, 242, 242);
// }
.search-wrapper {
  // position: absolute;
  // top: 80px;
  // left: 80px;
  padding: 12px 0px 0px 0px;
  width: 300px;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: auto;

  border: 1px solid #4e4e4e;
}
.search-wrapper input {
  margin: 0px 12px 12px 12px;
  width: calc(100% - 28px);
  border: none;
  outline: none;
  font-size: 14px;
}

.search-wrapper-list {
  padding-left: 12px;
  overflow: auto;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  max-height: 0px;
  overflow: hidden;
}

.search-wrapper:focus-within .search-wrapper-list, .search-wrapper-list:hover {
  max-height: 200vh;
  transition: max-height 1s ease-in-out;
}
.search-wrapper-list:hover {
  max-height: 50vh;
  overflow: auto;
}
</style>