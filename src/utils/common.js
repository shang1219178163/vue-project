
function deepCopy(obj) {
    if (typeof obj !== "object" || obj == null) {
        return obj;
    }

    let objNew = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        // if (obj.hasOwnProperty(key)) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            objNew[key] = deepCopy(obj[key]);
        }
    }
    return objNew;
}

// 该方法用于将一个数字按照指定位进行四舍五入：
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d)
// round(1.005, 2) //1.01
// round(1.555, 2) //1.56

// 变量交换
// [foo, bar] = [bar, foo];

const trueTypeOf = (obj) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
// trueTypeOf('');     // string
// trueTypeOf(0);      // number
// trueTypeOf();       // undefined
// trueTypeOf(null);   // null
// trueTypeOf({});     // object
// trueTypeOf([]);     // array
// trueTypeOf(0);      // number
// trueTypeOf(() => {});  // function

// 检测一个JavaScript对象是否为空：
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

// 华氏度和摄氏度之间的转化
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
// celsiusToFahrenheit(15);    // 59
// celsiusToFahrenheit(0);     // 32
// celsiusToFahrenheit(-20);   // -4
// fahrenheitToCelsius(59);    // 15
// fahrenheitToCelsius(32);    // 0

/**
 * 暂停一会 ex: await pause(1000)
 * 
 * @param {*} millis 
 * @returns 
 */
const pause = (millis) => new Promise(resolve => setTimeout(resolve, millis))


const plus = (a, b) => a + b;

const mins = (a, b) => a - b;

export{
    round,
    trueTypeOf,
    isEmpty,
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    plus,
    mins,
}