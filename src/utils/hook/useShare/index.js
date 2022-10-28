const map = new WeakMap()
export default function useShare(hook) {
    if (!map.get(hook)) {
        let val = hook()
        map.set(hook, val)
    }
    return map.get(hook)
}
