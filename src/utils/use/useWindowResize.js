import { ref, onMounted, onUnmounted } from 'vue';

export function useWindowResize() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);
  const handleResizeChange = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }

  onMounted(() => {
    window.addEventListener('resize', handleResizeChange)
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResizeChange)
  })

  return {
    width,
    height
  }
}


// const { width, height } = useWindowResize();
