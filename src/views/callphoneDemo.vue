
<template>
  <div class='container'>
    <van-nav-bar title="CallPhonedemo" left-arrow  @click-left="onClickLeft"/>
    <van-cell is-link title="van-action-sheet" @click="click" />
    <van-cell is-link title="打电话" @click="callPhoneNew" />
    <!-- <call-phone :show="show" @click="callphone" @cancell="cancell" /> -->
    <call-phone-one :show="show" :phone="phone" @click="callphone" @cancell="cancell" @dismiss="dismiss"/>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted, inject } from 'vue';

import callPhone from '@/components/CallPhone.vue';
import callPhoneOne from '@/components/CallPhoneOne.vue';

const onClickLeft = () => history.back();

const show = ref(false);
const phone = ref("177777777777");

const instance = getCurrentInstance()
// console.log(instance);

const click = () => {
    show.value = !show.value;
    console.log("show.value", show.value);
  // instance.appContext.config.globalProperties.$iosActionSheet()
}


const callPhoneNew = () => {
  //  window.location.href = 'tel://' + phoneNumber
  window.location.href = 'tel:' + 18729742695
}

const dismiss = () => {
    console.log("dismiss");
    show.value = !show.value;
    // props.show = false;
}

const callphone = (val) => {
    show.value = false;
    console.log("callphone", val);
}

const cancell = (val) => {
    show.value = false;
    console.log("cancell", val);
}

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