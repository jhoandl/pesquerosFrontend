<template>
  <div>
    <h1 style="margin-top: 2cm" class="text-xl font-bold dark:text-white">
      Oxigenación
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
              name="ontime"
              class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
              placeholder="Hora de encendido"
              v-model="form.onTime"
              v-validate="'required'"
              data-vv-rules="required"
            />
            <small
              class="text-red-500 text-xs absolute top-10 mt-2 mr-2"
              v-if="errors && errors.has('ontime')"
            >
              <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
              {{ errors.first("ontime") }}
            </small>
          </div>
          <div class="w-1/2 p-4">
            <input
              type="text"
              name="endTime"
              class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
              placeholder="Hora de apagado"
              v-model="form.endTime"
              v-validate="'required'"
              data-vv-rules="required"
            />
            <small
              class="text-red-500 text-xs absolute top-10 mt-2 mr-2"
              v-if="errors && errors.has('endTime')"
            >
              <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
              {{ errors.first("endTime") }}
            </small>
          </div>
          <div class="w-1/2 p-4">
            <input
              type="number"
              autocomplete="off"
              name="gasolineQuality"
              class="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:placeholder:text-white dark:bg-slate-600 dark:focus:ring-slate-900"
              placeholder="Cantidad de gasolina en litros"
              v-model="form.gasolineQuality"
              v-validate="'required'"
              data-vv-rules="required"
            />
            <small
              class="text-red-500 text-xs absolute top-10 mt-2 mr-2"
              v-if="errors && errors.has('gasolineQuality')"
            >
              <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
              {{ errors.first("gasolineQuality") }}
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
    <DashboardlogoComponent />
  </div>
</template>
<script>
import DashboardlogoComponent from "@/components/Dashboardlogo.vue";
import oxigenation from "../model/oxigenation";
// @ is an alias to /src
export default {
  name: "OxigenacionComponent",
  data() {
    return {
      form: new oxigenation("", "", ""),
    };
  },
  components: {
    DashboardlogoComponent,
  },
  methods: {
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
