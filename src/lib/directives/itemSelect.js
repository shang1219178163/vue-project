
export default { 
    mounted (el, bindings, vnode) {
        // console.log(el, bindings, vnode);
        const {itemClass, selectClass, currentIndex, isMultiple, min, max} = bindings.value;
        
        el.isMultiple = isMultiple;
        el.itemClass = itemClass;
        el.selectClass = selectClass;
        el.items = el.getElementsByClassName(itemClass);
        el.items[currentIndex].className = `${itemClass} ${selectClass}`

        // console.log("el.items", typeof el.items, el.items);        
        if (!el.isMultiple) {
            return
        }
        for (var i = 0; i < el.items.length; i++) {
            // console.log(">>>>>>", i, el.items[i]);
            el.items[i].addEventListener("click", (e) => {
                // console.log("addEventListener >>>", e.target.__vnode.key);
                const idx = e.target.__vnode.key;
                // console.log("addEventListener >>>", idx, el.items[idx].className);

                const isSelected = el.items[idx].className.endsWith(selectClass);

                let indexs = []
                for (var j = 0; j < el.items.length; j++) {
                    if (el.items[j].className.endsWith(selectClass)) {
                        indexs.push(j) 
                    }
                }

                if (min !== undefined && min > 0 && max !== undefined && max > 0) {
                    if (isSelected) {
                        if (indexs.length > min) {
                            el.items[idx].className = `${itemClass}`
                        } else {
                            alert(`数量不能小于 ${min}`)
                        }
                    } else {
                        if (indexs.length < max) {
                            el.items[idx].className = `${itemClass} ${selectClass}`
                        } else {
                            alert(`数量不能大于 ${max}`)
                        }
                    } 
                } else {
                    if (isSelected) {
                        el.items[idx].className = `${itemClass}`
                    } else {
                        el.items[idx].className = `${itemClass} ${selectClass}`
                    }
                }
            });
        }
        ///获取每个元素的onclick, 拦截, 加入自己逻辑, 然后再传回对应的元素
    },
    updated(el, bindings) {
        const { currentIndex } = bindings.value;
        const oldIndex = bindings.oldValue.currentIndex;
        const {itemClass, selectClass, items } = el;
        // console.log(currentIndex, oldIndex, itemClass,  selectClass, oitems);

        if (el.isMultiple) {
            return
        }
        items[oldIndex].className = itemClass;
        items[currentIndex].className = `${itemClass} ${selectClass}`
    },
}

// const itemSelect = (el, binding) => {
//     el.style.border = "1px solid blue";
// }
  
// export default itemSelect
