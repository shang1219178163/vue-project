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
import "@/utils/extensions";

import { test1 } from '@/utils/testJson';


const json = ref('');
json.value = JSON.stringify(test1);

let cache = {};
let map = new Map();


const onClickRight = () => {
  
  hanleToModel();
  // hanleToModelNew();
};

const printInfo = () => {
  testType(test1);
};

const copyJSON = () => {
  const val = json.value;
};


const hanleToModel = () => {
  console.log('hanleToModel');

  generatorModel(test1, 'rootModel', cache);
  // console.log(`cache:${cache}`);
  console.log(`${JSON.stringify(cache)}`);

  convertModelNew(cache);

  console.log(result);

};

const hanleToModelNew = () => {
  console.log('hanleToModelNew');

  generatorModelNew(test1, 'rootModel', map);
  // console.log(`cache:${cache}`);
  // console.log(`${JSON.stringify(cache)}`);

  // convertModelNew(cache);
  // console.log(result);

};

var result = `
****************************************
rootModel{\n\n
  `;

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

      const className = `${k}Model`.capitalize();
      result += `\t${className} ${k};\n`;
      result += `\t${className}{\n${res}\n}\n\n`;
      convertModel(value);

    } else if (value.type === 'Array') {
      const first = value[0];
      for(const k1 of Reflect.ownKeys(first)) {
        const value1 = first[k1];
        if (k1 !== 'type') {
          res += `\t${value1.type} ${k1};\n`;
        }
      }

      const className = `${k}Model`.capitalize();
      result += `\t${className} ${k};\n`;
      result += `\t${k}Model{\n${res}\n}\n\n`;
      convertModel(value);
    } else {
      // result += `${k}:${value.type}-----`;
      
      // result += `${k}:${JSON.stringify(value)}-----`;
      // if (value.type === 'Object') {
      //   result += `${k}Model---`;
      // } else {
      //   result += `${value.type} ${k};\n`;
      // }
      result += `\t${value.type} ${k};\n`;

      // result += `${k}Model{\n${res}\n}\n\n`;
    }
  }
  result += `}\n\n`;

}

const convertModelNew = (obj) => {
  for(const k of Reflect.ownKeys(obj)) {
    const value = obj[k];
    // console.log(`*** [${value.type}] ${k}`);

    let res = '';
    if (value.type === 'Object') {
      for(const k1 of Reflect.ownKeys(value)) {
        const value1 = value[k1];
        if (k1 !== 'type') {
          res += `\t${value1.type} ${k1};\n`;
        }
      }

      const className = `${k}Model`.capitalize();
      result += `\t${className} ${k};\n`;
      result += `\t${className}{\n${res}\n}\n\n`;
      convertModel(value);

    } else if (value.type === 'Array') {
      const first = value[0];
      for(const k1 of Reflect.ownKeys(first)) {
        const value1 = first[k1];
        if (k1 !== 'type') {
          res += `\t${value1.type} ${k1};\n`;
        }
      }

      const className = `${k}Model`.capitalize();
      result += `\t${className} ${k};\n`;
      result += `\t${k}Model{\n${res}\n}\n\n`;
      convertModel(value);
    } else {
      // result += `${k}:${value.type}-----`;
      
      // result += `${k}:${JSON.stringify(value)}-----`;
      // if (value.type === 'Object') {
      //   result += `${k}Model---`;
      // } else {
      //   result += `${value.type} ${k};\n`;
      // }
      result += `\t${value.type} ${k};\n`;

      // result += `${k}Model{\n${res}\n}\n\n`;
    }
  }
  result += `}\n\n`;

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
        const className = `${k}Model`.capitalize();
        ca[k] = {
          'type': 'Object',
          // des: `${className} ${k};`
          // 'className': className,
          // dic: value,
        }
        generatorModel(value, k, ca[k]);
      } else if (value instanceof Array) {
        const className = `${k}Model`.capitalize();

        ca[k] = {
          'type': 'Array',
          // des: `List<${type}> ${k};`
          // 'className': className,
          // dic: value[0],
        }
        generatorModel(value[0], k, ca[k]);
      } else {
        ca[k] = {
          'type': type,
          // des: `${type} ${k};`
        }
        generatorModel(value, k, ca[k]);
      }
    }
  }
};


const generatorModelNew = (obj, key, ca = new Map()) => {
  if (obj instanceof String || 
    obj instanceof Number ||
    obj instanceof Boolean
  ) {
    const type = getType(obj);

    const tmp = new Map([['type', type],]);
    ca.set(obj, tmp);

    generatorModelNew(obj, key, ca.get(obj));
  }
  else if (obj instanceof Object) {
    const type = getType(obj);
    // console.log(`*** [${type}] ${key}: ${obj}`);

    for(const k of Reflect.ownKeys(obj)) {
      const value = obj[k];
      const type = getType(value);

      // console.log(`*** [${type}] ${k}: ${obj[k]}`);

      if (value instanceof Object) {
        const className = `${k}Model`.capitalize();
        const tmp = new Map([
          ['type', type],
          ['className', className],
          ['dic', value],
        ]);
        ca.set(key, tmp);

        generatorModelNew(value, k, ca.get(k));
      } else if (value instanceof Array) {
        const className = `${k}Model`.capitalize();
        const tmp = new Map([
          ['type', 'Array'],
          ['className', className],
          ['dic', value[0]],
        ]);
        ca.set(key, tmp);

        generatorModelNew(value[0], k, ca.get(k));
      } else {
        const tmp = new Map([
          ['type', 'Array'],
        ]);
        ca.set(key, tmp);

        generatorModelNew(value, k, ca.get(k));
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