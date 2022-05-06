import { ref, watch } from 'vue';


const useStorage = (key, defaultValue, storage = localStorage) => {
  const getState = (key, storage) => {
    let raw = storage.getItem(key);
    try {
      raw = JSON.parse(raw);
    } catch (error) {

    }
    return raw ?? defaultValue;
  }
  
  const state = ref(getState(key, storage) ?? defaultValue);
  const setState = () => {
      storage.setItem(key, JSON.stringify(state.value));
  }

  watch(state, () => { 
      setState(); 
    },
    { deep: true, immediate: false },
  );
  return state;
}

const useStorageLocal = (key, defaultValue = '') => useStorage(key, defaultValue)

const useStorageSession = (key, defaultValue = '') => useStorage(key, defaultValue, sessionStorage)

export{
  useStorageLocal,
  useStorageSession,
}

// example:
// const token = useStorageLocal('token');

// const form = useStorageLocal('user', {
//   name: 'Local',
//   age: 18,
// });

// form.value.name += 'n';
// form.value.age += 2;
// console.log(">>>", form);

// token.value += "t";
// console.log(">>>", token.value);