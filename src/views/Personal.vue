<template class="z-auto">
  <div class="z-10 relative">
    <h1 style="margin-top: 0cm" class="text-xl font-bold dark:text-white">
      Registro de personal
    </h1>
    <button
      class="rounded-full bg-green-500 text-white py-2 px-4 butonAdd"
      @click="newStaff = !newStaff"
    >
      <i class="fas fa-plus"></i>
      Nuevo
    </button>
    <div
      v-if="newStaff"
      class="bg-white rounded-lg shadow-md p-4 dark:bg-slate-800 card-form overflow-auto transition-transform duration-300 transform"
      :class="{ 'translate-y-0': newStaff, '-translate-y-full': !newStaff }"
    >
      <form @submit.prevent="save()" class="z-10">
        <div class="flex">
          <div class="w-1/3 p-4">
            <div>
              <input
                type="text"
                class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
                placeholder="Nombre"
                v-model="form.names"
                name="Nombre"
                v-validate="'required'"
                data-vv-rules="required"
              />
              <small
                class="text-red-500 text-xs relative -top-3 mr-32 truncate w-full"
                v-if="errors && errors.has('Nombre')"
              >
                <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                {{ errors.first("Nombre") }}
              </small>
            </div>
            <div>
              <v-select
                class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
                name="Tipo Documento"
                v-model="form.documentType"
                :options="options"
                label="label"
                v-validate="'required'"
                data-vv-rules="required"
                :reduce="(dt) => dt.value"
              />
              <small
                class="text-red-500 text-xs relative -top-3 mr-32 truncate w-full"
                v-if="errors && errors.has('Tipo Documento')"
              >
                <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                {{ errors.first("Tipo Documento") }}
              </small>
            </div>
            <div>
              <v-select
                class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
                name="Empresa"
                aria-placeholder="Seleccione una empresa"
                v-model="form.companyId"
                :options="companyOptions"
                label="name"
                v-validate="'required'"
                data-vv-rules="required"
                :reduce="(company) => company.id"
              />
              <small
                class="text-red-500 text-xs relative top-1 mr-32 truncate w-full"
                v-if="errors && errors.has('Empresa')"
              >
                <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                {{ errors.first("Empresa") }}
              </small>
            </div>
          </div>
          <div class="w-1/3 p-4">
            <div>
              <input
                type="text"
                class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
                placeholder="Apellidos"
                v-model="form.lastNames"
                name="Apellidos"
                v-validate="'required'"
                data-vv-rules="required"
              />
              <small
                class="text-red-500 text-xs relative -top-3 mr-32 truncate w-full"
                v-if="errors && errors.has('Apellidos')"
              >
                <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                {{ errors.first("Apellidos") }}
              </small>
            </div>
            <div>
              <input
                type="text"
                class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
                placeholder="Hora de inicio"
                v-model="form.startTime"
                name="Hora de inicio"
                v-validate="'required'"
                data-vv-rules="required"
              />
              <small
                class="text-red-500 text-xs relative -top-3 mr-32 truncate w-full"
                v-if="errors && errors.has('Hora de inicio')"
              >
                <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                {{ errors.first("Hora de inicio") }}
              </small>
            </div>
            <div>
              <input
                type="text"
                class="w-full p-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
                placeholder="Cargo"
                v-model="form.position"
                name="Cargo"
                v-validate="'required'"
                data-vv-rules="required"
              />
              <small
                class="text-red-500 text-xs relative top-1 mr-32 truncate w-full"
                v-if="errors && errors.has('Cargo')"
              >
                <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                {{ errors.first("Cargo") }}
              </small>
            </div>
          </div>
          <div class="w-1/3 p-4">
            <div>
              <input
                type="text"
                class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
                placeholder="Identificacion"
                v-model="form.documentNumber"
                name="Identificacion"
                v-validate="'required'"
                data-vv-rules="required"
              />
              <small
                class="text-red-500 text-xs relative -top-3 mr-32 truncate w-full"
                v-if="errors && errors.has('Identificacion')"
              >
                <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                {{ errors.first("Identificacion") }}
              </small>
            </div>
            <div>
              <input
                type="text"
                class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
                placeholder="Hora de Finalización"
                v-model="form.timeEnd"
                name="Hora de Finalización"
                v-validate="'required'"
                data-vv-rules="required"
              />
              <small
                class="text-red-500 text-xs relative -top-3 mr-32 truncate w-full"
                v-if="errors && errors.has('Hora de Finalización')"
              >
                <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                {{ errors.first("Hora de Finalización") }}
              </small>
            </div>
            <div>
              <input
                type="date"
                class="w-full p-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
                placeholder="Fecha"
                v-model="form.date"
                name="Fecha"
                v-validate="'required'"
                data-vv-rules="required"
              />
              <small
                class="text-red-500 text-xs relative top-1 mr-32 truncate w-full"
                v-if="errors && errors.has('Fecha')"
              >
                <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                {{ errors.first("Fecha") }}
              </small>
            </div>
          </div>
        </div>
        <button
          @click.prevent="save()"
          class="rounded-full bg-green-500 text-white py-2 px-4 float-right butoncard"
        >
          Guardar
        </button>
      </form>
    </div>
    <div
      class="bg-white rounded-lg shadow-md p-4 dark:bg-slate-800 z-10 overflow-auto"
    >
      <vue-good-table
        :columns="columns"
        :rows="rows"
        :pagination-options="{
          enabled: false,
        }"
        styleClass="bg-gray-300 dark:bg-slate-600 rounded-lg w-full dark:border-b dark:border-collapse dark:border-slate-800 dark:text-white placeholder dark:placeholderD border-collapse border border-gray-200"
      >
        <template slot="table-row" slot-scope="props">
          <div v-if="props.column.field === 'id'" class="font-mono">
            <span class="text-nowrap">{{ props.row.id }}</span>
          </div>
          <div v-if="props.column.field === 'names'" class="font-mono">
            <span class="text-nowrap">{{ props.row.names }}</span>
          </div>
          <div v-if="props.column.field === 'lastNames'" class="font-mono">
            <span class="text-nowrap">{{ props.row.lastNames }}</span>
          </div>
          <div v-if="props.column.field === 'documentNumber'" class="font-mono">
            <span class="text-nowrap">{{ props.row.documentNumber }}</span>
          </div>
          <div v-if="props.column.field === 'documentType'" class="font-mono">
            <span class="text-nowrap">{{ props.row.documentType }}</span>
          </div>
          <div v-if="props.column.field === 'startTime'" class="font-mono">
            <span class="text-nowrap">{{ props.row.startTime }}</span>
          </div>
          <div v-if="props.column.field === 'timeEnd'" class="font-mono">
            <span class="text-nowrap">{{ props.row.timeEnd }}</span>
          </div>
          <div v-if="props.column.field === 'companyId'" class="font-mono">
            <span class="text-nowrap">{{ props.row.companyId }}</span>
          </div>
          <div v-if="props.column.field === 'position'" class="font-mono">
            <span class="text-nowrap">{{ props.row.position }}</span>
          </div>
          <div v-if="props.column.field === 'date'" class="font-mono">
            <span class="text-nowrap">{{ props.row.date }}</span>
          </div>
          <div v-if="props.column.field === 'action'" class="font-mono">
            <a
              @click.prevent="deleteStaff(props.row.id)"
              class="rounded-md mr-auto ml-auto text-xs bg-red-500 text-white p-3 cursor-pointer"
              ><i class="fa-solid fa-trash"></i
            ></a>
          </div>
        </template>
        <!-- slot-scope="props" -->
        <!-- <template slot="pagination-bottom">
          <Paginator
            :rows="totalPages"
            :totalRecords="totalPages"
            :rowsPerPageOptions="[10, 20, 30]"
          />
        </template> -->
      </vue-good-table>
    </div>
    <!-- <DashboardlogoComponent class="-top-96" /> -->
  </div>
</template>
<script>
// import DashboardlogoComponent from "@/components/Dashboardlogo.vue";
import PersonalColumns from "@/views/js/PersonalColumns";
import Staff from "../model/staff";
// import Paginator from "primevue/paginator";
// @ is an alias to /src
export default {
  name: "PersonalComponent",
  components: {
    // Paginator,
  },
  data() {
    return {
      columns: PersonalColumns,
      rows: [],
      pageSize: 1000,
      pageNumber: 0,
      currentPage: 1,
      totalPages: 10,
      options: [
        {
          label: "Cedula de ciudadania",
          value: "CC",
        },
        {
          label: "Cedula de extranjeria",
          value: "CE",
        },
      ],
      form: new Staff("", "", "", "", "", "", "", "", ""),
      companyOptions: [],
      newStaff: false,
    };
  },
  mounted() {
    this.getAll();
    this.getAllCompany();
  },
  methods: {
    getAll() {
      this.$http
        .get("/api/staff/read", {
          params: {
            pageSize: this.pageSize,
            pageNumber: this.currentPage - 1,
          },
        })
        .then((res) => {
          console.log("res staff ", res.data);
          this.rows = res.data.content;
          this.totalPages = res.data.totalPages;
        });
    },
    save() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          this.$http
            .post("/api/staff/create-staff", this.form)
            .then((res) => {
              console.log("save ", res);
              this.$toast.success("Personal guardado exitosamente", {
                position: "top-right",
                timeout: 3000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButton: true,
                hideProgressBar: false,
                closeButton: "button",
                icon: true,
              });
              this.getAll();
            })
            .catch((err) => {
              console.log("error ", err);
              this.$toast.error("Error guardando personal", {
                position: "top-right",
                timeout: 3000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButton: true,
                hideProgressBar: false,
                closeButton: "button",
                icon: true,
              });
            })
            .finally(() => {
              setTimeout(() => {
                window.location.reload();
              }, 3500);
            });
        }
      });
    },
    getAllCompany() {
      this.companyOptions = [];
      this.$http
        .get("/api/company/get-all")
        .then((res) => {
          console.log("res company ", res.data);
          this.companyOptions = res.data;
        })
        .catch((err) => {
          console.log("err ", err);
          this.$toast.error("Error consultando las empresas", {
            position: "top-right",
            timeout: 3000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButton: true,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
          });
        });
    },
    deleteStaff(id) {
      this.$swal({
        title: "¿Esta seguro de eliminar el registro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        customClass: {
          confirmButton:
            "bg-green-500/50 text-white cuursor-pointer rounded-full border-none p-1 w-24",
          cancelButton:
            "bg-red-500/50 relative ml-2 text-white rounded-full p-1 w-24",
        },
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          this.$http
            .delete(`/api/staff/delete-id/${id}`)
            .then(() => {
              this.$toast.success("Personal eliminado exitosamente", {
                position: "top-right",
                timeout: 1500,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButton: true,
                hideProgressBar: false,
                closeButton: "button",
                icon: true,
              });
            })
            .catch((err) => {
              console.log("error ", err);
              this.$toast.error("Error eliminando el registro", {
                position: "top-right",
                timeout: 3000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButton: true,
                hideProgressBar: false,
                closeButton: "button",
                icon: true,
              });
            })
            .finally(() => {
              setTimeout(() => {
                this.getAll();
              }, 2000);
            });
        }
      });
    },
    updateCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
      // Aquí puedes realizar otras operaciones necesarias, como obtener los datos de la página seleccionada
    },
    updatePageSize(pageSize) {
      this.pageSize = pageSize;
      this.getAll();
      // Aquí puedes realizar otras operaciones necesarias, como recargar los datos con el nuevo tamaño de página
    },
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
  z-index: 1000;
  cursor: pointer;
  background-color: #66a394;
}
.butonAdd {
  margin-right: 35cm;
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
