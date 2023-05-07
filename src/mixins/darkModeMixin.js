export default {
  data() {
    return {
      darkMode: false,
    };
  },
  created() {
    // Obtener el valor de modo oscuro del localStorage
    const isDarkMode = localStorage.getItem("dark") === "false";
    this.darkMode = isDarkMode;
  },
  methods: {
    toggleDarkMode() {
      // Cambiar el valor en localStorage
      localStorage.setItem("dark", this.darkMode);
      // Cambiar la clase "dark" en el elemento <html>
      document.documentElement.classList.toggle("dark");
      // Actualizar el valor de isDarkMode
      this.darkMode = !this.darkMode;
    },
  },
};
