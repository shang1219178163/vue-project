import {onUnmounted} from 'vue'

class EventBus {
    constructor() {
        this.eventMap = new Map();
    }

    on(key, fn) {
        let handlers = this.eventMap.get(key) ?? [];
        handlers.push(fn);
        this.eventMap.set(key, handlers);
    }

    off(key, fn) {
        const handlers = this.eventMap.get(key);
        if (!handlers) return;
        if (fn) {
            const idx = handlers.indexOf(fn);
            idx > -1 && handlers.splice(idx, 1);
            this.eventMap.set(key, handlers);
        } else {
            this.eventMap.delete(key);
        }
    }

    once(key, fn) {
        const handlers = [(payload) => {
            fn(payload);
            this.off(key);
        }]
        this.eventMap.set(key, handlers);
    }

    emit(key, payload) {
        const handlers = this.eventMap.get(key);
        if (!Array.isArray(handlers)) return;
        handlers.forEach(handler => {
            handler(payload);
        })
    }
}

// 事件总线，全局单例
const bus = new EventBus();

export default function useEventBus() {
    let instance = {
        eventMap: new Map(),
        // 复用eventBus事件收集相关逻辑
        on: bus.on,
        once: bus.once,
        // 清空eventMap
        clear() {
            this.eventMap.forEach((list, key) => {
                list.forEach(fn => {
                    bus.off(key, fn);
                })
            })
            eventMap.clear();
        }
    }
    let eventMap = new Map();
    // 劫持两个监听方法，收集当前组件对应的事件
    const on = (key, fn) => {
        instance.on(key, fn);
        bus.on(key, fn);
    }
    const once = (key, fn) => {
        instance.once(key, fn);
        bus.once(key, fn);
    }

    // 组件卸载时取消相关的事件
    onUnmounted(() => {
        instance.clear();
    })
    return {
        on,
        once,
        off: bus.off.bind(bus),
        emit: bus.emit.bind(bus)
    }
}
