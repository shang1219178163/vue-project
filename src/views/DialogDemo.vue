<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->


  <dialog id="d">
    <form method="dialog">
      <p>I'm a dialog!</p>
      <input type="text">
      <button type="submit" value="foo">提交</button>
    </form>
  </dialog>
  <button id="btn-open" @click="onDialogShow">打开 dialog</button>
  <button @click="d.showModal()">showModal()</button>
</template>


<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();


onMounted(() => {
  let btnOpen = document.querySelector("#btn-open");
  let btnClose = document.querySelector("#btn-close");
  let dialog = document.querySelector("#d");

  btnOpen.addEventListener("click", function () {
    dialog.showModal();
    openCheck(dialog);
  });


  btnClose.addEventListener("click", function () {
    dialog.close();
    openCheck(dialog);
  });

});

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// /// 打开弹窗
// const onDialogShow = () => {
//   // dialog.show();
//   dialog.showModal();
// };

// /// 关闭弹窗
// const onDialogClose = () => {
//   dialog.close();
// };

</script>


<style scoped lang='scss'>
#btn-open{
  padding: 8px;
  border-radius: 4px;
}

.d::backdrop {
  /* make the backdrop a semi-transparent black */
  background-color: rgba(0, 0, 0, 0.7);
}
</style>