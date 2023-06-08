<template>
  <div class="">
    <div
      class="navbar-content bg-white ml-auto mr-auto mt-4 h-11 rounded-xl dark:bg-slate-800"
    >
      <div>
        <div class="flex items-center ml-10">
          <button
            @click="toggleExpandedMode()"
            class="text-gray-600 hover:text-gray-800 focus:outline-none mt-2 dark:text-white"
          >
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
        <div class="flex accion-nav -mt-7 mr-10">
          <button
            class="text-gray-600 hover:text-gray-800 focus:outline-none float-right mr-5 dark:text-white"
          >
            <i class="fas fa-globe text-xl"></i>
          </button>
          <button
            class="text-gray-600 hover:text-gray-800 focus:outline-none mr-5 dark:text-white"
          >
            <i class="fas fa-bell text-xl"></i>
          </button>
          <button
            class="text-gray-600 hover:text-gray-800 focus:outline-none dark:text-white"
            @click="toggleDarkMode"
          >
            <i v-if="darkMode" class="fa-solid fa-sun"></i>
            <i v-else class="fas fa-moon text-xl"></i>
          </button>
          <div class="ml-3">
            <span
              class="text-gray-600 font-medium -mt-5 mr-2 relative dark:text-white"
            >
              {{ user.username }}
            </span>
            <button
              @click="dropdownOpen = !dropdownOpen"
              class="text-gray-600 hover:text-gray-800 focus:outline-none mr-5 dark:text-white"
            >
              <i class="fas fa-user-circle text-xl"></i>
            </button>
            <div
              v-if="dropdownOpen"
              ref="dropdown"
              class="absolute right-20 mt-3 w-48 bg-white rounded-lg shadow-xl dark:text-white dark:bg-slate-800 z-10"
            >
              <router-link
                to="profile"
                class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-600 dark:hover:rounded-lg"
                >Perfil</router-link
              >
              <!-- Agrega aquí otros enlaces del dropdown -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex-1 flex justify-center">
      <div class="w-5/6 mt-10 views">
        <router-view class="" />
      </div>
    </div>
  </div>
</template>

<script>
import darkModeMixin from "@/mixins/darkModeMixin";
import sidebarExpandedMixin from "@/mixins/sidebarExpandedMixin";

export default {
  name: "NavbarComponent",
  mixins: [darkModeMixin, sidebarExpandedMixin],
  data() {
    return {
      sidebarVisible: true,
      dropdownOpen: false,
      user: {},
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
      localStorage.setItem("toggle", this.sidebarVisible);
      console.log(this.sidebarVisible);
    },
    closeDropdown(event) {
      const dropdown = this.$refs.dropdown;
      if (dropdown && !dropdown.contains(event.target)) {
        this.dropdownOpen = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar-content {
  width: 90%;
}
.accion-nav {
  float: right !important;
}
.views {
  max-height: 89vh;
  height: 89vh;
  overflow: hidden;
}
</style>
