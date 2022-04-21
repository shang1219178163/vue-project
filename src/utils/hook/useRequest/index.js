import {ref} from 'vue'


export default function useApi(api) {
    const loading = ref(false)
    const result = ref(null)
    const error = ref(null)

    const request = (params) => {
        loading.value = true
        return api(params).then(data => {
            result.value = data
        }).catch(e => {
            error.value = e
        }).finally(() => {
            loading.value = false
        })
    }
    return {
        loading,
        error,
        result,
        request,
    }
}


/// 请求分页网络接口
export function useApiPage(api, pageInitail: 1) {
    const {loading, error, result, request } = useApi(api)

    const list = reactive([]);

    const pageIndex = ref(pageInitail);

    watchEffect(()=>{
        request({page: pageIndex.value});
    })

    onMounted(() => {
        console.log("useApiPage: onMounted");
        request({page: pageIndex.value});
    })

    onUnmounted(() => {
        console.log("useApiPage: onUnmounted");
    })

    const items = computed(() => {
        if (pageIndex.value === pageInitail) {
            list = [];
        }
        list.push(result);
        return list;
    })

    return {
        loading,
        error,
        page: pageIndex.value,
        result: items,
    }
}
