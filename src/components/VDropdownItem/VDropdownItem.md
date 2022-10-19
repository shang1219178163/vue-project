# VDropdownItem
因为要改变选中字体，DropdownItem 无法满足需求，在此基础上二次定制；改造 icon 插槽，title 插槽，#value 插槽，right-icon 插槽为带参的具名插槽；可随意定制任意部分；

## 1. Example
```
<template>
  <navbar
    left-arrow      
    navBarTitle="数据透传"
    isleftarrow
  >
    <template #title>
      <DropdownMenu activeColor="#333333"	>
        <VDropdownItem 
          activeColor="#333333"
          :options="options"
          :change="change"
        >
          <!-- <template #icon="slotProps">
            <img 
              class="custome__cell__icon" 
              :src="slotProps.item.icon"
            />
          </template> -->

          <!-- <template #title="slotProps">
            <div 
              :class="['custome__cell__title', slotProps.isActive ? 'active' : '']"
            >
              {{slotProps.item.text}}
            </div>
          </template> -->

          <!-- <template #right-icon="slotProps">
            <div
            :class="['custome__cell__right__icon', slotProps.isActive ? 'active' : '']"
            >
            </div>
          </template> -->
        </VDropdownItem>
      </DropdownMenu>
    </template>
  </navbar>
</template>


<script setup>
import navbar from '@/components/navbar.vue';
import VDropdownItem from '@/components/VDropdownItem/VDropdownItem.vue';


import { getCurrentInstance, ref, reactive, watch, onMounted, } from 'vue';
// import { Toast } from 'vant;
import { DropdownMenu, DropdownItem } from 'vant';
// import type { DropdownItemInstance } from 'vant';

import icon_interactive from '@/assets/images/icon_interactive_base64';
import icon_like from '@/assets/images/icon_like_base64';
import icon_evaluation from '@/assets/images/icon_evaluation_base64';


const options = reactive([
  { 
    idx: 0,
    icon: icon_interactive,
    text: '全部消息1', 
    value: 10 
  },
  { 
    idx: 1,
    icon: icon_like,
    text: '点赞1', 
    value: 11
  },
  { 
    idx: 2,
    icon: icon_evaluation,
    text: '评论1', 
    value: 12 
  },
]);

const change = (val) => {
  console.log(`demo val: ${val}`);

};

</script>


<style scoped lang='scss'>

:deep .van-dropdown-menu{
  min-width: 250px;
}
.custome__cell__icon{
  width: .4rem;
  height: .4rem;
  padding-right: 9px;
}

.custome__cell__title{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;
  text-align: justify;
  font-weight: 400;

  &.active{
    font-family: PingFangSC-Semibold;
  }
}

// .custome__cell__right__icon{
//   color: transparent;
//   &.active{
//     color: #333333;
//   }
// }

</style>
```