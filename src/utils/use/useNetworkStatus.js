import { onMounted, onUnmounted } from 'vue';

export const useNetworkStatus = () => {
  let isOnline = true;
  const changeNetworkStatus = () => {
    isOnline = navigator.onLine ? 'online' : 'offline';
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


// useNetworkStatus((status) => { 
//     console.log(`Your network status is ${status}`);
// }



export const useNetworkStatusOne = () => {
  const changeNetworkStatus = () => {
    return navigator.onLine ? 'online' : 'offline';
  };

  onMounted(() => {
    window.addEventListener('online', changeNetworkStatus);
    window.addEventListener('offline', changeNetworkStatus);
  });

  onUnmounted(() => {
    window.removeEventListener('online', changeNetworkStatus);
    window.removeEventListener('offline', changeNetworkStatus);
  });

  return changeNetworkStatus;
}