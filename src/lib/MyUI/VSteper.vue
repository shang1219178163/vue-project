<template>
  <div class="box">
    <!-- Step -->
    <div class="box__step" 
      v-for="(item, i) in count" :key="i"
    >
      <div class='box__connector'>
        <!-- The start connector -->
        <div :class="['box__connector--leading', i <= indexRef ? 'active' : '']"></div>

        <!-- The step dot -->
        <!-- <slot name="dot">
          <div 
          :class="['box__connector--dot', i <= indexRef ? 'active' : '']"
          @click="clickdot(i)"
          >{{i}}</div>
        </slot> -->

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
        <!-- The end connector -->
        <div :class="['box__connector--tailing', i < indexRef ? 'active' : '']"></div>
      </div>

      <!-- Title of step -->
      <slot name="dotContent" :index="i" >
        <div class="box__step--content">content of step {{i}}</div>
      </slot>
    </div>

    <!-- Repeat other steps -->
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
    default: ' 0 4px',
  },
  dotPadding: {
    type: String,
    default: ' 0',
  },
  contentMargin: {
    type: String,
    default: ' 0 3px',
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

$stepColor: v-bind(stepColor);
$stepActiveColor: v-bind(stepActiveColor);

$padding: v-bind(padding);
$margin: v-bind(margin);

$dotSize: v-bind(dotSize);
$dotMargin: v-bind(dotMargin);
$dotPadding: v-bind(dotPadding);

$contentMargin: v-bind(contentMargin);
$contentPadding: v-bind(contentPadding);

// $stepColor: rgba(0, 0, 0, 0.1);
// $stepActiveColor: gold;

// $padding: 0;
// $margin: 0;

// $dotSize: 32px;
// $dotMargin: 0 4px;
// $dotPadding: 0;

// $contentMargin: 0 3px;
// $contentPadding: 0;

.box {
  display: flex;

  margin: $margin;
  padding: $padding;
  border: 1px solid blue;
}

.box__step {
  /* Make all steps have the same width */
  flex: 1;
}

.box__connector {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 0;
}

.box__connector--leading,
.box__connector--tailing
{
  flex: 1;
  height: 1px;
  background-color: $stepColor;
  &.active{
    background-color: $stepActiveColor;
  }
}

.box__step:first-child .box__connector--leading,
.box__step:last-child .box__connector--tailing {
  background-color: transparent;
}

.box__connector--dot {
  /* Center the content */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Rounded border */
  background-color: $stepColor;
  border-radius: 9999px;
  height: $dotSize;
  width: $dotSize;

  /* OPTIONAL: Spacing between it and connectors */
  margin: $dotMargin;
  padding: $dotPadding;

  &.active{
    background-color: $stepActiveColor;
  }
}

.box__step--content{
  border: 1px solid blue;
  margin: $contentMargin;
  padding: $contentPadding;

}
</style>
