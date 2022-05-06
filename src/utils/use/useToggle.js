import { ref } from 'vue';

const useToggle = (value = false, toggleValue = true) => {
  const state = ref(value);

  const toggle = (newValue) => {
    if ([value, toggleValue].includes(newValue)) {
      state.value = newValue;
      return;
    }

    state.value = (state.value === value ? toggleValue : value);
  }

  return {
    state,
    toggle
  }
}

export{
  useToggle,
}

// example:
// const { state, toggle } = useToggle();
// const { state: state1, toggle: toggle1} = useToggle("a", "b");