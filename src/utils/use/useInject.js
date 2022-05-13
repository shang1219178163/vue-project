import { ref, reactive, readonly, provide, inject } from 'vue';


export const useInject = (key, value, defaultValue) => {
  const setInject = (val) => {
    provide(key, val);
  };

  setInject(value);
  const injectValue = inject(key, defaultValue);

  return {
    injectValue,
    setInject,
  }
}


// export const useInject = (key, value, defaultValue) => {
//   const theKey = typeof key === "string" || typeof key === undefined ? Symbol(key) : key;

//   const setInject = (val) => {
//     const arrayOrObj = Array.isArray(val) || typeof val === "Object";
//     let valRef = arrayOrObj ? reactive(val) : ref(val);
//     provide(theKey, readonly(valRef));
//   };

//   // provide(theKey, readonly(value));
//   setInject(value);

//   const injectValue = inject(theKey, defaultValue);

//   return {
//     injectValue,
//     setInject,
//   }
// }
