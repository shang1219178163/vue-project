import {ref, reactive, computed, onMounted, onUnmounted} from 'vue'
import useApi from './index'

function fetchBookList(params) {
    console.log('fetch params:', params)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3])
        }, 1000)
    })
}

function fetchUserList() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const payload = {
                code: 200,
                data: [11, 22, 33],
                msg: 'success'
            }
            resolve(payload)
        }, 1000)
    })
}

// 常规的封装方法
export function useBook() {
    const list = ref([])
    const loading = ref(false)
    const getList = async () => {
        loading.value = true
        const data = await fetchBookList({page: 1})
        loading.value = false
        list.value = data
    }

    onMounted(() => {
        getList()
    })

    return {
        list,
        loading,
        getList
    }
}


// 使用useApi封装
export function useBook2() {
    const {loading, error, result, fetchResource,} = useApi(fetchBookList)

    onMounted(() => {
        fetchResource({page: 1});
    })

    return {
        loading,
        error,
        list: result
    }
}

// 处理不同返回值的api
export function useUser() {
    const handler = (params) => {
        return fetchUserList(params).then(res => {
            console.log(res)
            if (res.code === 200) {
                return res.data
            }
            return []
        })
    }
    // 对useApi本身无需做任何调整
    const {loading, error, result, fetchResource,} = useApi(handler)

    onMounted(() => {
        console.log("useUser: onMounted")

        fetchResource({page: 1})
    })

    onUnmounted(() => {
        console.log("useUser: onUnmounted");
    })

    return {
        loading,
        error,
        list: result
    }
}



export function useUserNew() {
    const fetchUsers = (params) => {
        return fetchUserList(params).then(res => {
            console.log(res)
            if (res.code === 200) {
                return res.data
            }
            return []
        })
    }
    // 对useApi本身无需做任何调整
    const {loading, error, result, request,} = useApi(fetchUsers)

    const list = reactive([]);

    const pageIndex = ref(1);

    onMounted(() => {
        console.log("useUser: onMounted")
        request({page: pageIndex.value})
    })

    watchEffect(()=>{
        request({page: pageIndex.value});
    })

    onUnmounted(() => {
        console.log("useUser: onUnmounted");
    })

    const items = computed(() => {
        if (pageIndex.value === 1) {
            list = [];
        }
        list.push(result);
        return list;
    })

    return {
        loading,
        error,
        result: items,
    }
}
