import { ref, onMounted, onUnmounted } from 'vue';

export const MOBILE = 'MOBILE'
export const TABLET = 'TABLET'
export const DESKTOP = 'DESKTOP'

export const useViewport = ({mobileWidth = 768, tabletWidth = 922}) => {
  // const { mobile = null, tablet = null } = config;
  // let mobileWidth = mobile ?? 768;
  // let tabletWidth = tablet ?? 922;
  let device = ref(getDevice(window.innerWidth));
  function getDevice(width) {
    if (width < mobileWidth) {
      return MOBILE;
    } else if (width < tabletWidth) {
      return TABLET;
    }
    return DESKTOP;
  }

  const handleResize = () => {
    device.value = getDevice(window.innerWidth);
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  return {
    device
  }
}

// 有时我们会用宽度来检测当前的用户设备，这样我们就可以根据设备来处理对应的内容。
// const { device } = useViewport({ mobile: 700, table: 900 });
