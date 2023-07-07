<template>
  <!-- <div> -->
    <div class="tree" v-for="(item,index) in list" :key="index">
      <slot name="node" :item="item" :level="levelRef">
        <div>{{ item.name }}</div>
      </slot>

      <div class="child" v-show="item.children && canExpand(item)" >
        <VTree :list="item.children">
          <template #node="slotProps">
            <slot name="node" :item="slotProps.item" :level="slotProps.level">
              <div>{{ slotProps.item.name }}</div>
            </slot>
          </template>
        </VTree>
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
  levelOffsetX: {
    type: String,
    default: "30px",
  }
});

// const emit = defineEmits(['update:level', ])

// const levelRef = computed({
//   set: (newVal) => {
//     if (props.level !== newVal) {
//       emit("update:level", newVal);
//     }
//   },
//   get: () => {
//     const tmp = props.level + 1;
//     return tmp;
//   },
// });

const canExpand = (item) => {
  return Reflect.has(item, 'isExpand') && item.isExpand;
};

// onMounted(() => {
//   console.log(`levelRef:${levelRef.value}`);
// });

</script>


<style scoped lang='scss'>
.tree {
  font-size: 20;
}

.child {
  padding-left: v-bind(levelOffsetX);
}

</style>