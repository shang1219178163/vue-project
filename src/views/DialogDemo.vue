<template>
  <h1>{{ $route.meta.title }}</h1>
  <!-- <h1>{{ JSON.stringify(route) }}</h1> -->
  <button id="btn-open" @click="onDialogShow">打开 dialog</button>

  <dialog id="dialog">
    <form method="dialog">
      <input type="text">
      <button type="submit" value="foo">提交</button>
    </form>
    <!-- <button id="btn-close" @click="onDialogClose">关闭</button> -->
  </dialog>
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
  let dialog = document.querySelector("#dialog");

  btnOpen.addEventListener("click", function () {
  // dialog.show();
  dialog.showModal();
  });


  btnClose.addEventListener("click", function () {
    dialog.close();
  });

});


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
.dialog::backdrop {
  /* make the backdrop a semi-transparent black */
  background-color: rgba(0, 0, 0, 0.7);
}
</style>