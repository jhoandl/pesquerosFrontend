<template>
  <div>
    <h1 style="margin-top: 2cm" class="text-xl font-bold dark:text-white">
      Alimentación
    </h1>
    <button class="rounded-full bg-green-500 text-white py-2 px-4 butonAdd">
      <i class="fas fa-plus"></i>
      Nuevo
    </button>
    <form @submit.prevent="saveOxigenation()">
      <div class="bg-white rounded-lg shadow-md p-4 dark:bg-slate-800">
        <div class="flex">
          <div class="w-1/2 p-4">
            <input
              autocomplete="off"
              type="text"
              name="dateOfsale"
              class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
              placeholder="Hora de alimentación"
              v-model="form.dateOfsale"
              v-validate="'required'"
              data-vv-rules="required"
            />
            <small
              class="text-red-500 text-xs absolute top-10 mt-2 mr-2"
              v-if="errors && errors.has('dateOfsale')"
            >
              <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
              {{ errors.first("dateOfsale") }}
            </small>
          </div>
          <div class="w-1/2 p-4">
            <input
              autocomplete="off"
              type="cantidad"
              name="quantitysold"
              class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
              placeholder="Cantidad en Kilogramos"
              v-model="form.quantitysold"
              v-validate="'required'"
              data-vv-rules="required"
            />
            <small
              class="text-red-500 text-xs absolute top-10 mt-2 mr-2"
              v-if="errors && errors.has('quantitysold')"
            >
              <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
              {{ errors.first("quantitysold") }}
            </small>
          </div>
        </div>

        <button
          class="rounded-full bg-green-500 text-white py-2 px-4 float-right butoncard"
          @click.prevent="saveAlimentacion()"
          type="submit"
        >
          Guardar
        </button>
      </div>
    </form>
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
        <div v-if="props.column.field === 'dateOfsale'" class="font-mono">
          <span class="text-nowrap">{{ props.row.dateOfsale }}</span>
        </div>
        <div v-if="props.column.field === 'quantitysold'" class="font-mono">
          <span class="text-nowrap">{{ props.row.quantitysold }}</span>
        </div>
        <div v-if="props.column.field === 'action'" class="font-mono flex">
          <a
            @click.prevent="deleteAlimentacion(props.row.id)"
            class="rounded-md mr-auto text-xs bg-red-500 text-white p-3 cursor-pointer"
          >
            <i class="fa-solid fa-trash"></i>
          </a>
          <a
            @click.prevent="generatepdf()"
            class="rounded-md ml-auto text-xs bg-red-500 text-white p-3 cursor-pointer"
          >
            <i class="fa-regular fa-file-pdf"></i>
          </a>
        </div>
      </template>
    </vue-good-table>
    <DashboardlogoComponent />
  </div>
</template>
<script>
import DashboardlogoComponent from "@/components/Dashboardlogo.vue";
import alimentacion from "../model/alimentacion";
import AlimentaciontionColumns from "@/views/js/alimentacion";
// @ is an alias to /src
export default {
  name: "AlimentacionComponent",
  data() {
    return {
      columns: AlimentaciontionColumns,
      rows: [],
      paseSize: 10,
      pageNumber: 0,
      form: new alimentacion("", "", ""),
    };
  },
  mounted() {
    this.getAllAlimentacion();
  },
  components: {
    DashboardlogoComponent,
  },
  methods: {
    getAllAlimentacion() {
      this.$http
        .get("/api/feeding/read", {
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

    deleteAlimentacion(id) {
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
            .delete(`/api/feeding/delete-id/${id}`)
            .then(() => {
              this.$toast.success("oxigancion eliminado exitosamente", {
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
                this.getAllAlimentacion();
              }, 2000);
            });
        }
      });
    },
    saveAlimentacion() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          this.$http
            .post("/api/feeding/create-feeding", this.form)
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
              this.getAllAlimentacion();
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
