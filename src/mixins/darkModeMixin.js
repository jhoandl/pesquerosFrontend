import { useDark, useToggle } from "@vueuse/core";

export default {
  data() {
    return {
      darkMode: true,
    };
  },
  created() {
    // Obtener el valor de modo oscuro del localStorage
    const isDarkMode = localStorage.getItem("dark") === "true";
    this.darkMode = isDarkMode;
    console.log("useDark ", useDark);
  },
  methods: {
    toggleDarkMode() {
      console.log(useDark);
      useToggle(useDark);
      // Cambiar el valor en localStorage
      localStorage.setItem("dark", this.darkMode);
      // Cambiar la clase "dark" en el elemento <html>
      document.documentElement.classList.toggle("dark");
      // Actualizar el valor de isDarkMode
      this.darkMode = !this.darkMode;
    },
  },
};
