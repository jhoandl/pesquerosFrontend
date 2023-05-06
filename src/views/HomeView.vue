<template>
  <div class="contenedor">
    <SidebarComponent
      :sidebarVisible="sidebarVisible"
      @toggle-sidebar="sidebarVisible = true"
      class="sidebar"
    />
    <NavbarComponent class="navbar" />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    SidebarComponent,
  },
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
.contenedor {
  /* display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 1px; */
  display: grid;
  grid-template-columns: 2fr 9fr; /* 10% - 90% */
}
.navbar {
  /* grid-area: 1 / 1 / 2 / 3; */
  height: 100vh;
}
.sidebar {
  /* grid-area: 1 / 1 / 2 / 2; */
  height: 100vh;
}
</style>
