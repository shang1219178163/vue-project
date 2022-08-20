//toJSON函数旨在执行原始函数后执行某些操作。
function toJSON(fn) {
  return function () {
    let res = fn.apply(this, arguments);
    try {
      let json = JSON.parse(res);
      return json;
    } catch (e) {
      return res;
    }
  };
}

//derecate功能旨在在执行原始功能之前执行某些操作。
function deprecate(fn, newApi) {
  return function () {
    console.log(`The ${fn.name} will be deprecated. Please use the ${newApi}.`);
    return fn.apply(this, arguments);
  };
}

// import request from './request';
// const _request = deprecate(request, 'fetch');
// export {
//   request: _request,
// }

function intercept(fn, { before = null, after = null }) {
  return function () {
    if (before != null) {
      before.apply(this, arguments);
    }
    const result = fn.apply(this, arguments);
    if (after != null) {
      after.call(this, result);
    }
    return result;
  };
}

function cached(fn) {
  // Create an object to store the results returned after each function exe.
  const cache = Object.create(null);
  // Returns the wrapped function
  return function cachedFn(str) {
    // If the cache is not hit, the function will be executed;
    if (!cache[str]) {
      cache[str] = fn(str);
    }
    return cache[str];
  };
}

function batch(fn) {
  return function (subject, ...args) {
    if (Array.isArray(subject)) {
      return subject.map((e) => {
        return fn.call(this, e, ...args);
      });
    }
    return fn.call(this, subject, ...args);
  };
}

function tryTime(func) {
  let i = 3;
  return function (...args) {
    const context = this;
    
    if (i === 0) {
      return;
    }
    i--;
    return func.apply(context, args);
  };
}

export { batch, toJSON, intercept, cached, tryTime };
