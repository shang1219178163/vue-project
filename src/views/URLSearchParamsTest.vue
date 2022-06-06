<template>
  <div class="box">
    <h1>URL 测试</h1>
    <button @click="parseURLString">button</button>
    <h2>链接</h2>
    <h3>{{urlString}}</h3>
    <h2>URL对象:</h2>
    <h4 v-for="(item, index) in items" :key="index">{{item[0]}}: {{item[1]}}</h4>
  </div>
</template>


<script setup>
import { ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';

const urlString =ref(`https://sybird-oss.haier.net/resource/decorationMoney/index.html
?token=d04eedfeb76d4e9bb1021eff8149c196&phone=18792710637&#/installment`)
;

let items = reactive([]);

const parseURLString = async () => {
  items = items.splice(items.length, 0);

  // const URL = new url.parse(urlString, true);
  let url = new URL(urlString.value);
  console.log("host:", url);
  // console.log("url.searchParams.toString:", url.searchParams.toString());
  
  /// 可迭代带向转对象
  let params = Object.fromEntries(url.searchParams);
  console.log("url.searchParams:", params);
  console.table([params]);


`  host: URL {
hash: "#/installment"
host: "sybird-oss.haier.net"
hostname: "sybird-oss.haier.net"
href: "https://sybird-oss.haier.net/resource/decorationMoney/index.html?token=d04eedfeb76d4e9bb1021eff8149c196&phone=18792710637&#/installment"
origin: "https://sybird-oss.haier.net"
password: ""
pathname: "/resource/decorationMoney/index.html"
port: ""
protocol: "https:"
search: "?token=d04eedfeb76d4e9bb1021eff8149c196&phone=18792710637&"
searchParams: URLSearchParams {}
username: ""
`

  for(let key in url){ 
    // console.log(key, url[key]);
    items.push([key, url[key]]);
  }
};

parseURLString();
</script>


<style scoped lang='scss'>
.box{
  padding: 12px;
}
</style>