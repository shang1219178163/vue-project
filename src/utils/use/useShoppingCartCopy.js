import { ref, reactive, computed, } from 'vue';

const useShoppingCart = (items = []) => {
  const procuts = reactive(items);

  const totalPrice = computed(() => {
    return procuts
    .map(e => e.price * e.count)
    .reduce((pre, cur) => pre + cur, 0)
    .toFixed(2);
  });
  
  const change = (num, obj) => {
    console.log(num, obj);
    obj.count = num;
  
    const idx = procuts.findIndex(e => e.id === obj.id);
    if (idx === -1) {
      procuts.push(obj);
    } else {
      procuts[idx].count = num;
      if (num === 0) {
        procuts.splice(idx, 1);
      }
    }
  };
  
  return {procuts, totalPrice, change};
}

export{
  useShoppingCart,
}

// example:
// const token = useStorageLocal('token');

// const form = useStorageLocal('user', {
//   name: 'Local',
//   age: 18,
// });

// form.value.name += 'n';
// form.value.age += 2;
// console.log(">>>", form);

// token.value += "t";
// console.log(">>>", token.value);