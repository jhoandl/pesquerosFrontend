<template>
  <div class="">
    <p class="my-4">Oxigenacion</p>
    <b-container fluid class="w-50">
      <b-row class="my-4">
        <b-col sm="2"> </b-col>
        <b-col sm="10">
          <b-form-input
            type="date"
            v-model="form.horaOn"
            id="input-small"
            size="sm"
            placeholder="Ingresa la hora de encendido de motor"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col sm="2"> </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-small"
            v-model="form.horaOff"
          type="date"
            size="sm"
            placeholder="Ingresa la hora de apagado de motor"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-col sm="10">
          <b-button @click.prevent="saveOxigenacion()" class="w-50">Guardar</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        horaOn: new Date().getHours(),
        horaOff: new Date().getHours(),
      },
    };
  },
  methods: {
    saveOxigenacion() {
      axios
        .post("http://localhost:8081/api/create-oxigenacion", this.form)
        .then((res) => {
          console.log(res);
          window.location.reload()
        });
    },
  },
};
</script>

<style lang="scss">
.oxigenacion {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>