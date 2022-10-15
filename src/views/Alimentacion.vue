<template>
  <div class="">
      <p class="my-4">Registrar alimentación</p>
    <b-container fluid class="w-50">
      <b-row class="my-4">
        <b-col sm="2"> </b-col>
        <b-col sm="10">
          <b-form-input
          v-model="form.horaAlimentacion"
            id="input-small"
            type="date"
            size="sm"
            placeholder="Ingresa la hora de alimentacion"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1" >
        <b-col sm="2"> </b-col>
        <b-col sm="10">
          <b-form-input
          v-model="form.cantKl"
            id="input-small"
            placeholder="Ingresa la cantidad"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-col sm="10">
          <b-button @click.prevent="saveAliment()" class="w-50">Guardar</b-button>
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
        horaAlimentacion: new Date().getTime(),
        cantKl: "",
      }
    }
  },
  methods: {
    saveAliment() {
      axios.post("http://localhost:8081/api/create-alimentacion", this.form)
      .then(res => {
        console.log(res);
        window.location.reload()
      })
    }
  }
}
</script>

<style lang="scss">
.alimentacion {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
