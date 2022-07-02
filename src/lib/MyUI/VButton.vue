 /**
  支持两种 type: 
  默认(normal): 白色背景,外边框圆角矩形;
  高亮(highlighted): 可设置背景,字体颜色;
  通过 disabled控制按钮是否可以点击态;
*/


<template>
  <button 
    :class="['button', type, classHighlighted, isHighlighted ? 'highlighted' : '', disabled ? 'disabled' : '']"
  >
    <slot>{{ title }}</slot>
  </button>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    default: "VButton",
    validator: (value) => {
      return value;
    }
  },
  type: {
    type: String,
    default: "normal",
    validator: (value) => {
      return ["normal", 'highlighted'].includes(value);
    }
  },
  color: {
    type: String,
    default: "#BE965A",
    validator: (value) => {
      return value;
    }
  },
  classHighlighted: {
    type: String,
    default: "",
  },
  isHighlighted: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

</script>

<style scoped lang="scss">
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin line-limit-length {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@mixin text {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #333333;
  letter-spacing: 0;
  line-height: 16px;
}
.button {
  @include flex-center;
  @include text;
  @include line-limit-length;

  color: v-bind(color);
  background: v-bind(bg);

  border: 1px solid v-bind(color);
  border-radius: 4px;
}
.highlighted {
  color: #ffffff;
  background: v-bind(color);
  border: 1px solid transparent;
}
.disabled {
  opacity: 0.4; //有选择图片的弹窗时,会图层错位
}
</style>
