import { ref, onMounted, onUnmounted } from 'vue';

export const usePageVisibility = (cb = (val) => { }) => {
  const isFlag = ref(false);

  let hidden, visibilityChange;
  if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  }

  const handleVisibilityChange = () => {
    isFlag.value = document[hidden];
    cb(isFlag.value);
  }

  onMounted(() => {
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
  });

  onUnmounted(() => {
    document.removeEventListener(visibilityChange, handleVisibilityChange);
  });
}


// usePageVisibility((hidden) => {
//     console.log(`User is${hidden ? ' not' : ''} focus your site`);
//  });