// import MyHeader from "./components/MyHeader.vue";
import MyHeader from "./MyHeader.vue";

export default {
  install: (app, options) => {
    /* declare global component */
    app.component("my-header", MyHeader);
  },
};
