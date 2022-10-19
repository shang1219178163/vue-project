<template>
  <DropdownItem 
    v-model="tab" 
    :title="optionSelected.text" 
    ref="dropdownItemRef"
    v-bind="$attrs"
    @change="change"
  >
    <template #default>
      <VanCell 
        center 
        v-for="(item, index) in options" :key="index"
        :title="item.text"
        @click="clickCell(item)"
      >
        <template #icon>
          <slot name="icon" :isActive="tab === item.value" :item="item">
            <img 
              :class="['custome-cell-icon', tab === item.value ? 'active' : '']" 
              :src="item.icon"
            />
          </slot>
        </template>

        <template #title>
          <slot name="title" :isActive="tab === item.value" :item="item">
            <div 
              :class="['custome-cell-title', tab === item.value ? 'active' : '']"
            >
              {{item.text}}
            </div>
          </slot>
        </template>

        <template #value>
          <slot name="value" :isActive="tab === item.value" :item="item">
          </slot>
        </template>

        <template #right-icon>
          <slot name="right-icon" :isActive="tab === item.value" :item="item">
            <div
              :class="['custome-cell-right__icon', tab === item.value ? 'active' : '']"
            >
            </div>
          </slot>
        </template>
      </VanCell>
    </template>
  </DropdownItem>
</template>


<script setup>
import { DropdownItem } from 'vant';

import { ref, } from 'vue';


const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [],
    validator: (val) => {
      return val.every(e => Object.keys(e).includes('text') && 
        Object.keys(e).includes('value')
      );
    }
  },
  activeColor: {
    type: String,
  },
  textClass: {
    type: String,
    default: 'custome-cell-title',
  },
  textClassActive: {
    type: String,
    default: 'custome-cell-title active',
  },
  iconClass: {
    type: String,
    default: 'custome-cell-icon',
  },
  iconClassActive: {
    type: String,
    default: 'custome-cell-icon active',
  },
  change: {
    type: Function,
  }
});

const emits = defineEmits(['change', ]);

// const option = reactive([
//   { 
//     idx: 0,
//     icon: icon_interactive,
//     text: '全部消息', 
//     value: 0 
//   },
//   { 
//     idx: 1,
//     icon: icon_like,
//     text: '点赞', 
//     value: 1
//   },
//   { 
//     idx: 2,
//     icon: icon_evaluation,
//     text: '评论', 
//     value: 2 
//   },
// ]);

const optionSelected = ref(props.options[0]);
const selectedText = ref(optionSelected.value.text);
const tab = ref(optionSelected.value.value);
console.log(`tab: ${tab.value}`);

// 获取实例
const dropdownItemRef = ref(null);

const clickCell = (val) => {
  // console.log(`val: ${val}`);
  // console.log(`tab.value: ${JSON.stringify(tab.value)}`);
  // console.log(`val: ${JSON.stringify(val)}`);

  optionSelected.value = val;
  tab.value = val.value;
  selectedText.value = val.text;

  // console.log(`tab.value: ${tab.value}`);
  // console.log(`optionSelected.value: ${JSON.stringify(optionSelected.value)}`);
  // console.log(`optionSelected.text: ${optionSelected.text}`);

  if (props.change) {
    props.change(val);
  }
  dropdownItemRef.value?.toggle();
};

const change = (val) => {
  console.log(`val: ${val}`);
  emits('change', val);
};

</script>


<style scoped lang='scss'>
$activeColor: if(v-bind(activeColor), v-bind(activeColor), var(--van-dropdown-menu-title-active-text-color));

.custome-cell-icon{
  width: .36rem;
  height: .36rem;
  margin-right: 9px;
  color: $activeColor;
}

.custome-cell-title{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;
  text-align: justify;
  font-weight: 400;

  &.active{
    font-family: PingFangSC-Semibold;
    color: $activeColor;
  }
}

.custome-cell-right__icon{
  color: transparent;
  &.active{
    // color: #333333;
    @include icon_success($color: $activeColor);
  }
}

/***********************************************************/
// .van-dropdown-item :deep .van-cell__title{
//   font-family: PingFangSC-Regular;
//   font-size: 14px;
//   color: #333333;
//   letter-spacing: 0;
//   text-align: justify;
//   font-weight: 400;
// }
:deep .van-nav-bar__title{
  width: 250px;
}

// :deep .van-overlay{
//   --van-overlay-background-color: rgba(0, 0, 0, 0.3);
// }

.van-dropdown-item :deep .van-popup {
  border-bottom-left-radius: .24rem;
  border-bottom-right-radius: .24rem;
}

.van-dropdown-item :deep .van-cell {
  height: 56px;

  justify-content: center;
  align-items: center;
}

.van-dropdown-item :deep .van-cell__left-icon {
  padding-top: 4px;
  margin-right: 9px;
}

.van-dropdown-item :deep .van-icon__image {
  width: .4rem;
  height: .4rem;
}

</style>