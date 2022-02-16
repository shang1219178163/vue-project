<template>
  <ul class="slotTodoChildren">
    <li class="lis" v-for="e in props.list" :key="e.id" @click="tap(e)">
      <!--
      我们为每个 todo 准备了一个插槽，
      将 `todo(list里的)` 对象作为一个插槽的 prop 传入。
      -->
      <slot name="todo" :obj="e">
      <!-- 后备内容 -->
      {{ e.text }}
      </slot>
    </li>
  </ul>
</template>

<script setup>
import { ref, reactive, defineProps, defineEmits } from 'vue';

const props = defineProps({
  list: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [
        {id: 1, text: '扫地'},
        {id: 2, text: '做饭'},
        {id: 3, text: '擦桌子'}
      ]
  },
})

const emit = defineEmits(['click',])

const tap = (e, idx) => {
  // alert(JSON.stringify(e))
  emit("click", e, idx);
}

</script>

<style scoped>
.slotTodoChildren .lis{
    display: block;
    background: #434534;
    line-height:40px;
    margin-top: 10px;
    color: #fff;
    /* font-size: 14px; */
    height: 40px;
}
</style>
