self.onmessage = (e) => {
  console.log("worker 接受到的message e--", JSON.stringify(e));

  for (let index = 0; index < 9999999999; index++) {
    if (index === 9999999999 - 1) {
      self.postMessage("计算结束了");
    }
  }
};