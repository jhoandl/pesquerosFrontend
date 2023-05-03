<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <div class="bg-gradient-to-r from-gray-200 to-gray-400 h-48"></div>
    <div class="p-4">
      <h3 class="font-bold text-xl mb-2">Título de la tarjeta</h3>
      <p class="text-gray-700 text-base">Contenido de la tarjeta aquí</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "PersonalComponent",
  components: {},
};
</script>

<style scoped>
.bg-gradient-to-r {
  background: linear-gradient(
    to right,
    #edf2f7,
    #cbd5e0,
    #a0aec0,
    #718096,
    #4a5568
  );
}
</style>
