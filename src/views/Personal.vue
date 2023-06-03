<template>
  <div>
    <h1 style="margin-top: 2cm" class="text-xl font-bold dark:text-white">
      Registro de personal
    </h1>
    <button class="rounded-full bg-green-500 text-white py-2 px-4 butonAdd">
      <i class="fas fa-plus"></i>
      Nuevo
    </button>
    <div class="bg-white rounded-lg shadow-md p-4 dark:bg-slate-800">
      <div class="flex">
        <div class="w-1/3 p-4">
          <input
            type="text"
            class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
            placeholder="Nombre"
          />
          <input
            type="text"
            class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
            placeholder="Tipo Documento"
          />
          <input
            type="text"
            class="w-full p-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
            placeholder="Empresa"
          />
        </div>
        <div class="w-1/3 p-4">
          <input
            type="text"
            class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
            placeholder="Apellidos"
          />
          <input
            type="text"
            class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
            placeholder="Hora de inicio"
          />
          <input
            type="text"
            class="w-full p-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
            placeholder="Cargo"
          />
        </div>
        <div class="w-1/3 p-4">
          <input
            type="text"
            class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
            placeholder="Identificacion"
          />
          <input
            type="text"
            class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
            placeholder="Hora de Finalización"
          />
          <input
            type="text"
            class="w-full p-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
            placeholder="Fecha"
          />
        </div>
      </div>

      <button
        class="rounded-full bg-green-500 text-white py-2 px-4 float-right butoncard"
      >
        Guardar
      </button>
    </div>
    <div class="bg-white rounded-lg shadow-md p-4 dark:bg-slate-800">
      <vue-good-table
        :columns="columns"
        :rows="rows"
        styleClass="bg-gray-300 dark:bg-slate-600 rounded-lg w-full dark:border-b dark:border-collapse dark:border-slate-800 dark:text-white placeholder dark:placeholderD"
      >
      </vue-good-table>
    </div>
    <DashboardlogoComponent />
  </div>
</template>
<script>
import DashboardlogoComponent from "@/components/Dashboardlogo.vue";
// @ is an alias to /src
export default {
  name: "PersonalComponent",
  components: {
    DashboardlogoComponent,
  },
  data() {
    return {
      columns: [
        {
          label: "Nombre",
          field: "names",
          filterOptions: {
            placeholder: "Ingrese un nombre",
            enabled: true,
          },
        },
        {
          label: "Apellidos",
          field: "lastNames",
          filterOptions: {
            placeholder: "Ingrese un apellido",
            enabled: true,
          },
        },
        {
          label: "N° Documento",
          field: "documentNumber",
          filterOptions: {
            placeholder: "Ingrese un N° documento",
            enabled: true,
          },
        },
        {
          label: "Tipo Documento",
          field: "documentType",
          filterOptions: {
            placeholder: "Ingrese un tipo documento",
            enabled: true,
          },
        },
        {
          label: "Hora inicio",
          field: "startTime",
          filterOptions: {
            placeholder: "Ingrese un hora inicio",
            enabled: true,
          },
        },
        {
          label: "Hora fin",
          field: "timeEnd",
          filterOptions: {
            placeholder: "Ingrese una hora fin",
            enabled: true,
          },
        },
        {
          label: "Empresa",
          field: "company",
          filterOptions: {
            placeholder: "Ingrese una empresa",
            enabled: true,
          },
        },
      ],
      rows: [],
    };
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
  //a0a4a3 edebeb
}
.placeholder::placeholder {
  color: #454545;
}
.placeholderD::placeholder {
  color: #454545;
}
</style>
