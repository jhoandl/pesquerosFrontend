<template>
  <div>
    <h1 style="margin-top: 2cm" class="text-xl font-bold">Oxigenación</h1>
    <button class="rounded-full bg-green-500 text-white py-2 px-4 butonAdd">
      <i class="fas fa-plus"></i>
      Nuevo
    </button>
    <div class="bg-white rounded-lg shadow-md p-4">
      <div class="flex">
        <div class="w-1/2 p-4">
          <input
            type="text"
            class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Hora de encendido"
          />
        </div>
        <div class="w-1/2 p-4">
          <input
            type="text"
            class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Hora de apagado"
          />
        </div>
        <div class="w-1/2 p-4">
          <input
            type="text"
            class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Cantidad de gasolina en litros"
          />
        </div>
      </div>

      <button
        class="rounded-full bg-green-500 text-white py-2 px-4 float-right butoncard"
      >
        Guardar
      </button>
    </div>
    <DashboardlogoComponent />
  </div>
</template>
<script>
import DashboardlogoComponent from "@/components/Dashboardlogo.vue";
// @ is an alias to /src
export default {
  name: "OxigenacionComponent",
  components: {
    DashboardlogoComponent,
  },
};
</script>
<style lang="scss" scoped>
.bg-white {
  margin-top: 1cm;
  height: 9cm;
  background-color: rgba($color: #d9d9d9, $alpha: 0.6);
}
.rounded-lg {
  border-radius: 0.5rem;
}
.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.p-4 {
  padding: 1rem;
}
.butoncard {
  width: 3cm;
  background-color: #66a394;
}
.butonAdd {
  margin-right: 25cm;
  width: 3cm;
  background-color: #66a394;
}
input {
  box-shadow: 7px 8px 9px rgba(0, 0, 0, 0.1);
  background-color: rgba($color: #edebeb, $alpha: 0.6);
  margin-top: 1cm;
  //a0a4a3 edebeb
}
</style>
