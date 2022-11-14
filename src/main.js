import Vue from "vue";
import App from "./App.vue";
import vueBoxShadows from "../index";

Vue.use(vueBoxShadows, {
  // useClass: true,
  // shadowBaseCustom: "",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
