<template>
  <div id="app" :class="['app', { 'dark-mode': darkMode }]">
    <div>
      <template v-if="isLoggedIn">
        <router-view></router-view>
      </template>
      <template v-else>
        <Login @login-success="isLoggedIn = true" />
      </template>
    </div>
    <!-- <Login /> -->
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
  </div>
</template>

<script>
import Login from "./views/Login.vue";
import darkModeMixin from "@/mixins/darkModeMixin";

export default {
  mixins: [darkModeMixin],
  components: {
    Login,
  },
  data() {
    return {
      isLoggedIn: false,
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
</style>
