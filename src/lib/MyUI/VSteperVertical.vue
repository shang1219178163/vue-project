<template>
  <div class="box">
    <div class="box__step" 
      v-for="(item, i) in count" :key="i"
    >
      <div class="box__step__cell" >
        <slot name="left" :index="i" >
          <!-- <div class="box__step__cell--left">left</div> -->
        </slot>

        <div class='box__connector'>
          <div :class="['box__connector--leading', i <= indexRef ? 'active' : '']"></div>
          <slot name="dot" :index="i" v-if="i <= indexRef">
            <div 
            :class="['box__connector--dot', i <= indexRef ? 'active' : '']"
            @click="clickDot(i)"
            >{{i}}</div>
          </slot>
          <slot name="dotActive" :index="i" v-else >
            <div 
            :class="['box__connector--dot', i <= indexRef ? 'active' : '']"
            @click="clickDot(i)"
            >{{i}}</div>
          </slot>
          <div :class="['box__connector--tailing', i < indexRef ? 'active' : '']"></div>
        </div>
        
        <slot name="right" :index="i" >
          <!-- <div class="box__step__cell--right">
            <div v-for="(item, index) in i" :key="index">right{{index}}</div>
          </div> -->
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted } from "vue";
// import { Toast } from 'vant;

const props = defineProps({
  count: {
    type: Number,
    default: 3
  },
  index: {
    type: Number,
    default: 1
  },
  canChangeIdx: {
    type: Boolean,
    default: false,
  },
  stepColor: {
    type: String,
    default: ' rgba(0, 0, 0, 0.1)',
  },
  stepActiveColor: {
    type: String,
    default: ' gold',
  },
  padding: {
    type: String,
    default: ' 0',
  },
  margin: {
    type: String,
    default: ' 0',
  },
  dotSize: {
    type: String,
    default: ' 32px',
  },
  dotMargin: {
    type: String,
    default: '0px 0',
  },
  dotPadding: {
    type: String,
    default: ' 0',
  },
  contentMargin: {
    type: String,
    default: ' 0',
  },
  contentPadding: {
    type: String,
    default: ' 0',
  },
});

const emit = defineEmits(['clickDot',])

const indexRef = ref(props.index);

const clickDot = (v) => {
  if (!props.canChangeIdx) {
    return;
  }
  console.log(v);
  indexRef.value = v;
  emit("clickDot", v);
};
</script>

<style scoped lang="scss">

.button{
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;

  &.active{
    color: white;
    background-color: $--theme-color;
  }
}


$stepColor: v-bind(stepColor);
$stepActiveColor: v-bind(stepActiveColor);

$padding: v-bind(padding);
$margin: v-bind(margin);

$dotSize: v-bind(dotSize);
$dotMargin: v-bind(dotMargin);
$dotPadding: v-bind(dotPadding);

$contentMargin: v-bind(contentMargin);
$contentPadding: v-bind(contentPadding);

$direction: column;

.box {
  display: flex;
  flex-direction: $direction;

  margin: $margin;
  padding: $padding;
  // border: 1px solid blue;

}

.box__step {
  /* Make all steps have the same width */
  flex: 1;
  
}

.box__step__cell{
  // height: inherit;
  // height: 100%;

  display: flex;
  // flex-direction: $direction;
  // align-items: center;
  // justify-content: center;
}

.box__step__cell--left{
  padding: 10px;
}
.box__step__cell--right
{
  width: 100%;
  padding: 10px;
  // background-color: green;
}


.box__connector {
  padding: 0 5px;
  width: $dotSize;

  // border: 1px solid green;
}

.box__connector--leading,
.box__connector--tailing
{
  flex: 1;

  margin-left: calc($dotSize/2);
  width: 1px;

  background-color: $stepColor;
  height: calc((100% - $dotSize)/2);
  &.active{
    margin-left: calc($dotSize/2);

    background-color: $stepActiveColor;
    // height: calc((100% - $dotSize)/2);
  }
  // height: 100px;
}

.box__step:first-child .box__connector--leading,
.box__step:last-child .box__connector--tailing {
  background-color: transparent;
}

.box__connector--dot {
  /* Center the content */
  display: flex;
  flex-direction: $direction;
  align-items: center;
  justify-content: center;

  /* Rounded border */
  border-radius: 9999px;
  height: $dotSize;
  width: $dotSize;

  /* OPTIONAL: Spacing between it and connectors */
  margin: $dotMargin;
  padding: $dotPadding;

  background-color: $stepColor;
  &.active{
    background-color: $stepActiveColor;
  }
}

.box__step--content{
  margin: $contentMargin;
  padding: $contentPadding;

}
</style>

