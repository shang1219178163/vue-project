<template>
  <VLeave>
    <template #header>
      <van-nav-bar
        class="van-nav-bar"
        title="标题"
        left-arrow
        @click-left="onClickLeft"
      />
      <!-- <div class="navbar">标题</div> -->
    </template>
    <div class="content">
      <div v-for="(item, index) in 100" :key="index">
        <div>{{ index }}</div>
      </div>
    </div>

    <template #footer>
      <div class="footer">
        <button class="primary">提交</button>
      </div>
      
    </template>
  </VLeave>
</template>

<script setup>
import {ref, reactive, getCurrentInstance} from "vue";
// import vleave from '@/components/VLeave.vue';

let netStatus = ref(0);

const clickPlaceHolder = (val) => {
  console.log(val);
};
// setTimeout(() => {
//     netStatus.value = 0
// }, 2000);

// setTimeout(() => {
//     netStatus.value = -1
// }, 2000);
//
</script>

<style scoped>
.van-nav-bar {
}

.navbar{
  height: 46px;
}

.content {
  /* padding-top: 46px; */
  height: 100%;
}

.footer{
  height: 88px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.primary{
  width: 90%;
  height: 44px;

  border-color: transparent;
  border-radius: 22px;

  background-color: orange;
}

</style>
