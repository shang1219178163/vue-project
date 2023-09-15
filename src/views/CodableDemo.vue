<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  
  <div>
    <button @click="jsonDecode">jsonDecode</button>
    <button @click="jsonEncode">jsonEncode</button>
  </div>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';


const jsonDecode = async () => {
  const jsonStr = '{"name":"Alice","age":20,"city":"New York"}';

  const obj = JSON.parse(jsonStr, (key, value) => {
    if (key === 'name') {
      return value.toUpperCase();
    }

    if (key === 'age') {
      return value + 5;
    }

    return value;
  });

  console.log(obj);
  // 输出：{ name: 'ALICE', age: 25, city: 'New York' }
};


const jsonEncode = async () => {
    //第三个参数，用于控制缩进和间距。

  const obj = {
    name: 'Alice',
    age: 20,
    city: 'New York'
  };

  const jsonStr = JSON.stringify(obj, null, 2);

  console.log(jsonStr);
  // 输出：
  // {
  //   "name": "Alice",
  //   "age": 20,
  //   "city": "New York"
  // }
};


/// rest 关键字
const restKeyword = async () => {
    const obj = {
    name: 'Alice',
    age: 20,
    city: 'New York',
    password: '123456',

    toJSON() {
      const { password, ...rest } = this;
      return rest;
    }
  };

  const jsonStr = JSON.stringify(obj);

  console.log(jsonStr);
  // 输出：{"name":"Alice","age":20,"city":"New York"}
};

</script>


<style scoped lang='scss'>

</style>