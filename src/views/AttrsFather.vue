<template lang="">
    <div>
        <div>AttrsFather</div>
        <!-- 父组件传递数据给子组件 -->
        <!-- <AttrsSon webName="自如初" @bar="bar9"></AttrsSon> -->
        <AttrsChild @bar="bar9" @tap="tap9" webName="自如初"></AttrsChild>
        <AttrsGrandChild @bar="bar9" @tap="tap9"></AttrsGrandChild>

        <div>{{foo}}</div>
    </div>
</template>

<script setup>
import { defineProps, ref, watch, getCurrentInstance, onMounted, provide } from 'vue'
import AttrsChild from "./AttrsChild.vue"
import AttrsGrandChild from "./AttrsGrandChild.vue"


const props = defineProps({
    name: {
        type: String,
        default: "小明"
    },
    age: {
        type: Number,
        default: 18
    },
    list: {
        type: Array,
        default: () => []
    }
})

// eslint-disable-next-line no-undef
// const emit = defineEmits(["bar9", ])

const instance = getCurrentInstance();
console.log(instance.type.__file, instance) ; 

const foo = ref(0)
const bar9 = (v) => {
    console.log("bar9", v);
}

const tap9 = (v) => {
    console.log("tap9", v);
}

setTimeout(() => {
    foo.value = 99
}, 3000);

watch(foo, (newValue, oldValue) => {
    console.log("watch-foo", newValue, oldValue); 
})

onMounted(() => {
    // 组件实例的上下文才是我们熟悉的this
    console.log(instance.type.__file, instance.ctx.foo); // 'foo'
    console.log(instance.type.__file, instance); // '我是bar方法'
})

provide("abc", "123");

provide("user", {
    name: 'John Doe',
    sex: 1,
})

//全局关联方法和属性
// const {utils, user} = instance.appContext.config.globalProperties
// console.log(instance.type.__file, "utils", utils); 
// console.log(instance.type.__file, "user", user); 

</script>
