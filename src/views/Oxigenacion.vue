<template>
  <div>
    <h1 style="margin-top: 2cm" class="text-xl font-bold dark:text-white">
      Oxigenación
    </h1>
    <button
      @click="newOxigeny = !newOxigeny"
      class="rounded-full bg-green-500 text-white py-2 px-4 butonAdd"
    >
      <i class="fas fa-plus"></i>
      Nuevo
    </button>
    <form v-if="newOxigeny" @submit.prevent="saveOxigenation()">
      <div class="bg-white rounded-lg shadow-md p-4 dark:bg-slate-800">
        <div class="flex">
          <div class="w-1/2 p-4">
            <input
              autocomplete="off"
              type="text"
              name="Hora de encendido"
              class="w-full p-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
              placeholder="Hora de encendido"
              v-model="form.onTime"
              v-validate="'required'"
              data-vv-rules="required"
            />
            <small
              class="text-red-500 text-xs relative mr-32 top-1 truncate w-full"
              v-if="errors && errors.has('Hora de encendido')"
            >
              <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
              {{ errors.first("Hora de encendido") }}
            </small>
          </div>
          <div class="w-1/2 p-4">
            <input
              type="text"
              name="Hora de apagado"
              class="w-full p-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
              placeholder="Hora de apagado"
              v-model="form.endTime"
              v-validate="'required'"
              data-vv-rules="required"
            />
            <small
              class="text-red-500 text-xs relative top-1 mr-32 truncate w-full"
              v-if="errors && errors.has('Hora de apagado')"
            >
              <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
              {{ errors.first("Hora de apagado") }}
            </small>
          </div>
        </div>
        <div class="relative -top-10">
          <div class="w-1/2 p-4">
            <input
              type="number"
              autocomplete="off"
              name="Cantidad en litros"
              class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
              placeholder="Cantidad en litros"
              v-model="form.gasolineQuality"
              v-validate="'required'"
              data-vv-rules="required"
            />
            <small
              class="text-red-500 text-xs relative -top-3 mr-32 truncate w-full"
              v-if="errors && errors.has('Cantidad en litros')"
            >
              <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
              {{ errors.first("Cantidad en litros") }}
            </small>
          </div>
        </div>
        <button
          class="rounded-full bg-green-500 text-white py-2 px-4 float-right butoncard"
          @click.prevent="saveOxigenation()"
          type="submit"
        >
          Guardar
        </button>
      </div>
    </form>
    <div
      class="bg-white rounded-lg shadow-md p-4 dark:bg-slate-800 z-10 overflow-auto"
    >
      <vue-good-table
        :columns="columns"
        :rows="rows"
        id="element-to-pdf"
        styleClass="bg-gray-300 dark:bg-slate-600 rounded-lg w-full dark:border-b dark:border-collapse dark:border-slate-800 dark:text-white placeholder dark:placeholderD border-collapse border border-gray-200"
      >
        <template slot="table-row" slot-scope="props">
          <div v-if="props.column.field === 'onTime'" class="font-mono">
            <span class="text-nowrap">{{ props.row.onTime }}</span>
          </div>
          <div
            v-if="props.column.field === 'gasolineQuality'"
            class="font-mono"
          >
            <span class="text-nowrap">{{ props.row.gasolineQuality }}</span>
          </div>
          <div v-if="props.column.field === 'endTime'" class="font-mono">
            <span class="text-nowrap">{{ props.row.endTime }}</span>
          </div>
          <div v-if="props.column.field === 'action'" class="font-mono flex">
            <a
              @click.prevent="deleteOxigenation(props.row.id)"
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
    </div>

    <DashboardlogoComponent />
  </div>
</template>
<script>
import DashboardlogoComponent from "@/components/Dashboardlogo.vue";
import oxigenation from "../model/oxigenation";
import OxigenationColumns from "@/views/js/oxigenation";
import html2pdf from "html2pdf.js";

// @ is an alias to /src
export default {
  name: "OxigenacionComponent",
  data() {
    return {
      columns: OxigenationColumns,
      rows: [],
      paseSize: 1000,
      pageNumber: 0,
      form: new oxigenation("", "", ""),
      newOxigeny: false,
    };
  },
  mounted() {
    this.getAlloxigenation();
  },
  components: {
    DashboardlogoComponent,
  },
  methods: {
    //generador de reportes pdf
    generatepdf() {
      var element = document.getElementById("element-to-pdf");
      var opt = {
        margin: 1,
        filename: "reporte.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      // New Promise-based usage:
      html2pdf().from(element).set(opt).save();

      // Old monolithic-style usage:
      html2pdf(element, opt);
    },
    //metood para obtenr los campos creados en la tabla
    getAlloxigenation() {
      this.$http
        .get("/api/Oxygenation/read", {
          params: {
            pageSize: this.paseSize,
            pageNumber: this.pageNumber,
          },
        })
        .then((res) => {
          console.log("res Oxygenation ", res.data);
          this.rows = res.data.content;
        });
    },
    //metodo para eliminar una oxigenacion, se pasa el id para identificar cual se va a elimianr
    deleteOxigenation(id) {
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
            .delete(`/api/Oxygenation/delete-id/${id}`)
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
                this.getAlloxigenation();
              }, 2000);
            });
        }
      });
    },
    saveOxigenation() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          this.$http
            .post("/api/Oxygenation/create-Oxygenation", this.form)
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
              this.getAlloxigenation();
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
