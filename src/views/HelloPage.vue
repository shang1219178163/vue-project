<template>
  <div class="hello">
    <div>hello page</div>
    <h3>{{ msg }}<span @click="changeMsg">-></span></h3>
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
    <!-- <UserCell></UserCell> -->

    <div class="page">
      <!-- <div class="page-item" @click="gotoPage">Page</div>
      <div class="page-item" @click="gotoGrid">Grid</div>
      <div class="page-item" @click="gotoLayoutTest">layoutTest</div>

      <div class="page-item" @click="gotoFlexDemo">FlexDemo</div>
      <div class="page-item" @click="gotoTableViewDemo">tableViewDemo</div> -->

      <div v-for="item in RouterMap" :key="item.path">
        <vcard
          :margin="'12px'" 
          :padding="'19px 8px 19px'" 
          :borderRadius="'8px'"
          :footerTitle="item.desc"
        >
          <router-link :to="item.path" class="page-item"> {{ item.name }} </router-link>
        </vcard>
        <!-- <div class="button">
          <router-link :to="item.path" class="page-item">{{ item.name }} </router-link>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useRouter, useRoute } from "vue-router"
import {ref, reactive, computed, watch, getCurrentInstance} from "vue";
import router from "@/router/index";

import {RouterMap} from "@/router/routes";

import Counter from "@/components/Counter.vue";
import VCard from "@/components/VCard.vue";
// import UserCell from '@/components/UserCell.vue'


// const router = useRouter();
// const route = useRoute();

const instance = getCurrentInstance();
console.log(instance.type.__file, RouterMap);

const count = ref(8);
const step = ref(5);

let msg = "Welcome to Your Vue.js App";

const arr = [
  {url: "http://router.vuejs.org/", name: "vue-router", id: 0},
  {url: "http://vuex.vuejs.org/", name: "vuex", id: 1},
  {url: "http://vue-loader.vuejs.org/", name: "vue-loader", id: 2},
  {url: "https://github.com/vuejs/awesome-vue", name: "awesome-vue", id: 3},
];

const changeMsg = () => {
  msg = msg === "Welcome to Your Vue.js App" ? "前端框架" : "Welcome to Your Vue.js App";
};

const add = () => {
  console.log("父组件");
};

const gotoPage = () => {
  console.log(typeof router);
  // router.push("/page/12?kind=car");
  // router.push({ path: "/page/22", query: { kind: "car" } });
  router.push({name: "page", params: {id: "32"}, query: {kind: "car"}});
};

const gotoUserList = () => {
  router.push({path: "/user", query: {name: "hf"}});
};

const gotoGrid = () => {
  router.push({path: "/grid", query: {name: "hf"}});
};

const gotoLayoutTest = () => {
  router.push({path: "/layoutTest", query: {name: "hf"}});
};

const gotoFlexDemo = () => {
  router.push({path: "/flexDemo", query: {name: "hf"}});
};

const gotoTableViewDemo = () => {
  router.push({path: "/tableViewDemo", query: {name: "hf"}});
};

const watchObj = {
  name: "-----姓名",
};
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

/* .page {
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
} */

.page-item {
  margin: 0 10px;
  /* border: 1px solid red; */
  color: red;
  text-decoration: underline;
}
</style>
