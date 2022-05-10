/**
 * 卡片视图 默认 margin/padding 8px, borderRadius 4px;
 **********************************************
 *  headerTitle || slot name="header"         *
 *  *******************************************
 *  *                                         *
 *  *  内容                                    *
 *  *                                         *
 *  *******************************************
 *  footerTitle || slot name="footer"         *
 **********************************************
 */

<template>
    <div class="card">
        <div>
            <slot name="header">
                <div class="header" v-if="headerTitle">{{headerTitle}}</div>
            </slot>
        </div>
        <div>
            <slot>
                <div class="content" v-if="content">{{content}}</div>
            </slot>
        </div>
        <div>
            <slot name="footer">
                <div class="footer" v-if="footerTitle">{{footerTitle}}</div>
            </slot>
        </div>
    </div>
</template>


<script setup>
import { ref, getCurrentInstance } from 'vue';

const props = defineProps({
    /// 标题
    headerTitle: {
        type: String,
        default: undefined
    },
    /// 标题字体 css font
    headerFont: {
        type: String,
        default: "medium PingFangSC-Regular"
    },
    /// 标题颜色 css color
    headerColor: {
        type: String,
        default: "#000000",
    },

    /// 内容
    content: {
        type: String,
        default: undefined
    },
    /// 内容字体 css font
    font: {
        type: String,
        default: "PingFangSC-Regular"
    },
    /// 内容颜色 css color
    color: {
        type: String,
        default: "#000000",
    },

    /// 标尾
    footerTitle: {
        type: String,
        default: undefined
    },
    /// 标尾 css font
    footerFont: {
        type: String,
        default: "smaller PingFangSC-Regular"
    },
    /// 标尾颜色 css color
    footerColor: {
        type: String,
        default: "#000000",
    },

    /// css margin
    margin: {
        type: String,
        default: "8px"
    },
    /// css padding
    padding: {
        type: String,
        default: "8px"
    },
    /// css border-radius
    borderRadius: {
        type: String,
        default: "4px"
    },
    /// css background-color
    backgroundColor: {
        type: String,
        default: "white",
    },
    /// css box-shadow
    boxShadow: {
        type: String,
        default: "0px 4px 18px 0px rgba(0,0,0,0.08)",
    },
    ///裁剪 css overflow
    overflow: {
        type: String,
        default: "hidden",
    },
})

// defineExpose({
//     val,
// })

// const val1 = ref(33)

// const instance = getCurrentInstance()
// console.log(instance.type.__file, instance);

</script>


<style scoped>
.card{
    /* background-color: green;; */
    background-color: v-bind(backgroundColor);
    border-radius: v-bind(borderRadius);

    margin: v-bind(margin);
    padding: v-bind(padding);

    /* box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.08); */
    box-shadow: v-bind(boxShadow);

    overflow: v-bind(overflow);
}

.header{
    color: v-bind(headerColor);
    font: v-bind(headerFont);
}

.content{
    color: v-bind(color);
    font: v-bind(font);
}


.footer{
    color: v-bind(footerColor);
    font: v-bind(footerFont);
}

</style>