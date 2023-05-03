<template>
  <div class="contenedor">
    <SidebarComponent class="sidebar" />
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
