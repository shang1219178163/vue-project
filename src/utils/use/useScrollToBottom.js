import { ref, onMounted, onUnmounted } from 'vue';

export const useScrollToBottom = (cb = (val) => { }) => {
  const isFlag = ref(false);

  const handleScrolling = () => {
    isFlag.value = (window.innerHeight + window.scrollY) >= document.body.scrollHeight;
    cb(isFlag.value);
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScrolling);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScrolling);
  });
}


// useScrollToBottom(() => { console.log('Scrolled to bottom') })
