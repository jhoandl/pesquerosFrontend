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
import VueGoodTablePlugin from "vue-good-table";
import { VueSelect } from "vue-select";
import VueSweetalert2 from "vue-sweetalert2";
import PrimeVue from "primevue/config";

// import the styles
import "vue-good-table/dist/vue-good-table.css";
import "vue-select/dist/vue-select.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

Vue.use(VueGoodTablePlugin);
Vue.use(VeeValidate);
VeeValidate.Validator.localize("es", es);
Vue.use(axiosPlugin);
Vue.use(Toast);
Vue.use(VueSweetalert2);
Vue.use(PrimeVue);
Vue.component("v-select", VueSelect);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  style,
  render: (h) => h(App),
}).$mount("#app");
