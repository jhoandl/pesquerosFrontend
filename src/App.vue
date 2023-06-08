<template>
  <div id="app" :class="['app', { dark: isDarkMode }]">
    <router-view class="w-full" v-show="$route.meta.hideNavigation" />
    <div v-show="!$route.meta.hideNavigation">
      <template>
        <div class="contenedor">
          <SidebarComponent
            v-show="!$route.meta.hideNavigation"
            class="sidebar"
          />
          <div class="contentView flex flex-col h-screen">
            <NavbarComponent
              v-show="!$route.meta.hideNavigation"
              class="navbar bg-gray-300 dark:bg-slate-700 overflow-y-auto"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import darkModeMixin from "@/mixins/darkModeMixin";
import NavbarComponent from "@/components/NavbarComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";

export default {
  mixins: [darkModeMixin],
  components: {
    NavbarComponent,
    SidebarComponent,
  },
  data() {
    return {
      isLoggedIn: false,
      sidebarVisible: true,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.dark-mode {
  @import "@/assets/css/dark-mode.css"; // Importa el archivo SCSS del modo oscuro
}
.contenedor {
  display: grid;
  grid-template-columns: 2fr 9fr;
}
.navbar {
  height: 100vh;
}
.sidebar {
  height: 100vh;
}
.parent {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.views {
  max-height: 89vh;
  height: 89vh;
}
.login-container {
  justify-content: center;
  align-items: center;
}
</style>
