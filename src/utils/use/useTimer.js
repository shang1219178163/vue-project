// useTimer 的代码比其他钩子要长一些。
// useTimer 支持运行一个带有一些选项的定时器，如开始、暂停/恢复、停止。
// 要做到这一点，我们需要使用 setInterval 方法。
// 在这里，我们需要检查定时器的暂停状态。如果定时器没有暂停，我们只需要调用一个回调函数，该函数由用户作为参数传递。为了支持用户了解该定时器当前的暂停状态，
// 除了action useTimer之外，还要给他们一个变量 isPaused，其值为该定时器的暂停状态。代码如下：

import { ref, onUnmounted } from 'vue';

export const useTimer = (callback = () => { }, step = 1000) => {
  let timerVariableId = null;
  let times = 0;
  const isPaused = ref(false);
   
  const stop = () => {
    if (timerVariableId) {
      clearInterval(timerVariableId);
      timerVariableId = null;
      resume();
    }
  }
  
  const start = () => {
    stop();
    if (!timerVariableId) {
      times = 0;
      timerVariableId = setInterval(() => {
        if (!isPaused.value) {
          times++;
          callback(times, step * times);
        }
      }, step)
    }
  }

  const pause = () => {
    isPaused.value = true;
  }

  const resume = () => {
    isPaused.value = false;
  }

  onUnmounted(() => {
    if (timerVariableId) {
      clearInterval(timerVariableId);
    }
  })

  return {
    start,
    stop,
    pause,
    resume,
    isPaused
  }
}


// function handleTimer(round) {      
//     roundNumber.value = round;    
// }
// const { 
//     start,
//     stop,
//     pause,
//     resume,
//     isPaused
// } = useTimer(handleTimer);