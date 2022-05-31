<template>
<div class="box">
  <div class="box__step">
    <button class="box__step--button" @click="sub">-</button>
      <div class="box__step--content">
        <input 
        type="text" 
        class="box__step--content--input" 
        :value="count"
        @input="oninput"
        >
      </div>
    <button class="box__step--button" @click="add">+</button>
  </div>
</div>
</template>

<script setup>
import { getCurrentInstance, ref, reactive, watch, onMounted } from "vue";
// import { Toast } from 'vant;

const props = defineProps({
  count: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100000,
  },
  height: {
    type: String,
    default: "32px",
  },
  padding: {
    type: String,
    default: "0",
  },
  color: {
    type: String,
    default: "rgba(0, 0, 0, 0.1)",
  },
  radius: {
    type: String,
    default: "4px",
  },
});

const emit = defineEmits(['min', 'max',])

const count = ref(0)

const add = () => {
  if (count.value + 1 > props.max ) {
    emit("max", props.max);
    return;
  }
  count.value++;
};

const sub = () => {
  if (count.value - 1 < props.min ) {
    emit("min", props.min);
    return;
  }
  count.value--;
};

/* 私有方法 */

const oninput = (e) => {
  e.target.value = e.target.value.replace(/[^\0-\9]/g, '');
  // console.log(e.target.value);
};
</script>

<style scoped lang="scss">

$height: v-bind(height);
$padding: v-bind(padding);
$color: v-bind(color);
$radius: v-bind(radius);
.box{
  padding: $padding;
}

.box__step{
  display: flex;
  height: $height;
  width: calc($height * 4);

  border: 1px solid $color;
  border-radius: $radius;
}

.box__step--content{
  flex: 1;

  height: 100%;
}

.box__step--content--input{
  box-sizing: border-box;

  height: 100%;
  width: 100%;

  border-color: transparent;
}

.box__step--button{
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: $height;
  background: $color;
  border-color: transparent;
}



</style>
