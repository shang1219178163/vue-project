import { ref, Ref } from 'vue';

type StateType = string | number | boolean | undefined;

function useToggle<StateType>(value: StateType = undefined, toggleValue: StateType = undefined) {
  const tmpValue = value ?? false;
  const tmpToggleValue = toggleValue ?? true;

  const state = ref(tmpValue);

  const toggle = (newValue) => {
    if ([tmpValue, tmpToggleValue].includes(newValue)) {
      state.value = newValue;
      return;
    }

    state.value = (state.value === tmpValue ? tmpToggleValue : tmpValue) as any;
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