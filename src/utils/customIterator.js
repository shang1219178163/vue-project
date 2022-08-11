
// 自定义迭代器
function createIterator(obj) {
    let keyArr = Object.keys(obj);
    let i = 0;
    return {
        next: function () {
            let done = (i >= keyArr.length);
            let value = !done ? obj[keyArr[i++]] : undefined;
            return {
                value: value,
                done: done,
            };
        }
    };
}

// let obj = {a: "hello", b: "world"};
// let iterator = createIterator(obj);
// console.log(iterator.next()); // "{ value: 'hello', done: false }"
// console.log(iterator.next());  // "{ value: 'world', done: false }"
// console.log(iterator.next());  // "{ value: undefined, done: true }"