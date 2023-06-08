<template>
  <div
    class="bg-white rounded-lg shadow-md p-6 w-3/6 mr-auto ml-auto dark:bg-slate-800 dark:text-white"
  >
    <div class="flex items-center mb-4">
      <img
        src="../assets/user.png"
        alt="Foto de perfil"
        class="w-1/2 h-1/2 rounded-full"
      />
      <div class="ml-4">
        <h2 class="text-xl font-semibold">{{ user.namesAndLastNames }}</h2>
        <p class="text-gray-500">{{ user.username }}</p>
      </div>
    </div>
    <div class="border-t border-gray-300 pt-4">
      <div class="flex items-center mb-2">
        <i class="far fa-envelope text-gray-500"></i>
        <p class="ml-2">{{ user.email }}</p>
      </div>
      <div class="flex items-center mb-2">
        <i class="fas fa-id-card text-gray-500"></i>
        <p class="ml-2">Rol: {{ user.roles[0] }}</p>
      </div>
      <div class="flex items-center">
        <i class="fas fa-phone text-gray-500"></i>
        <p class="ml-2">Teléfono: {{ user.phoneNumber }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userProfile",
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
};
</script>
