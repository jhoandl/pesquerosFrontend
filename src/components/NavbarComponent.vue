<template>
  <div class="navbar">
    <div class="navbar-content bg-white ml-auto mr-auto mt-4 h-11 rounded-xl">
      <div>
        <div class="flex items-center ml-10">
          <button
            class="text-gray-600 hover:text-gray-800 focus:outline-none mt-2"
          >
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
        <div class="flex accion-nav -mt-7 mr-10">
          <button
            class="text-gray-600 hover:text-gray-800 focus:outline-none float-right mr-5"
          >
            <i class="fas fa-globe text-xl"></i>
          </button>
          <button
            class="text-gray-600 hover:text-gray-800 focus:outline-none mr-5"
          >
            <i class="fas fa-bell text-xl"></i>
          </button>
          <button class="text-gray-600 hover:text-gray-800 focus:outline-none">
            <!-- <i class="fas fa-moon text-xl"></i> -->
            <i class="fa-solid fa-circle-half-stroke text-xl"></i>
          </button>
          <div class="ml-3">
            <span class="text-gray-600 font-medium -mt-5 mr-2 relative">
              Admin
            </span>
            <button
              class="text-gray-600 hover:text-gray-800 focus:outline-none mr-5"
            >
              <i class="fas fa-user-circle text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      <router-view />
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
.navbar-content {
  width: 90%;
}
.accion-nav {
  float: right !important;
}
</style>
