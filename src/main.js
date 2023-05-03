import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import style from "./style.css";
// import icons from "./icons";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  style,
  // icons,
  render: (h) => h(App),
}).$mount("#app");
