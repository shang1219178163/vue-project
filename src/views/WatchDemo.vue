<template lang="">
    <div>
        <button @click="testwatch">testwatch</button>
        <button @click="testWatchEffect">watchEffect</button>
    </div>
</template>
<script setup>
import { ref, watch, watchEffect } from "vue";

const count = ref(0)

const a = ref('')
const b = ref('')

watch([a, b], (newValues, oldValues) => {
    console.log(newValues, oldValues)
})

const testwatch = (() => {
    a.value = 'John'
    b.value = 'Smith'
})


const testWatchEffect = (() => {
    function getData() {
        return new Promise((resolve, reject) => {
            resolve(200)
            // reject('error')
        })    
    }

    setTimeout(() => {
        count.value = 2
    }, 1000);

    const stop = watchEffect(async(onInvalidate) => {
        console.log(count.value);

        const data = await getData();
        console.log("data", data);

        onInvalidate(() => {
            console.log('onInvalidate is triggerd');
        })
    })

    setTimeout(() => {
        stop()
        console.log('watchEffect is stop');

    }, 2000);
})

</script>
