<template>
  <!-- <div> -->
    <div v-for="(item,index) in list" :key="index">
      <slot name="node" :item="item" :level="levelRef">
        <div>{{ item.name }}</div>
      </slot>

      <div v-show="item.child && canExpand(item)" >
        <VTreeNode :list="item.child" :level="levelRef">
          <template #node="slotProps">
            <slot name="node" :item="slotProps.item" :level="slotProps.level">
              <div>{{ slotProps.item.name }}</div>
            </slot>
          </template>
        </VTreeNode>
      </div>
    </div>
  <!-- </div> -->
</template>


<script setup>
import { ref, reactive, watch, computed, onMounted, } from 'vue';

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
    validator: (val) => {
      return Array.isArray(val) && val.every(e => Reflect.has(e, 'name'));
    }
  },
  level: {
    type: Number,
    default: 0,
  }
});

const emit = defineEmits(['update:level', ])

const levelRef = computed({
  set: (newVal) => {
    if (props.level !== newVal) {
      emit("update:level", newVal);
    }
  },
  get: () => {
    const tmp = props.level + 1;
    return tmp;
  },
});

const canExpand = (item) => {
  return Reflect.has(item, 'isExpand') && item.isExpand;
};

// onMounted(() => {
//   console.log(`levelRef:${levelRef.value}`);
// });

</script>


<style scoped lang='scss'>

</style>