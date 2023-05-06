import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import style from "./style.css";
// import icons from "./icons";

Vue.config.productionTip = false;

function setDarkMode() {
  const htmlClasses = document.querySelector("#app").classList;
  if (localStorage.getItem("dark")) {
    if (localStorage.getItem("dark") === "true") {
      htmlClasses.add("dark");
    } else {
      htmlClasses.remove("dark");
    }
  } else {
    localStorage.setItem("dark", false);
  }
}

setDarkMode();

new Vue({
  router,
  store,
  style,
  // icons,
  render: (h) => h(App),
}).$mount("#app");
