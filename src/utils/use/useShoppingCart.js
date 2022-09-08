import { ref, reactive, computed, } from 'vue';

/**
 * 
 * @param {*} items 
 * @param {*} {
 * 
 * } 
 * @returns {
 * 
 * }
 */
const useShoppingCart = (items = [], 
  options = {
    idKey: 'id', 
    priceKey: 'price', 
    countKey: 'count', 
    priceFn: (val) => parseInt(val)}
  ) => {
  const procuts = reactive(items);

  //获取单个商品的价格
  const objPrice = (obj, key) => {
    let tmpPrice = obj[key];
    if (typeof tmpPrice === 'number') {
      return tmpPrice;
    }

    let result = options.priceFn(tmpPrice);
    if (typeof result !== 'number') {
      throw new Error('价格不能是字符串');
    }
    return result;
  };

  /**
   * 商品总价
   */
  const totalPrice = computed((fractionDigits = 2) => {
    return procuts
    .map(e => objPrice(e, options.priceKey) * e[options.countKey])
    .reduce((pre, cur) => pre + cur, 0)
    .toFixed(fractionDigits);
  });
  
  /**
   * 商品添加变动
   * @param {*} num 该商品添加的数量
   * @param {*} obj 购物车中当前点击的商品对象
   */
  const change = (num, obj) => {
    console.log(num, obj);
    obj[options.countKey] = num;
  
    const idx = procuts.findIndex(e => e[options.idKey] === obj[options.idKey]);
    if (idx === -1) {
      procuts.push(obj);
    } else {
      procuts[idx][options.countKey] = num;
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