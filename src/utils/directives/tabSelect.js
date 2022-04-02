
export default { 
    mounted (el, bindings) {
        const {tabClass, activeClass, currentIndex } = bindings.value;

        el.tabClass = tabClass;
        el.activeClass = activeClass;
        el.tabItems = el.getElementsByClassName(tabClass);
        el.tabItems[currentIndex].className = `${tabClass} ${activeClass}`
    },
    updated(el, bindings) {
        const { currentIndex } = bindings.value;
        const oldIndex = bindings.oldValue.currentIndex;
        const {tabClass, activeClass, tabItems } = el;
        // console.log(currentIndex, oldIndex, tabClass,  activeClass, oTabItems);

        tabItems[oldIndex].className = tabClass;
        tabItems[currentIndex].className = `${tabClass} ${activeClass}`
    },
}

// const tabSelect = (el, binding) => {
//     el.style.border = "1px solid blue";
// }
  
// export default tabSelect
