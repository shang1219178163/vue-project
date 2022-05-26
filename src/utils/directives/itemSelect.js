
export default { 
  mounted (el, bindings, vnode) {
    // console.log(el, bindings, vnode);
    const {itemClass, selectClass, currentIndex, isMultiple, min, max, list, block, minblock, maxblock} = bindings.value;
    
    el.itemClass = itemClass;
    el.selectClass = selectClass;
    el.items = el.getElementsByClassName(itemClass);
    el.items[currentIndex].className = `${itemClass} ${selectClass}`;

    el.isMultiple = isMultiple;
    el.block = block;
    el.list = list;

    block([currentIndex], [list[currentIndex]], currentIndex);
    // console.log("el.items", typeof el.items, el.items);        
    if (!el.isMultiple) {
        return;
    }

    var items = Array.from(el.items);

    // console.log("arr", typeof items)
    items.forEach((e, i) => {
        // console.log(e, i);
      e.addEventListener("click", (t) => {
        // console.log("addEventListener >>>", e.target.__vnode.key);
        const idx = t.target.__vnode.key;
        // console.log("addEventListener >>>", idx, el.items[idx].className);
        const isSelected = items[idx].className.endsWith(selectClass);

        let indexs = [];
        items.forEach((e, j) => {
          if (e.className.endsWith(selectClass)) {
            indexs.push(j);
          }
        });
        
        if (min !== undefined && min > 0 
            && max !== undefined && max > 0) {
            if (isSelected) {
              if (indexs.length > min) {
                items[idx].className = `${itemClass}`;
                indexs.remove(idx);
              } else {
                minblock ? minblock(min) : alert(`数量不能小于 ${min}`);
              }
            } else {
              if (indexs.length < max) {
                items[idx].className = `${itemClass} ${selectClass}`;
                indexs.push(idx);
              } else {
                maxblock ? maxblock(max) : alert(`数量不能大于 ${max}`);
              }
            } 
        } else {
          if (isSelected) {
            items[idx].className = `${itemClass}`;
            indexs.remove(idx);
          } else {
            items[idx].className = `${itemClass} ${selectClass}`;
            indexs.push(idx);
          }
        }

        let selectItems = indexs.sort().map((k) => list[k]);
        block(indexs.sort(), selectItems, idx);
      });
    });
},
  updated(el, bindings) {
    const { currentIndex } = bindings.value;
    const oldIndex = bindings.oldValue.currentIndex;
    const {itemClass, selectClass, items } = el;
    // console.log(currentIndex, oldIndex, itemClass,  selectClass, oitems);

    if (el.isMultiple) {
        return;
    }
    items[oldIndex].className = itemClass;
    items[currentIndex].className = `${itemClass} ${selectClass}`;
    el.block([currentIndex], [el.list[currentIndex]], currentIndex);
  },
};

// const itemSelect = (el, binding) => {
//     el.style.border = "1px solid blue";
// }
  
// export default itemSelect

Array.prototype.remove = function(val) {
  const index = this.indexOf(val);
  if (index >= 0) {
    this.splice(index, 1);
  }
  return this;
};