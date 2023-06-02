<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <div
        class="bg-white rounded-lg shadow-md p-4 cursor-pointer dark:bg-slate-800"
      >
        <div class="flex items-center mb-4 float-right">
          <h2 class="text-lg font-bold text-gray-800 mr-5 dark:text-white">
            Producción
          </h2>
          <span class="text-8xl primary mr-2">
            <i class="fas fa-chart-pie"></i>
          </span>
        </div>
      </div>
      <div
        class="bg-white rounded-lg shadow-md p-4 cursor-pointer dark:bg-slate-800"
      >
        <div class="flex items-center mb-4 float-right">
          <h2 class="text-lg font-bold text-gray-800 mr-5 dark:text-white">
            Ganancias
          </h2>
          <span class="text-8xl primary mr-2">
            <i class="fa-solid fa-chart-bar"></i>
          </span>
        </div>
      </div>
      <div
        class="bg-white rounded-lg shadow-md p-4 cursor-pointer dark:bg-slate-800"
      >
        <div class="flex items-center mb-4 float-right">
          <h2 class="text-lg font-bold text-gray-800 mr-5 dark:text-white">
            Reportes
          </h2>
          <span class="text-8xl primary mr-2">
            <i class="fa-solid fa-clipboard"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      darkMode: false,
      sidebarVisible: true,
    };
  },
  created() {
    // Obtener el valor de modo oscuro del localStorage
    const isDarkMode = localStorage.getItem("dark") === "true";
    this.darkMode = isDarkMode;
  },
  updated() {
    // Cambiar la clase "dark" en el elemento <html>
    document.documentElement.classList.toggle("dark", this.darkMode);
  },
  methods: {
    setDarkMode(darkMode) {
      // Cambiar el valor en localStorage
      localStorage.setItem("dark", darkMode);
      // Actualizar el valor de darkMode
      this.darkMode = darkMode;
    },
  },
};
</script>

<style>
.primary {
  color: #66a394;
}
</style>
