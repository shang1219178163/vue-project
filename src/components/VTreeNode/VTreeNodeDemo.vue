<template>
  <VTreeNode 
    :list="list"
    :level="level"
  >
    <template #item="slotProps">
      <div class="NestedItem__cell">
        {{prefix(slotProps.level)}}{{slotProps.item.name}}
      </div>
    </template>
  </VTreeNode>
</template>


<script setup>
import VTreeNode from '@/components/VTreeNode/VTreeNode.vue';

import { ref, reactive, watch, onMounted, } from 'vue';

let list = reactive(
  [{ 
    name:'一级菜单',
    child:[
      { name:'二级菜单',     
        child:[
          { name:'三级菜单' },
        ]
      },
      { name:'二级菜单' },
    ]
  },
  { 
    name:'一级菜单',
    child:[
      { name:'二级菜单' },
      { name:'二级菜单' },
    ]
  },]);

const level = ref(0);


const prefix = (count) => {
  return '__'.repeat(count);
};

const onMore = async () => {

};

</script>


<style scoped lang='scss'>
.NestedItem__cell{
  height: 45px;

  // background-color: green;

  border-bottom: 1px solid #e4e4e4;
}
</style>