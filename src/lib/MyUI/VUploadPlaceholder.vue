<template>
    <div class="content" @click="click">
        <div class="section">
            <img class="image" :src="src"/>
            <div class="title" v-if="title">{{ title }}</div>
        </div>
    </div>
</template>



<script setup>
import {ref, reactive, onMounted,} from 'vue';
// import { Toast } from 'vant;

const props = defineProps({
    width: {
        type: String,
        default: "100px"
    },
    height: {
        type: String,
        default: "100px"
    },
    imgWidth: {
        type: String,
        default: "24px"
    },
    imgHeight: {
        type: String,
        default: "20px"
    },
    title: {
        type: String,
        default: "标题"
    },
    src: {
        type: String,
        default: undefined
    },
    fontFamily: {
        type: String,
        default: "PingFangSC-Regular"
    },
    fontSize: {
        type: String,
        default: "12px"
    },
    fontColor: {
        type: String,
        default: "#999999"
    },
    background: {
        type: String,
        default: "#FAFAFC"
    },
})

const emits = defineEmits(["click"])

const click = () => {
    if (props.type === "disabled" || props.disabled) {
        return
    }
    emits("click", props.type)
}

</script>



<style scoped lang='scss'>

@mixin flex-column-center{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

// div{
//     border: 1px solid blue;
// }

.content{
    width: v-bind(width);
    height: v-bind(height);

    background: v-bind(background);
    border: 1px solid #F1F3F6;

    @include flex-column-center;
}

.section{
    @include flex-column-center;
}
.image{
    width: v-bind(imgWidth);
    height: v-bind(imgHeight);
}
.title{
    font-family: v-bind(fontFamily);
    font-size: v-bind(fontSize);
    color: v-bind(fontColor);
    letter-spacing: 0;

    padding-top: 4px;
}


</style>