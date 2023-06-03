import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8081", // Aquí debes colocar la URL base de tu API
  // Otros ajustes de configuración de Axios si los necesitas
  headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
});

export default {
  install(Vue) {
    Vue.prototype.$http = instance;
  },
};
