import Vue from "vue";
import App from "./App.vue";
import boxShadows from "/src/assets/index.js";

Vue.use(boxShadows, {
  // useClass: true,
  // shadowBaseCustom: "",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
