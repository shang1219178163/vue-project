<template>
  <VTreeNode 
    :list="list"
    :level="level"
  >
    <template #node="slotProps">
      <div class="tree-node">
        {{prefix(slotProps.level)}}{{slotProps.item.name}}{{sufix(slotProps.item)}}
      </div>
    </template>
  </VTreeNode>
</template>


<script setup>
import VTreeNode from '@/components/VTreeNode/VTreeNode.vue';

import { ref, reactive, watch, onMounted, } from 'vue';

let list = reactive(
  [{ 
    name:'1 一级菜单',
    isExpand: true,//是否展开子项
    enabled: false,//是否可以响应事件
    child:[
      { name:'1.1 二级菜单',     
        isExpand: true,
        child:[
          { name:'1.1.1 三级菜单', isExpand: true, },
        ]
      },
      { name:'1.2 二级菜单', isExpand: true, },
    ]
  },
  { 
    name:'1.1 一级菜单',
    isExpand: true,
    child:[
      { name:'1.1.1 二级菜单', isExpand: true, },
      { name:'1.1.2 二级菜单', 
        isExpand: false, 
        child:[
          { name:'1.1.2.1 三级菜单', isExpand: true, },
        ]},
    ]
  },]
);


const level = ref(0);


const prefix = (count) => {
  return '__'.repeat(count);
};


const sufix = (item) => {
  if (!Reflect.has(item, 'child')) {
    return '';
  }
  return ` (${item.child.length}子项)`;
};

</script>


<style scoped lang='scss'>
.tree-node{
  height: 45px;

  display: flex;
  justify-self: center;
  align-items: center;

  // background-color: green;

  border-bottom: 1px solid #e4e4e4;
}
</style>