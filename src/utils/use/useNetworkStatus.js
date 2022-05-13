import { ref, onMounted, onUnmounted } from 'vue';

// 返回ref 布尔值
export const useNetworkStatus = () => {
  let isOnline = ref(true);
  const changeNetworkStatus = () => {
    isOnline.value = navigator.onLine;
    // isOnline = navigator.onLine ? 'online' : 'offline';
    // console.log("changeNetworkStatus", isOnline);
  };

  onMounted(() => {
    window.addEventListener('online', changeNetworkStatus);
    window.addEventListener('offline', changeNetworkStatus);
  });

  onUnmounted(() => {
    window.removeEventListener('online', changeNetworkStatus);
    window.removeEventListener('offline', changeNetworkStatus);
  });

  return isOnline;
}


// import { useNetworkStatus } from "@/utils/use/useNetworkStatus"

// const isOnline = useNetworkStatus();
