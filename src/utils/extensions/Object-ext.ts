
/// 转为 json 字符串
function getProperty<T, K extends keyof T>(obj: T, key: K){
  return obj[key];
}

//默认所有 interface 定义以 I 开头
interface ILength {
  length: number;
}

const student = <T extends ILength>(value: T): T => {
  console.log(value.length);
  return value;
}

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
// swap([7, 'seven']); // ['seven', 7]


// 泛型参数的默认类型§
// 在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。

// function createArray<T = string>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }