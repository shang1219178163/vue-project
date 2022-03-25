

<template>
  <div class="hello">
    <div>hello page</div>
    <h3>{{ message }}<span @click="changeMsg">-></span></h3>
    <h3>Essential Links</h3>
    <ul>
      <li v-for="e in arr" :key="e.id">
        <a :href="e.url" target="_blank">
          {{ e.name }}
        </a>
      </li>
    </ul>

    <input type="text" v-model="watchObj.name" />
    <counter :count="count" :step="step" />
    <!-- <router-link class="page-item" :to="item.path" > {{ item.name }} </router-link> -->

    <div class="page" v-if="0">
        <vcard
        v-for="item in RouterMap" :key="item.path"
        :margin="'8px 0 8px'" 
        :padding="'8px 8px 8px'" 
        :borderRadius="'8px'"
        :content="item.path"
        :color="'#0082e0'"
        :footerTitle="item.desc"
        @click="gotoPage(item.path)"
        >
          <!-- <div class="name">{{ item.name }}</div> -->
        </vcard>
    </div>

    <vwarp>
        <vcard 
        v-for="item in RouterMap" :key="item.path"
        :margin="'4px 0 4px'" 
        :padding="'8px'" 
        :borderRadius="'8px'"
        :content="item.path"
        :color="'#0082e0'"
        :footerTitle="item.desc"
        @click="gotoPage(item.path)"
        >
          <!-- <div class="name">{{ item.name }}</div> -->
        </vcard>
    </vwarp>
  </div>
</template>

<script setup>
// import { useRouter, useRoute } from "vue-router"
import {ref, reactive, computed, watch, getCurrentInstance} from "vue";
import router from "@/router/index";

import {RouterMap} from "@/router/routes";

import Counter from "@/components/Counter.vue";
import vcard from '@/components/VCard.vue';
import vwarp from "@/components/VWarp.vue";

// import UserCell from '@/components/UserCell.vue'


// const router = useRouter();
// const route = useRoute();

const instance = getCurrentInstance();
// console.log(instance.type.__file, RouterMap);

const count = ref(8);
const step = ref(5);

let message = ref("Welcome to Your Vue.js App");

const arr = [
  {url: "http://router.vuejs.org/", name: "vue-router", id: 0},
  {url: "http://vuex.vuejs.org/", name: "vuex", id: 1},
  {url: "http://vue-loader.vuejs.org/", name: "vue-loader", id: 2},
  {url: "https://github.com/vuejs/awesome-vue", name: "awesome-vue", id: 3},
];

const changeMsg = () => {
  console.log("之前", where(), message);
  message = message.value == "Welcome to Your Vue.js App" ? "前端框架" : "Welcome to Your Vue.js App";
  console.log(where(), message.value === "Welcome to Your Vue.js App", message);
  // alert(message)
};

const add = () => {
  console.log("父组件");
};

const gotoPage = (to) => {
  console.log(typeof router);
  // router.push("/page/12?kind=car");
  // router.push({ path: "/page/22", query: { kind: "car" } });
  // router.push({name: "page", params: {id: "32"}, query: {kind: "car"}});
  router.push({ path: to, query: { kind: "car" } });
};

const watchObj = {
  name: "-----姓名",
};

const where = () =>{
  let reg = /\s+at\s(\S+)\s\(/g 
  let str = new Error().stack.toString()
  let res = reg.exec(str)&&reg.exec(str)
  return res&&res[1]
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.button {
  margin: 5px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: grey 50%;
  color: black;

  display: inline-block;
}

.page {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.page-item {
  /* font-size: medium; */
  /* margin: 8px;
  padding: 8px;
  border: 1px solid red; */
  /* margin: 0 10px; */
  /* color: red; */
  /* background-color: #42b983; */
  /* text-decoration: underline; */
}
.name{
  color: #0082e0;
  font-weight: 600;
}
</style>
