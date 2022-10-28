import { initial } from 'lodash';
import {ref, computed} from 'vue'
import {createStore} from 'vuex'
import useShare from "./index"

// 常规计数器，无法在多个组件中共享count状态
export function useCounter(initail = 0) {
    const initailValue = initail;
    const count = ref(initail)
    const decrement = () => {
        count.value--
    }
    const increment = () => {
        count.value++
    }
    const reset = () => {
      count.value = initial;
    }
    return {
        count,
        decrement,
        increment,
        reset
    }
}

const store = createStore({
    state: {
        count: 0
    },
    mutations: {
        setCount(state, payload) {
            state.count = payload
        }
    },
    actions: {
        decrement({commit}) {
            const {count} = this.state;
            commit('setCount', count - 1)
        },
        increment({commit}) {
            const {count} = this.state;
            commit('setCount', count + 1)
        },
    },
})


export function useCounter2(initail = 0) {
    const count = computed(() => {
        return store.state.count
    })
    const decrement = () => {
        store.commit('setCount', count.value - 1)
    }
    const increment = () => {
        store.commit('setCount', count.value + 1)
    }
    const reset = () => {
        store.commit('setCount', initail)
    }
    return {
        count,
        decrement,
        increment,
        reset
    }
}

export function useCounter3() {
    return useShare(useCounter)
}
