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
import { ref, getCurrentInstance, defineProps } from 'vue';

const props = defineProps({
    margin: {
        type: String,
        default: "8px"
    },
    padding: {
        type: String,
        default: "8px"
    },
    borderRadius: {
        type: String,
        default: "4px"
    },
    backgroundColor: {
        type: String,
        default: "white",
    },
    boxShadow: {
        type: String,
        default: "0px 4px 18px 0px rgba(0,0,0,0.08)",
    },
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

</style>