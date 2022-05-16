import { ref, onMounted, onUnmounted } from 'vue';

export const useOnClickOutside = (refDiv = null, cb = (val) => {}) => {
  const isFlag = ref(false);

  const handleClickOutside = (event) => {
    isFlag.value = refDiv.value && !refDiv.value.contains(event.target);
    // console.log(isFlag.value ? "outside" : "inside");
    cb(isFlag.value);
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
  })

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });
  return isFlag;
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