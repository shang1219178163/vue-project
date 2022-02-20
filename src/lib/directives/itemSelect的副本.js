
export default { 
    mounted (el, bindings, vnode) {
        console.log(el, bindings, vnode);
        const {itemClass, selectClass, currentIndex, isMultiple} = bindings.value;
        
        el.isMultiple = isMultiple;
        el.itemClass = itemClass;
        el.selectClass = selectClass;
        el.items = el.getElementsByClassName(itemClass);
        el.items[currentIndex].className = `${itemClass} ${selectClass}`
    },
    updated(el, bindings) {
        const { currentIndex } = bindings.value;
        const oldIndex = bindings.oldValue.currentIndex;
        const {itemClass, selectClass, items } = el;
        // console.log(currentIndex, oldIndex, itemClass,  selectClass, oitems);

        items[oldIndex].className = itemClass;
        items[currentIndex].className = `${itemClass} ${selectClass}`
    },
}

// const itemSelect = (el, binding) => {
//     el.style.border = "1px solid blue";
// }
  
// export default itemSelect
