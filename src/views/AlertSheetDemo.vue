
<template>
  <div class='container'>
    <van-nav-bar title="人员清单" left-arrow  @click-left="onClickLeft"/>
    <van-cell is-link title="van-action-sheet" @click="click" />
    <!-- <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" cancel-text="取消"
 /> -->

    <!-- <vue-sheet v-model:show="show" :buttons="buttons" @dismiss="dismiss" /> -->
    <call-phone :show="show" :phone="'188888888999'" @click="callphone" @cancell="cancell" />

    <!-- <van-cell is-link title="van-overlay" @click="click" />
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block" />
      </div>
    </van-overlay>
    <van-cell is-link title="基础用法 ios-action-sheet" @click="click" /> -->

    <!-- <div di="ios-action-sheet" ></div> -->
    <!-- <ios-action-sheet>sheet</ios-action-sheet> -->
    <!-- <my-header>
        <template #title> 
          Building Your Own Vue 3 Plugin - <i> A Full Guide </i>
        </template>
        <template #author> 
          Matt Maribojoc
        </template>
    </my-header> -->

    <div class="qq">qqqq</div>
    <button @click="click">button</button>

    <!-- <p v-pin="200" v-randomcolor >Stick me 200px from the top of the page</p> -->
    <!-- <div v-font-size="'large'">ffff</div>
    <div v-font-size="'huge'">gggg</div> -->
    <!-- <input type="text" v-focus /> -->
    <!-- <div v-demo="{ color: 'white', text: 'hello!' }">v-demo</div>
    <div v-demo="'zzz'" v-randomcolor>zzz_v-demo</div> -->
    <!-- <p v-randomcolor>Hello World</p>
    <p v-bordercolor>bordercolor</p>
    <div v-bordercolor>bordercolor1111</div> -->
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted, inject } from 'vue';
import { Toast, Overlay } from 'vant';

// import { MyHeader } from '@/components/MyHeader.vue';

// import iosAlertSheet from '@/components/iosAlertSheet';
import randomcolor from '@/utils/random.js';
import CallPhone from '@/components/CallPhone.vue';

const onClickLeft = () => history.back();

const show = ref(false);

const actions = [
    { name: '选项一' },
    { name: '选项二' },
    { name: '选项三' },
];
const onSelect = (item) => {
    // 默认情况下点击选项时不会自动收起
    // 可以通过 close-on-click-action 属性开启自动收起
    show.value = false;
    Toast(item.name);
};

const instance = getCurrentInstance()
console.log(instance.type.__file, instance);


const buttons = [[{
    text: 'multi button group',
    // label: true,
    color: true
  }], [{
    text: 'button in next group',
    // label: true
  }, {
    text: 'button disabled',
    disable: true
  }, {
    text: 'button with click callback',
    handle: function(data){
      alert(JSON.stringify(data));
    }
  }]
]


const dismiss = () => {
    show.value = !show.value;
    console.log(instance.type.__file);
  // instance.appContext.config.globalProperties.$iosActionSheet()
}

const click = () => {
    show.value = !show.value;
    console.log(instance.type.__file, "show.value", show.value);
  // instance.appContext.config.globalProperties.$iosActionSheet()
}

const $iosActionSheet = inject('$iosActionSheet');   

const button = () => {
  console.log(instance.type.__file, "$iosActionSheet", $iosActionSheet);
  // $iosActionsheet([{
  //     text: 'sing goup button',
  //     label: true
  //   }, {
  //     text: 'button1'
  //   }, {
  //     text: 'button with bold',
  //     bold: true
  //   }, {
  //     text: 'button with color',
  //     color: true
  //   }])
}

const callphone = (val) => {
  show.value = false;
  console.log(instance.type.__file, "callphone", val);
}

const cancell = () => {
  show.value = false;
  console.log(instance.type.__file, "cancell");
}

console.log(instance.type.__file, "randomcolor", randomcolor());

</script>


<style scoped>
/* .container{
  --randomcolor: randomcolor();
} */

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}

.qq{
  background-color: var(--randomColor);
  /* background-color: green; */

  /* background-color: red; */
}



</style>