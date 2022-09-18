export const EventObserver = (function () {
  let list = {}; // 缓存列表，存放订阅者回调函数

  // 订阅消息
  let listen = function (key, fn) {
    if (!list[key]) {
      list[key] = []; // 如果没有订阅过该类型，则创建缓存列表
    }
    list[key].push(fn); // 订阅的消息存入缓存列表
  }

  // 发布消息
  let trigger = function () {
    let key = Array.prototype.shift.call(arguments), // 取出消息类型 arguments为类数组
      fns = list[key]; // 取出该类型对应的函数集合
    if (!fns || fns.length === 0) {
      return false; // 如果没有订阅消息 则返回
    }
    for (var i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments); // 代入参数arguments 执行
    }
  }

  // 取消订阅
  let remove = function (key, fn) {
    var fns = list[key]
    if (!fns) {
      return false
    }

    if (!fn) {
      fns && (fns.length = 0);// 如果没有传入具体回调函数，则表示取消该key下的所有订阅
    } else {
      for (let i = fns.length - 1; i >= 0; i--) {
        if (fns[i] === fn) {
          fns.splice(i, 1);// 删除订阅回调函数
        }
      }
    }
  }

  return {
    listen,
    trigger,
    remove,
    // list
  }
})()


// example:
// EventObserver.listen('square88', function (price) {
//   console.log(`价格是${price}`)
// })

// EventObserver.trigger('square88', 10000)
