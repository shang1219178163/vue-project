import {ref, watch} from 'vue'
import {useDebounce} from "./index";


import {useApi} from "@/utils/hook/useRequest/index"

// function debounce(cb, delay = 100) {
//     let timer
//     return function () {
//         clearTimeout(timer)
//         let args = arguments,
//             context = this
//         timer = setTimeout(() => {
//             cb.apply(context, args)
//         }, delay)
//     }
// }

// demo: input输入时联想查询关键字
export function useAssociateSearch(delay = 1000) {
    const keyword = ref('')

    // const search = (oldVal, newVal) => {
    //     console.log('search...', keyword.value)
    //     // mock 请求接口获取数据
    // }

    // watch(keyword, search)
    // watch(keyword, debounce(search, 1000))
    watch(keyword, useDebounce(search, delay))

    return {
        keyword,
        search
    }
}


// // demo: input输入时联想查询关键字
// export function useSearch(api, delay = 1000) {
//     const keyword = ref('')

//     // const search = (oldVal, newVal) => {
//     //     console.log('search...', keyword.value)
//     //     // mock 请求接口获取数据
//     // }

//     // watch(keyword, search)
//     // watch(keyword, debounce(search, 1000))

//     const {loading, error, result, request } = useApi(api);

//     watch(keyword, useDebounce(request, delay))

//     return {
//         keyword,
//         search
//     }
// }
