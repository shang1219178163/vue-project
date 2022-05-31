<template>
  <h1> section</h1>

  <div class="section">
    <!-- Header -->
    <div class="section__header">
      <!-- Title -->
      <div>title</div>
      <!-- Close icon sticks to the right -->
      <button class="section__footer--button">关闭</button>
    </div>

    <!-- Content -->
    <div>第一段</div>
    <div>第二段</div>
    <div>第三段</div>

    <!-- Footer -->
    <div class="section__footer">
      <button class="section__footer--button">取消</button>
      <button class="section__footer--button">确定</button>
    </div>
  </div>
  <div style="border: 0.3px solid #e4e4e4"></div>
  <h1>grid section</h1>
  <div class="section__grid">
    <div class="section__grid--item" v-for="(item, index) in 9" :key="index">title</div>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted } from "vue";
// import { Toast } from 'vant;

const onRefresh = async () => {};

const onMore = async () => {};
</script>

<style scoped lang="scss">
.section {
  /* Border */
  border: 0.3px solid #e4e4e4;
  border-radius: 4px;

  margin: 8px;
}

.section__header {
  display: flex;
  justify-content: space-between;
  /* Border */
  border-bottom: 0.3px solid #e4e4e4;
}

.section__footer {
  display: flex;
  /* Push the buttons to the right */
  justify-content: flex-end;
  /* Border */
  border-top: 0.3px solid #e4e4e4;
}

.section__footer--button{
  margin: 10px 10px 10px 0;
}


.section__grid{
  display: grid;
  grid-template-columns: 70px auto 70px;

}


.section__grid--item{

  border: 0.3px solid #e4e4e4;
}
</style>
