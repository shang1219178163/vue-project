<template>
  <van-overlay :show="show">
    <div class="wrapper" @click="showVal = false">
      <slot name="wrapper">
        <div class="popover-all-container">
          <slot name="cell">
            <div 
              class="popover-item-container"
              v-for="(item, index) in items" :key="index"
              @click="click(index)"
            >
              <img
                class="popover-item-icon"
                v-show="item.icon"
                :src="item.icon"
              />
              <div class="popover-item-text">{{item.title}}</div>
            </div>
          </slot>
        </div>
      </slot>
    </div>
  </van-overlay>
</template>


<script setup>
import {ref, reactive, computed, } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
    require: true,
  },  
  items: {
    type: Array,
    default: () => [],
    validator: (value) => {
      return Array.isArray(value) && value.every((e) => {
        return e.title;
      });
    }
  },
  width: {
    type: String,
    default: '3rem',
  },
  height: {
    type: String,
    default: 'min-content',
  },
  top: {
    type: String,
    default: '.88rem',
  },
  left: {
    type: String,
    default: 'calc(100% - .24rem - 3rem)',
  },
  cellHieght: {
    type: String,
    default: '.87rem',
  },
});


const emit = defineEmits(['update:show', 'click']);
const showVal = computed({
  set: (newVal) => {
    if (showVal.value !== newVal) {
      emit('update:show', newVal);
    }
  },
  get: () => props.show,
});

const click = (index) => {
  emit('click', index);
};

</script>


<style scoped lang='scss'>

$width: v-bind(width);
$height: v-bind(height);
$top: v-bind(top);
$left: v-bind(left);

$cellHieght: v-bind(cellHieght);

.wrapper {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.popover-all-container {
  position: relative;
  overflow: scroll;

  display: flex;
  flex-direction: column;

  width: $width;
  height: $height;
  top: $top;
  left: $left;

  background-color: #ffffff;
  border-radius: .12rem;
}
.popover-item-container {
  display: flex;
  flex-direction: row;
  align-items: center;

  height: $cellHieght;

  border-bottom: 0.5px solid rgba(238,238,238,1);
}

.popover-item-container:last-child{
  border-bottom: 0.5px solid transparent;
}

.popover-item-icon {
  width: .32rem;
  height: .32rem;
  margin-left: .24rem;
  margin-right: .24rem;
}
.popover-item-text {
  font-size: .28rem;
  font-weight: 400;
  color: #333333;
}

</style>



