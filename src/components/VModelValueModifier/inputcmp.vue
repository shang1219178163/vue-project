<template>
  <span>{{ msg }}</span>
  <input 
    type="text" 
    :value="modelValue || zs" 
    @input="inputemit" 
    @blur="bluremit" 
  />
</template>
 

<script setup>
let props = defineProps({
  // 带有参数自定义修饰符(args+Modifiers)
  zs: String,
  zsModifiers: {},
  // 自定义修饰符，不带参数(modelModifiers)
  modelValue: String,
  modelModifiers: {
    default: () => ({}),
  },
  msg: {
    type: String,
    default: '输入:'
  }
})
let emit = defineEmits(['update:modelValue', 'update:zs'])
// 变成大写
function inputemit (e) {
  let value = e.target.value;
  if (props.modelModifiers && props.modelModifiers.upperCase) {
    value = value.toUpperCase();
    emit("update:modelValue", value);
  }
}
// 变成大写且加上zs前缀
function bluremit (e) {
  let value = e.target.value;
  if (props.zsModifiers && props.zsModifiers.hasPre) {
    value = 'zs-' + value.toUpperCase();
    emit("update:zs", value);
  }
}
</script>