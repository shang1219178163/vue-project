<template>
  <van-nav-bar 
    :title="$route.meta.title"
    :left-arrow='false'
    right-text="更多"
    @click-right="onClickRight"
  />
  <button @click='printInfo'>类型打印</button>
  <button @click='copyJSON'>复制</button>
  <div>{{json}}</div>
</template>


<script setup>
import navbar from '@/components/navbar.vue'

import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';
import { useRouter, useRoute } from 'vue-router';

import { test1 } from '@/utils/testJson';


const json = ref('');
json.value = JSON.stringify(test1);

let cache = {};

const onClickRight = () => {
  
  hanleToModel();
};

const printInfo = () => {
  testType(test1);
};

const copyJSON = () => {
  const val = json.value;
  document.execCommand(val); 
};


const hanleToModel = () => {
  console.log('hanleToModel');

  generatorModel(test1, 'rootModel',cache);
  // console.log(`cache:${cache}`);
  console.log(`${JSON.stringify(cache)}`);

  convertModel(cache);

  console.log(result);

};

var result = `rootModel{}\n\n`;

const modelDes = (name) => {
  return `${name} {

  }`;
}


const convertModel = (obj) => {
  for(const k of Reflect.ownKeys(obj)) {
    const value = obj[k];
    // console.log(`*** [${value.type}] ${k}`);

    var res = '';
    if (value.type === 'Object') {
      for(const k1 of Reflect.ownKeys(value)) {
        const value1 = value[k1];
        if (k1 !== 'type') {
          res += `\t${value1.type} ${k1};\n`;
        }
      }
      result += `${k}Model{\n${res}\n}\n\n`;
      convertModel(value);

    } else if (value.type === 'Array') {
      for(const k1 of Reflect.ownKeys(value[0])) {
        const value1 = value[0][k1];
        if (k1 !== 'type') {
          res += `\t${value1.type} ${k1};\n`;
        }
      }
      result += `${k}Model{\n${res}\n}\n\n`;
      convertModel(value);

    } else {
      result += `-----`;

      // result += `${k}Model{\n${res}\n}\n\n`;
    }
  }
}


const testType = (obj) => {
  for(const key of Reflect.ownKeys(obj)) {
    // console.log(key, obj[key]);
    const value = obj[key];
    console.log(`*** [${getType(value)}] ${key}: ${value}`);

    if (value instanceof Object) {
      testType(value);
    } else if (value instanceof Array) {
      testType(value[0]);
    } else {
      // console.log(key, obj[key]);

    }
  }
};

const generatorModel = (obj, key, ca) => {
  if (obj instanceof String || 
    obj instanceof Number ||
    obj instanceof Boolean
  ) {
    const type = getType(obj);
    ca[obj] = {
      type: type,
    }
    generatorModel(obj, key, ca[obj]);
  }
  else if (obj instanceof Object) {
    const type = getType(obj);
    // console.log(`*** [${type}] ${key}: ${obj}`);

    for(const k of Reflect.ownKeys(obj)) {
      const value = obj[k];
      const type = getType(value);

      // console.log(`*** [${type}] ${k}: ${obj[k]}`);

      if (value instanceof Object) {
        ca[k] = {
          type: type,
        }
        generatorModel(value, k, ca[k]);
      } else if (value instanceof Array) {
        ca[k] = {
          type: 'Array'
        }
        generatorModel(value[0], k, ca[k]);
      } else {
        ca[k] = {
          type: type,
        }
        generatorModel(value, k, ca[k]);
      }
    }
  }
};


const getType = (o) => {
  const typeStr = Object.prototype.toString.call(o)
    .replace(/\[object (\w+)\]/, "$1");
  return typeStr;
}


const onRefresh = async () => {

};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>

</style>