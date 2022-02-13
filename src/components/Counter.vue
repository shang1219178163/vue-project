<template>
  <div class="box">
    <input type="button" value="-" @click="sub1" />
    <span>{{ aCount }}</span>
    <input type="button" value="+" @click="add1" />
  </div>
</template>

<script setup>
// import { created, mounted } from "vue";
import { defineExpose, ref, reactive, computed, watch, getCurrentInstance } from "vue";

// eslint-disable-next-line no-undef
const props = defineProps({
  step: {
    type: Number,
    default: 1,
  },
  count: {
    type: Number,
    default: 9,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 20,
  },
});

// eslint-disable-next-line no-undef
const emit = defineEmits(["add", "sub", "change", "min", "max"]);

const aCount = ref(props.count);

const go = (val) => {
  // console.log(parseInt(val));

  const aValue = aCount.value + parseInt(val);
  if (aValue > props.max) {
    emit("max", props.max);
    return;
  }

  if (aValue < props.min) {
    emit("min", props.min);
    return;
  }
  // aCount.value += parseInt(val);
  aCount.value = aValue;
  console.log("aCount", aCount.value);

  emit("change", aCount.value);
  if (val > 0) {
    emit("add", val);
  } else {
    emit("sub", val);
  }
};

const add1 = () => {
  go(props.step);
};

const sub1 = () => {
  go(-props.step);
};

const a88 = ref("aa")
const b88 = ref(true)
defineExpose({
  a88,b88
})

const instance = getCurrentInstance()
console.log(instance.type.__file, instance) ;
</script>

<style scoped>
.box {
  width: 100px;
  margin: auto;
  padding: 8px;
}

span {
  padding: 0px 5px 0px;
}
</style>
