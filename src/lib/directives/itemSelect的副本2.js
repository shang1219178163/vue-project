
export default { 
    mounted (el, bindings, vnode) {
        console.log(el, bindings, vnode);
        const {itemClass, selectClass, currentIndex, isMultiple, min, max} = bindings.value;
        
        el.isMultiple = isMultiple;
        el.itemClass = itemClass;
        el.selectClass = selectClass;
        el.items = el.getElementsByClassName(itemClass);
        el.items[currentIndex].className = `${itemClass} ${selectClass}`

        // console.log("el.items", typeof el.items, el.items);
        // console.log("_vei", vnode.el.items[0]._vei);
        
        if (el.isMultiple) {
            for (var i = 0; i < el.items.length; i++) {
                // console.log(">>>>>>", i, el.items[i]);
                el.items[i].addEventListener("click", (e) => {
                    // console.log("addEventListener >>>", e.target.__vnode.key);
                    const idx = e.target.__vnode.key;
                    // console.log("addEventListener >>>", idx, el.items[idx].className);

                    const isSelected = el.items[idx].className.endsWith(selectClass);

                    let list99 = []
                    for (var j = 0; j < el.items.length; j++) {
                        console.log("forEach", j, el.items[j].className);
                        if (isSelected) {
                            if (list99.length < max) list99.push(j);
                        } else if (list99.length > min) {
                            if (list99.length > min) list99.pop(j);
                        }
                    }
                    
                    el.list99 = list99
                    if (isSelected) {
                        el.items[idx].className = `${itemClass}`
                    } else {
                        el.items[idx].className = `${itemClass} ${selectClass}`
                    }
                });
            }
        }

        ///获取每个元素的onclick, 拦截, 加入自己逻辑, 然后再传回对应的元素
    },
    updated(el, bindings) {
        const { currentIndex } = bindings.value;
        const oldIndex = bindings.oldValue.currentIndex;
        const {itemClass, selectClass, items } = el;
        // console.log(currentIndex, oldIndex, itemClass,  selectClass, oitems);

        // if (el.isMultiple === undefined || el.isMultiple === false) items[oldIndex].className = itemClass;
        // items[oldIndex].className = itemClass;
        // items[currentIndex].className = `${itemClass} ${selectClass}`
        // console.log( "updated", oldIndex, currentIndex);
        // console.log( `updated >>> el.isMultiple:${el.isMultiple}_${oldIndex}: ${items[oldIndex].className} >>> current: ${currentIndex}: ${items[currentIndex].className}`);
        if (!el.isMultiple) {
            items[oldIndex].className = itemClass;
            items[currentIndex].className = `${itemClass} ${selectClass}`
        }
    },
}

// const itemSelect = (el, binding) => {
//     el.style.border = "1px solid blue";
// }
  
// export default itemSelect
