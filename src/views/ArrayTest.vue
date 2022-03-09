<template lang="">
    <div class="container">
        <button @click="testArray">testArray</button>
        <button @click="testSet">testSet</button>
        <button @click="testWeakSet">testWeakSet</button>
        <button @click="testWeakMap">testWeakMap</button>
    </div>
</template>


<script setup>


const testArray = () => {
    // 创建数组
    let fruits = ['Apple', 'Banana', 'Orange']
    console.log(fruits.length)

    // 获取最后元素
    let last = fruits[fruits.length - 1] // Banana
    

    // 删除数组末尾的元素
    let last1 = fruits.pop() // remove Orange (from the end)
    console.log(">>>fruits", fruits)  // ["Apple", "Banana"]
    console.log(">>>last1", last1) //Orange

    // 删除数组头部元素
    let first1 = fruits.shift() // remove Apple from the front
    console.log(">>>first1", first1) //Apple

    // 添加元素到数组的头部
    console.log(">>>newLength1 前", fruits) //Apple

    let newLength1 = fruits.unshift('Strawberry') // add to the front
    // ["Strawberry", "Banana"]
    console.log(">>>fruits", fruits) // ['Strawberry', 'Banana']
    console.log(">>>newLength1", newLength1) //Apple

    // 找出某个元素在数组中的索引
    let pos = fruits.indexOf('Banana') // 1
    
    // 通过索引删除某个元素
    let removedItem = fruits.splice(pos, 1) // this is how to remove an item
    console.log(">>>fruits", fruits) // ['Strawberry',]
    console.log(">>>removedItem", removedItem) // ['Banana'] 

    // 从一个索引位置删除多个元素
    let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
    console.log(vegetables) // ["Cabbage", "Turnip", "Radish", "Carrot"]

    let removedItems = vegetables.splice(1, 2)
    // this is how to remove items, n defines the number of items to be removed,
    // starting at the index position specified by pos and progressing toward the end of array.
    console.log(vegetables) // ["Cabbage", "Carrot"] (the original array is changed)
    console.log(removedItems) // ["Turnip", "Radish"]

    // 复制一个数组
    let shallowCopy = fruits.slice()  // ["Strawberry", "Mango"]

 
    let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
    console.log(years[0])  // works properly

 
    // 数组长度与数字下标之间的关系
    // JavaScript 数组的 length 属性和其数字下标之间有着紧密的联系。
    // 数组内置的几个方法（例如 join、slice、indexOf 等）都会考虑 length 的值。
    // 另外还有一些方法（例如 push、splice 等）还会改变 length 的值。

    let fruits1 = []
    fruits1.push('banana', 'apple', 'peach')

    console.log(fruits1.length) // 3

    // 使用一个合法的下标为数组元素赋值，并且该下标超出了当前数组的大小的时候，解释器会同时修改 length 的值：
    fruits1[5] = 'mango'
    console.log(">>>fruits1", fruits1)            // 'mango'

    console.log(fruits1[5])            // 'mango'
    console.log(Object.keys(fruits1))  // ['0', '1', '2', '5']
    console.log(fruits1.length)        // 6

    // 也可以显式地给 length 赋一个更大的值：
    console.log(fruits1[3])           // undefined

    // 而为 length 赋一个更小的值则会删掉一部分元素：

    fruits.length = 2
    console.log(Object.keys(fruits)) // ['0', '1']
    console.log(fruits.length)       // 2
}

const testSet = () => {
    let mySet = new Set();

    mySet.add(1); // Set [ 1 ]
    mySet.add(5); // Set [ 1, 5 ]
    mySet.add(5); // Set [ 1, 5 ]
    mySet.add("some text"); // Set [ 1, 5, "some text" ]
    let o = {a: 1, b: 2};
    mySet.add(o);

    mySet.add({a: 1, b: 2}); // o 指向的是不同的对象，所以没问题

    mySet.has(1); // true
    mySet.has(3); // false
    mySet.has(5);              // true
    mySet.has(Math.sqrt(25));  // true
    mySet.has("Some Text".toLowerCase()); // true
    mySet.has(o); // true

    mySet.size; // 5

    mySet.delete(5);  // true,  从set中移除5
    mySet.has(5);     // false, 5已经被移除

    mySet.size; // 4, 刚刚移除一个值

    console.log(mySet);
    // logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
    // logs Set(4) { 1, "some text", {…}, {…} } in Chrome


    // 使用 Array.from 转换Set为Array
    var myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

    // 如果在HTML文档中工作，也可以：
    mySet.add(document.body);
    mySet.has(document.querySelector("body")); // true

    let mySet1 = new Set([3, 4, 5, 6]);

    // Set 和 Array互换
    let mySet2 = new Set([1, 2, 3, 4]);
    mySet2.size;     // 4
    [...mySet2];    // [1,2,3,4]

    // 可以通过如下代码模拟求交集
    let intersection = new Set([...mySet1].filter(x => mySet2.has(x)));
    console.log("intersection", intersection);

    let mySet3 = [...mySet1].concat([...mySet2])
    console.log("set3", mySet3.sort());

    // 可以通过如下代码模拟求差集
    let difference = new Set(mySet3.filter(x => !mySet2.has(x)));
    console.log("difference", difference);
    // 去公共元素
    let symmetricDifference = new Set(mySet3.filter(x => !intersection.has(x)));
    console.log("symmetricDifference", symmetricDifference);


    //Examples
    let setA = new Set([1, 2, 3, 4])
    let setB = new Set([2, 3])
    let setC = new Set([3, 4, 5, 6])

    isSuperset(setA, setB);          // => true
    union(setA, setC);               // => Set [1, 2, 3, 4, 5, 6]
    intersection(setA, setC);        // => Set [3, 4]
    symmetricDifference(setA, setC); // => Set [1, 2, 5, 6]
    difference(setA, setC);          // => Set [1, 2]
}

const testWeakSet = () => {
    const desc = `
WeakSet 对象是一些对象值的集合, 并且其中的每个对象值都只能出现一次。在WeakSet的集合中是唯一的
它和 Set 对象的区别有两点:
    与Set相比，WeakSet 只能是对象的集合，而不能是任何类型的任意值。
    WeakSet持弱引用：集合中对象的引用为弱引用。 如果没有其他的对WeakSet中对象的引用，那么这些对象会被当成垃圾回收掉。 
    这也意味着WeakSet中没有存储当前对象的列表。 正因为这样，WeakSet 是不可枚举的。
    `
    console.log("desc", desc);

}

const testWeakMap = () => {

    const desc = `
WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
WeakMap 的 key 只能是 Object 类型。 原始数据类型 是不能作为 key 的（比如 Symbol）。

构造函数
WeakMap()
创建一个新的 WeakMap 对象。

实例方法
WeakMap.prototype.delete(key)
删除 WeakMap 中与 key 相关联的值。删除之后， WeakMap.prototype.has(key) 将会返回 false。

WeakMap.prototype.get(key)
返回 WeakMap 中与 key 相关联的值，如果 key 不存在则返回 undefined。

WeakMap.prototype.has(key)
返回一个布尔值，断言一个值是否已经与 WeakMap 对象中的 key 关联。

WeakMap.prototype.set(key, value)
给 WeakMap 中的 key 设置一个 value。该方法返回一个 WeakMap 对象。

实现一 个带有 .clear() 方法的类 WeakMap 类

class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init);
  }
  clear() {
    this._wm = new WeakMap();
  }
  delete(k) {
    return this._wm.delete(k);
  }
  get(k) {
    return this._wm.get(k);
  }
  has(k) {
    return this._wm.has(k);
  }
  set(k, v) {
    this._wm.set(k, v);
    return this;
  }
}

    `
    console.log("desc", desc);


}


function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

function union(setA, setB) {
    let _union = new Set(setA);
    for (let elem of setB) {
        _union.add(elem);
    }
    return _union;
}

function intersection(setA, setB) {
    let _intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

function symmetricDifference(setA, setB) {
    let _difference = new Set(setA);
    for (let elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem);
        } else {
            _difference.add(elem);
        }
    }
    return _difference;
}

function difference(setA, setB) {
    let _difference = new Set(setA);
    for (let elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}

</script>


<style lang="scss">
.container{
    margin: 8px;
    display: flex;
    justify-content: space-evenly;
}
    
</style>