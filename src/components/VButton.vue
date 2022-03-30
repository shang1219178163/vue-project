/**
    此组件用于按钮需要额外支持高亮(Highlighted)和不可点击(disabled)的情形, disabled 为true 时不会返回事件;
 */

<template>
    <button 
    :class="['button', disabled ? 'disabled' : type]"
    @click="click"
    >
        <slot>{{ title }}</slot>
    </button>
</template>


<script setup>
import {ref, reactive, onMounted, defineProps, defineEmits} from 'vue';
// import { Toast } from 'vant;

const props = defineProps({
    title: {
        type: String,
        default: "VButton"
    },
    type: {
        type: String,
        default: "default"
    },
    fontFamily: {
        type: String,
        default: "PingFangSC-Regular"
    },
    fontSize: {
        type: String,
        default: "15px"
    },
    fontColor: {
        type: String,
        default: "#333333"
    },
    background: {
        type: String,
        default: "#FAFAFC"
    },
    backgroundHighlighted: {
        type: String,
        default: "#FFC800"
    },
    disabled: {
        type: Boolean,
        default: false
    },
})

const emits = defineEmits(["click"])

const click = () => {
    if (props.type === "disabled") {
        return
    }
    emits("click", props.type)
}

</script>


<style scoped lang='scss'>

@mixin text{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    letter-spacing: 0;
    line-height: 16px;
}
.button{
    @include text;
    font-family: v-bind(fontFamily);
    font-size: v-bind(fontSize);
    color: v-bind(fontColor);

    background: v-bind(background);
    border: 1px solid #E4E4E4;
    border-radius: 4px;
    &.highlighted{
        background: v-bind(backgroundHighlighted);
        border: 1px solid transparent;
    }
    &.disabled{
        background: v-bind(background);
        opacity: 0.3;
    }
}
</style>