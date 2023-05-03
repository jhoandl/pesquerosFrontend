<template>
  <div class="navbar">
    <div class="navbar-content">
      <nav class="w-80 bg-white">hola</nav>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  background-color: rgba($color: #cacfd2, $alpha: 80);
  // height: 100vh;
}
</style>
