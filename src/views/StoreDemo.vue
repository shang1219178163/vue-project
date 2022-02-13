<template lang="">
    <div>
        <div>
            storeDemo
        </div>
        <input v-model="message">

        <div>
            storeDemo:{{ store.state.count }}
        </div>

        <Counter></Counter>
        <button @click="tap">button</button>
    </div>

</template>


<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'

// const message = ref("")

const store = useStore()
console.log(store.state);

// const val = ["0", "1", "2"]
// store.commit('increment', val);

const tap = () => {
    store.commit('increment', 2);
}

// 创建一个 Counter 组件
const Counter = {
  template: `<div>Counter:{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count
    },
    message: {
        get () {
            return store.state.obj.message
        },
        set (value) {
            store.commit('updateMessage', value)
        }
    }
  }
}
</script>