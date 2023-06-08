<template>
  <div>
    <h1 style="margin-top: 2cm" class="text-xl font-bold dark:text-white">
      Empresa
    </h1>
    <button
      @click="newCompany = !newCompany"
      class="rounded-full bg-green-500 text-white py-2 px-4 butonAdd"
    >
      <i class="fas fa-plus"></i>
      Nuevo
    </button>
    <form v-if="newCompany" @submit.prevent="saveEmpresa()">
      <div class="bg-white rounded-lg shadow-md p-4 dark:bg-slate-800">
        <div class="flex">
          <div class="w-1/2 p-4">
            <input
              autocomplete="off"
              type="text"
              name="Nombre de empresa"
              class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
              placeholder="Nombre de empresa"
              v-model="form.name"
              v-validate="'required'"
              data-vv-rules="required"
            />
            <small
              class="text-red-500 text-xs relative -top-3 mr-32 truncate w-full"
              v-if="errors && errors.has('Nombre de empresa')"
            >
              <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
              {{ errors.first("Nombre de empresa") }}
            </small>
          </div>
          <div class="w-1/2 p-4">
            <input
              autocomplete="off"
              type="cantidad"
              name="NIT"
              class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
              placeholder="NIT"
              v-model="form.nit"
              v-validate="'required'"
              data-vv-rules="required"
            />
            <small
              class="text-red-500 text-xs relative -top-3 mr-32 truncate w-full"
              v-if="errors && errors.has('NIT')"
            >
              <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
              {{ errors.first("NIT") }}
            </small>
          </div>
        </div>

        <button
          class="rounded-full bg-green-500 text-white py-2 px-4 float-right butoncard"
          @click.prevent="saveEmpresa()"
          type="submit"
        >
          Guardar
        </button>
      </div>
    </form>
    <div
      class="bg-white rounded-lg shadow-md p-4 dark:bg-slate-800 z-10 overflow-y-auto h-auto"
    >
      <vue-good-table
        :columns="columns"
        :rows="rows"
        id="element-to-pdf"
        styleClass="bg-gray-300 dark:bg-slate-600 rounded-lg w-full dark:border-b dark:border-collapse dark:border-slate-800 dark:text-white placeholder dark:placeholderD border-collapse border border-gray-200"
      >
        <template slot="table-row" slot-scope="props">
          <div v-if="props.column.field === 'id'" class="font-mono">
            <span class="text-nowrap">{{ props.row.id }}</span>
          </div>
          <div v-if="props.column.field === 'name'" class="font-mono">
            <span class="text-nowrap">{{ props.row.name }}</span>
          </div>
          <div v-if="props.column.field === 'nit'" class="font-mono">
            <span class="text-nowrap">{{ props.row.nit }}</span>
          </div>
          <div v-if="props.column.field === 'action'" class="font-mono flex">
            <a
              @click.prevent="deleteEmpresa(props.row.id)"
              class="rounded-md mr-auto text-xs bg-red-500 text-white p-3 cursor-pointer"
            >
              <i class="fa-solid fa-trash"></i>
            </a>
          </div>
        </template>
      </vue-good-table>
    </div>
  </div>
</template>
<script>
// import DashboardlogoComponent from "@/components/Dashboardlogo.vue";
import empresa from "../model/empresa";
import EmpresaColumns from "@/views/js/empresa";
// @ is an alias to /src
export default {
  name: "EmpresaComponent",
  data() {
    return {
      columns: EmpresaColumns,
      rows: [],
      paseSize: 1000,
      pageNumber: 0,
      form: new empresa("", "", ""),
      newCompany: false,
    };
  },
  mounted() {
    this.getAllEmpresa();
  },
  components: {
    // DashboardlogoComponent,
  },
  methods: {
    getAllEmpresa() {
      this.$http
        .get("/api/company/read", {
          params: {
            pageSize: this.paseSize,
            pageNumber: this.pageNumber,
          },
        })
        .then((res) => {
          console.log("res feeding ", res.data);
          this.rows = res.data.content;
        });
    },

    deleteEmpresa(id) {
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
            .delete(`/api/company/delete-id/${id}`)
            .then(() => {
              this.$toast.success("empresa eliminado exitosamente", {
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
                this.getAllEmpresa();
              }, 2000);
            });
        }
      });
    },
    saveEmpresa() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          this.$http
            .post("/api/company/create-company", this.form)
            .then(() => {
              this.$toast.success("Se creo correctamente", {
                position: "top-right",
                timeout: 5000,
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
              this.getAllEmpresa();
            })
            .catch(() => {
              this.$toast.error("Error", {
                position: "top-right",
                timeout: 5000,
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
        }
      });
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
  margin-top: 1cm;
  //a0a4a3 edebeb
}
</style>
