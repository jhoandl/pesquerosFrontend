import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import style from "./style.css";
// import icons from "./icons";

Vue.config.productionTip = false;

// function setDarkMode() {
//   const htmlClasses = document.querySelector("#app").classList;
//   if (localStorage.getItem("dark")) {
//     if (localStorage.getItem("dark") === "true") {
//       htmlClasses.add("dark");
//     } else {
//       htmlClasses.remove("dark");
//     }
//   } else {
//     localStorage.setItem("dark", false);
//   }
// }

// setDarkMode();

new Vue({
  router,
  store,
  style,
  // icons,
  render: (h) => h(App),
  // mounted() {
  //   this.setDarkMode();
  // },
  // methods: {
  //   setDarkMode() {
  //     const htmlClasses = document.querySelector("#app").classList;
  //     const isDarkMode = localStorage.getItem("dark") === "true";

  //     if (isDarkMode) {
  //       htmlClasses.add("dark");
  //     } else {
  //       htmlClasses.remove("dark");
  //     }
  //   },
  //   toggleDarkMode() {
  //     const isDarkMode = localStorage.getItem("dark") === "true";
  //     localStorage.setItem("dark", !isDarkMode);
  //     this.setDarkMode();
  //   },
  // },
}).$mount("#app");
