import { onMounted, onUnmounted } from 'vue';

export const useNetworkStatus = (callback = () => { }) => {
  const changeNetworkStatus = () => {
    const status = navigator.onLine ? 'online' : 'offline';
    callback(status);
  }

  onMounted(() => {
    window.addEventListener('online', changeNetworkStatus);
    window.addEventListener('offline', changeNetworkStatus);
  });

  onUnmounted(() => {
    window.removeEventListener('online', changeNetworkStatus);
    window.removeEventListener('offline', changeNetworkStatus);
  })
}


// useNetworkStatus((status) => { 
//     console.log(`Your network status is ${status}`);
// }
