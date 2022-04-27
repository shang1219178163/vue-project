<template>
  <transition @after-leave="afterLeave">
    <div class="ios-actionsheet-overlay" v-if="props.show" @click="dismiss">
      <div class="ios-actionsheet">
        <div class="ios-actionsheet-group" v-for="(group, groupIndex) in groups" :key="groupIndex" >
          <div v-for="(button, index) in group" :key="index" 
          @click.stop.prevent="clickItem(button, index, groupIndex)" 
          :class="{'ios-actionsheet-label': button.label, 
          'ios-actionsheet-button': !button.label, 
          'ios-actionsheet-button-color': button.color, 
          'ios-actionsheet-button-bold': button.bold, 
          'ios-actionsheet-button-disable': button.disable}">{{ button.text }}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { getCurrentInstance, ref, defineProps, defineEmits, defineExpose, computed } from 'vue';

const instance = getCurrentInstance()

const props = defineProps({
    buttons: [Array],
    show: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['dismiss', "clickItem"])

defineExpose({
    onclick,
})

const dismiss = () => {
    console.log(instance.type.__file, "dismiss");
    // props.show = false;
    emit("dismiss")
}

const clickItem = (button, selectedIndex, selectedGroupIndex) => {
    console.log(instance.type.__file, button, selectedIndex, selectedGroupIndex);
    emit("clickItem", {button, selectedIndex, selectedGroupIndex})

    if(button.disable){
    console.log(`button.disable:${button.disable}`);
    return;
    }
}

const afterLeave = () => {
    console.log(instance.type.__file, "afterLeave");
}
  
const groups = computed(() => {
      if(!props.buttons){
        return [];
      }

      return props.buttons.map(function(group){
        if(Object.prototype.toString.call(group) === '[object Object]'){
          return [group];
        } else {
          return group;
        }
      });
})

</script>

<style scoped>
.ios-actionsheet-overlay{
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  color: #000;
  font-size: 14px;
  line-height: 1.4;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10600;
}
.ios-actionsheet-overlay.v-enter{
  opacity: 0;
}
.ios-actionsheet-overlay.v-enter-active{
  transition: opacity .4s;
}
.ios-actionsheet-overlay.v-leave-active{
  opacity: 0;
  transition: opacity .4s;
}
.ios-actionsheet-overlay *{
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

.ios-actionsheet{
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 11000;
  width: 100%;
  transform: translate3d(0,0,0);
}
.ios-actionsheet-overlay.v-enter .ios-actionsheet{
  transform: translate3d(0,100%,0);
}
.ios-actionsheet-overlay.v-enter-active .ios-actionsheet{
  transition: transform 1.3s;
}
.ios-actionsheet-overlay.v-leave-active .ios-actionsheet{
  transform: translate3d(0,100%,0);
  transition: transform 1.4s;
}

.ios-actionsheet-group{
  margin: 8px;
}
.ios-actionsheet-button, .ios-actionsheet-label {
  width: 100%;
  text-align: center;
  font-weight: 400;
  margin: 0;
  background: rgba(243,243,243,.95);
  box-sizing: border-box;
  display: block;
  position: relative;
}
.ios-actionsheet-button:after, .ios-actionsheet-label:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: auto;
  top: auto;
  height: 1px;
  width: 100%;
  background-color: #d2d2d6;
  display: block;
  z-index: 15;
  -webkit-transform-origin: 50% 100%;
      -ms-transform-origin: 50% 100%;
          transform-origin: 50% 100%;
}
.ios-actionsheet-label {
  font-size: 13px;
  line-height: 1.3;
  min-height: 44px;
  padding: 8px 10px;
  color: #8a8a8a;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}
.ios-actionsheet-button {
  cursor: pointer;
  line-height: 43px;
  font-size: 20px;
  color: #007aff;
}
.ios-actionsheet-button.ios-actionsheet-button-color, .ios-actionsheet-label.ios-actionsheet-button-color{
  color: #ff3b30;
}
.ios-actionsheet-button.ios-actionsheet-button-bold, .ios-actionsheet-label.ios-actionsheet-button-bold{
  font-weight: bold;
}
.ios-actionsheet-button.ios-actionsheet-button-disable, .ios-actionsheet-label.ios-actionsheet-button-disable{
  /*opacity: 0.95;*/
  color: #8e8e93;
}
.ios-actionsheet-button:first-child, .ios-actionsheet-label:first-child {
  border-radius: 4px 4px 0 0;
}
.ios-actionsheet-button:last-child, .ios-actionsheet-label:last-child {
  border-radius: 0 0 4px 4px;
}
.ios-actionsheet-button:last-child:after, .ios-actionsheet-label:last-child:after{
  display: none;
}
.ios-actionsheet-button:first-child:last-child, .ios-actionsheet-label:first-child:last-child {
  border-radius: 4px;
}
</style>
