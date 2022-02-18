<template>
    <div class="card">
        <div>
            <slot name="header"></slot>
        </div>
        <div>
            <slot></slot>
        </div>
        <div>
            <slot name="footer"></slot>
        </div>
    </div>
</template>


<script setup>
import { ref, getCurrentInstance, defineProps, defineExpose } from 'vue';

const props = defineProps({
    radius: {
        type: Number,
        default: 8
    },
    marginTop: {
        type: Number,
        default: 8
    },
    marginRight: {
        type: Number,
        default: 8
    },
    marginBottom: {
        type: Number,
        default: 8
    },
    marginLeft: {
        type: Number,
        default: 8
    },
    paddingTop: {
        type: Number,
        default: 8
    },
    paddingRight: {
        type: Number,
        default: 8
    },
    paddingBottom: {
        type: Number,
        default: 8
    },
    paddingLeft: {
        type: Number,
        default: 8
    },
})

// defineExpose({
//     val,
// })

// const val = ref(30)

const instance = getCurrentInstance()
console.log(instance.type.__file, instance.props);

</script>


<style scoped>
.card{
    background-color: white;;
    border-radius: v-bind((radius + "px"));

    /* margin: v-bind((margin + "px"));
    padding: v-bind((padding + "px")); */

    margin-top: v-bind((marginTop + "px"));
    margin-right: v-bind((marginRight + "px"));
    margin-bottom: v-bind((marginBottom + "px"));
    margin-left: v-bind((marginLeft + "px"));

    padding-top: v-bind((paddingTop + "px"));
    padding-right: v-bind((paddingRight + "px"));
    padding-bottom: v-bind((paddingBottom + "px"));
    padding-left: v-bind((paddingLeft + "px"));
}


</style>