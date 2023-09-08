

async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = [];               //2
  const executing = [];         //3
  for (const item of array) {   //4
    const p = Promise.resolve().then(() => iteratorFn(item));  //5
    ret.push(p);                //6
    if (poolLimit <= array.length) { //7
      const e = p.then(() => executing.splice(executing.indexOf(e), 1)); //8
      executing.push(e);        //9
      if (executing.length >= poolLimit) {  //10
        await Promise.race(executing);      //11
      }
    }
  }
  return Promise.all(ret);     //15
}