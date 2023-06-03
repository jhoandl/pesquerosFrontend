import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import style from "./style.css";
import VeeValidate from "vee-validate";
import es from "vee-validate/dist/locale/es";
import axiosPlugin from "./axios";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(VeeValidate);
VeeValidate.Validator.localize("es", es);
Vue.use(axiosPlugin);
Vue.use(Toast);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  style,
  render: (h) => h(App),
}).$mount("#app");
