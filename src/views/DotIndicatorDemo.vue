<template>
  <div>
    <ul class="dots">
      <li v-for="(item, index) in 3" :key="index" 
      :class="['dots__item', index == pageIndex ? 'active' : '' ]" 
      @click="clickItem(index)"
      ></li>
    </ul>
  </div>
</template>


<script setup>
import { getCurrentInstance,ref,reactive,watch,onMounted,} from 'vue';
// import { Toast } from 'vant;

const pageIndex = ref(0)

const clickItem = (index) => {
  pageIndex.value = index;
  console.log("pageIndex.value", pageIndex.value);
};

</script>


<style scoped lang='scss'>
.dots {
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Reset styles */
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  border: 1px solid blue;
}

.dots__item {
  /* Rounded border */
  border-radius: 9999px;
  height: 12px;
  width: 12px;

  /* Active dot */
  // background: white;

  /* Inactive dot */
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.3);

  /* OPTIONAL: Spacing between dots */
  margin: 0 4px;

  &.active{
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>