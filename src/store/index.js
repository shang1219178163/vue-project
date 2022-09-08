import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'


export const increment_mutation = 'increment'

// 创建一个新的 store 实例
export default createStore({
    // plugins: [createPersistedState(
    //     // 配置将vuex的状态储存到sessionStorage中（默认储存到localStorage中）
    //     { storage: window.sessionStorage }
    // )],
    state: {
        count: 1,
        obj: {
          message: ""
        }
      },
      //   mutations 通过 store.commit('increment', 2);
      mutations: {
        updateMessage(state, val) {
            state.obj.message = val
            console.log("updateMessage", state.obj.message);
        },
        increment(state, val) {
            // state.count++
            state.count += val
            console.log("increment", state.count, val, typeof val, typeof state.count);
        }
        // increment_mutation(state, val) {
        //     state.count += parseInt(val) 
        //     console.log("increment", state.count, val, typeof val, typeof state.count);
        // }
      },
      //   Action 通过 store.dispatch 方法触发：
      actions: {
        increment (context) {
          context.commit('increment', 1)
        }

        // async actionA ({ commit }) {
        //     commit('gotData', await getData())
        //   },
        //   async actionB ({ dispatch, commit }) {
        //     await dispatch('actionA') // 等待 actionA 完成
        //     commit('gotOtherData', await getOtherData())
        //   }
      }
})



