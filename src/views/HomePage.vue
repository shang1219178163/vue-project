

<template>
    <van-nav-bar 
    title="HomePage" 
    :left-arrow='false'
    @click-left="onClickLeft"
    right-text="选择"
    @click-right="onClickRight"
    />
    
    <div class="page" v-if="0">
      <VCard
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
      </VCard>
    </div>

    <VWarp class="vwrap">
      <VCard
        class="VCard" 
        v-for="item in routerList" :key="item.path"
        :margin="'4px'" 
        :padding="'8px'" 
        :borderRadius="'8px'"
        :content="item.path"
        :color="'var(--theme-color)'"
        :footerTitle="item.desc"
        @click="gotoPage(item.path)"
      >
      </VCard>
    </VWarp>

    <van-action-sheet
      v-model:show="show"
      cancel-text="取消"
      close-on-click-action
    >
      <div 
      class="sheet-cell"
      v-for="(item, index) in actions" :key="index" 
      :style="{'background-color': item.color,}"
      @click="onSelect(item.color)"
      >
        {{item.name}}<span>{{item.color}}</span> 
      </div>
    </van-action-sheet>
</template>

<script setup>
import Counter from "@/components/Counter.vue";
// import UserCell from '@/components/UserCell.vue'

// import { useRouter, useRoute } from "vue-router"
import {getCurrentInstance, ref, reactive, computed, watch, } from "vue";
import router from "@/router/index";

import { routers } from "@/router/routes";
import { colors } from "@/assets/color/colors.js";
import "@/utils/extensions";

import { cached, batch, intercept } from '@/utils/hightFn.js'

const routerList = computed(() => {
  return routers.sortKey("name", (value) => { 
    return `${value}`.toLowerCase();
  });
});

const onClickLeft = () => history.back();

const onClickRight = () => {
   show.value = !show.value;
};

const show = ref(false);
const actions = reactive([]);
actions.push(...colors)

const onSelect = (color) => {
  document.body.style.setProperty('--theme-color', color);
  onClickRight()
  let bgcolor = document.body.style.getPropertyValue('--bg-Color');
  console.log("bgcolor", bgcolor);

  console.log("color", color);
}


// const router = useRouter();
// const route = useRoute();

const currentInstance = getCurrentInstance();
// console.log(currentInstance.type.__file, RouterMap);


const gotoPage = (to) => {
  console.log(typeof router);
  // router.push("/page/12?kind=car");
  // router.push({ path: "/page/22", query: { kind: "car" } });
  // router.push({name: "page", params: {id: "32"}, query: {kind: "car"}});
  router.push({ path: to, query: { kind: "car" } });
};


const where = () =>{
  let reg = /\s+at\s(\S+)\s\(/g 
  let str = new Error().stack.toString()
  let res = reg.exec(str)&&reg.exec(str)
  return res&&res[1]
}

const fn1 = (size = "16px") => {
  console.log("parseFloat(size)", parseFloat(size) );
}

fn1()

</script>

<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}
.item{ 
  font-size: 15px;
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

.sheet-cell{
  padding: 10px;
}

.theme-div{
  background-color: var(--theme-color);

  /* color: #ffffff;
  background-color: #42b983; */
}

.vwrap{
  height: calc(100% - 46px);
  overflow-y: auto;

  /* background-color: green; */
}

.VCard:last-child{
  margin-bottom: 8px;
}
</style>
