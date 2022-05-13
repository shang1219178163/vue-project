<template>
  <input type="text" :value="modelValue || zs" @input="inputemit" @blur="bluremit" />
</template>
 
 
<script >
export default {
  props: {
    // 带有参数自定义修饰符(args+Modifiers)
    zs: String,
    zsModifiers: {},
    // 自定义修饰符，不带参数(modelModifiers)
    modelValue: String,
    modelModifiers: {
      default: () => ({}),
    },
  },
  methods: {
    // 变成大写
    inputemit (e) {
      let value = e.target.value;
      if (this.modelModifiers && this.modelModifiers.upperCase) {
        value = value.toUpperCase();
        this.$emit("update:modelValue", value);
      }
    },
    // 变成大写且加上zs前缀
    bluremit (e) {
      let value = e.target.value;
      if (this.zsModifiers && this.zsModifiers.hasPre) {
        value = 'zs-' + value.toUpperCase();
        this.$emit("update:zs", value);
      }
    }
  },
};
</script>