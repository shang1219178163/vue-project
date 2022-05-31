<template>
  <div class="dropdown">
    <!-- The trigger element -->
    <button
    @click="showRef = !showRef"
    >下拉菜单</button>

    <!-- The content -->
    <div :class="['dropdown__content', showRef ? 'active' : '']">
      <div 
        v-for="(item, index) in 9" :key="index"
        @click="onItem(index)"
      >item_{{index}}</div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted } from "vue";
// import { Toast } from 'vant;

const showRef = ref(false);

const onRefresh = async () => {};

const onItem = (v) => {
  console.log(v);

};
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;

  margin: 20px;
}

/* Hide the dropdown's content by default */
.dropdown__content {
  display: none;
  // visibility: hidden;

  /* Position it right below the trigger element */
  position: absolute;
  left: 0;
  top: 100%;
  padding-top: 4px;

  /* It should be on the top of other elements */
  z-index: 9999;

  /* Size */
  // height: 200px;
  // width: 200px;
  min-width: 100px;
  max-width: 50%;
  // min-height: 200px;
  max-height: 60vh;

  &.active{
    display: block;
    // visibility: visible;
  }

  border: 1px solid blue;
  // background: #fff;
}

/* Show the content when hover on the container */
// .dropdown:hover .dropdown__content {
//   display: block;
// }
</style>
