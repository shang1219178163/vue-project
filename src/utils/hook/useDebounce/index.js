import {ref, watch} from "vue";

// 去抖(后向触发)
export function useDebounce(fn, delay = 1000) {
    const timer = ref(null);

    const cancel = () => {
        clearTimeout(timer);
        timer.value = null;
    }

    return function () {
        clearTimeout(timer.value);
        let args = arguments,
            context = this;
        timer.value = setTimeout(() => {
            fn.apply(context, args);
            cancel();
        }, delay);
    }
}

// 节流(前向触发)
export function useThrottle(fn, duration = 1000) {
    let start = +new Date()
    return function () {
        let args = arguments,
            context = this;
        let now = +new Date();
        if (now - start >= duration) {
            fn.apply(context, args);
            start = now;
        }
    }
}
