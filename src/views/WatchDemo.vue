<template>
    <div>
        <button @click="testwatch">testwatch</button>
        <button @click="testWatchEffect">watchEffect</button>
        <button @click="testWatchArray">WatchArray</button>
    </div>
</template>
<script setup>
import { ref, reactive, watch, watchEffect } from "vue";
import * as LOG from "@/utils/log";


const count = ref(0)

const a = ref('')

let list = reactive([])

watch([a, list], (newValues, oldValues) => {
    LOG.log("watch", newValues, oldValues)
})

watch([a, list], (newValues, oldValues) => {
    LOG.log("watch", newValues, oldValues)
})

const testwatch = (() => {
    // a.value += 'John '
    a.value = ''
})


const testWatchEffect = (() => {
    function getData() {
        return new Promise((resolve, reject) => {
            resolve(200)
            // reject('error')
        })    
    }

    setTimeout(() => {
        count.value += 2
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

const testWatchArray = (() => {
    LOG.green("testWatchArray")

    for (let i = 0; i < 10; i++) {
        list.push(list.length + 1);
        LOG.green(i)
    }
})

</script>
