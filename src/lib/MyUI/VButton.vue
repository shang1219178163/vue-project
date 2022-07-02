 /**
  支持三种 type: 
  默认: 白色背景,外边框圆角矩形;
  高亮(highlighted): 可设置背景,字体颜色;
*/


<template>
  <button :class="['button', type, disabled ? 'disabled' : '']">
    <slot>
    {{ title }}
    </slot>
  </button>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    default: "VButton",
  },
  type: {
    type: String,
    default: "normal",
    validator: (value) => {
      return ["normal", 'highlighted'].includes(value);
    }
  },
  fontFamily: {
    type: String,
    default: "PingFangSC-Regular",
  },
  fontSize: {
    type: String,
    default: "13px",
  },
  fontWeight: {
    type: String,
    default: "500w",
  },
  fontColor: {
    type: String,
    default: "#BE965A",
  },
  bg: {
    type: String,
    default: "#FFFFFF",
  },
  bgHighlighted: {
    type: String,
    default: "linear-gradient(136deg, #BE965A, #D4BB86)",
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

  color: v-bind(fontColor);
  background: v-bind(bg);

  border: 1px solid #e4e4e4;
  border-radius: 4px;

  font-family: v-bind(fontFamily);
  font-size: v-bind(fontSize);
  font-weight: v-bind(fontWeight);

  &.highlighted {
    color: #ffffff;
    background: v-bind(bgHighlighted);
    border: 1px solid transparent;
  }
  &.disabled {
    opacity: 0.4; //有选择图片的弹窗时,会图层错位
  }
}

</style>
