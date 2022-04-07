import { onMounted, onUnmounted } from 'vue';

export const useOnClickOutside = (ref = null, callback = () => {}) => {
  function handleClickOutside(event) {
    if (ref.value && !ref.value.contains(event.target)) {
      callback()
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
  })

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });
}



{/* <template>
    <div ref="container">View</div>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {
        const container = ref(null);
        useOnClickOutside(container, () => {
            console.log('Clicked outside'); 
        })
    }
}
</script> */}