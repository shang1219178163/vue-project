/**
 * 左右图标按钮
 ****************************************************
 * slot name="left"     title       slot name="right"*
 ****************************************************
 */
<template>
  <div :class="['content', {'outline': hasOutline }]" @click="click">
    <div class="start" v-show="hasStart">
      <slot name="start">
        <van-image 
        :src="require('@/assets/images/icon_order_change.png')" 
        width="18px" 
        height="18px" 
        />
      </slot>
    </div>
    <div class="mid" v-if="title">
      <slot>
        <div class="title" v-if="title">{{title}}</div>
      </slot>
    </div>
    <div class="end" v-show="hasEnd">
      <slot name="end">
        <van-image 
        :src="endIcon" 
        width="18px" 
        height="18px" 
        />
      </slot>
    </div>
  </div>
</template>


<script setup>
import { ref, reactive, computed, } from 'vue';
// import { Toast } from 'vant;

const props = defineProps({
    direction:{
      type: String,
      default: 'row',
      validator: (value) => {
        return ['row', 'column'].includes(value); 
      }
    },
    title: {
        type: String,
        default: 'VButtonIcon'
    },
    color: {
        type: String,
        default: '#333333'
    },
    padding: {
        type: String,
        default: '0 8px'
    },
    hasStart:{
        type: Boolean,
        default: true
    },
    hasEnd:{
        type: Boolean,
        default: false
    },
    hasOutline:{
        type: Boolean,
        default: false,
    }
});

let isSelected = ref(false);

const emit = defineEmits(['click', ]);
// 
// const emit = defineEmits(['update:isSelected', "click"]);
// 
// const isSelectedVal = computed({
//   set: (newVal) => {
//     if (props.isSelected !== newVal) {
//       emit('update:isSelected', newVal);
//     }
//   },
//   get: () => props.isSelected,
// });

const endIcon = computed(() => {
    // return require('@/assets/images/icon_arrow_fill_bottom.png') 
    return isSelected.value 
    ? require('@/assets/images/icon_arrow_fill_top.png') 
    : require('@/assets/images/icon_arrow_fill_bottom.png');
});

const click = () => {
    isSelected.value = !isSelected.value;
    console.log(isSelected);
    emit('click', isSelected);
};

</script>


<style scoped lang='scss'>

.content{
  display: flex;
  flex-direction: v-bind(direction);
  justify-content: center;
  align-items: center;

  padding: v-bind(padding);

  &.outline{
    border: 1px solid v-bind(color);
    border-radius: 4px;
  }
  // height: 55px;
  // background-color: green;
}


.start, .end{
  height: inhert;
  width: inhert;

  display: flex;
  align-self: center;
}

.title{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
  text-align: center;

  color: v-bind(color);

  @include syn-text-ellipsis;

  margin: 0 3px;
    // background-color: green;
}

</style>