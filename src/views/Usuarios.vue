<template>
  <div class="">
    <p class="my-4">Usuarios</p>
    <b-container fluid class="w-50">
      <b-row class="my-4 usuarios">
        <b-col sm="2"> </b-col>
        <b-col sm="10">
          <b-form-input
            v-model="form.nombre"
            id="input-small"
            size="sm"
            placeholder="Ingresa el nombre"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-4">
        <b-col sm="2"> </b-col>
        <b-col sm="10">
          <b-form-input
            v-model="form.apellido"
            id="input-small"
            placeholder="Ingresa el apellido"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col sm="2"> </b-col>
        <b-col sm="10">
          <b-form-input
            v-model="form.fecha"
            id="input-small"
            type="date"
            placeholder="Ingresa la fecha"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col sm="2"> </b-col>
        <b-col sm="10">
          <b-form-input
            v-model="form.horaIni"
            id="input-small"
            placeholder="Ingresa el horario"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col sm="2"> </b-col>
        <b-col sm="10">
          <b-form-input
            v-model="form.horaFin"
            id="input-small"
            placeholder="Ingresa la hora de finalización"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col sm="2"> </b-col>
        <b-col sm="10">
          <b-form-input
            v-model="form.rol"
            id="input-small"
            placeholder="Ingresa el rol"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-4 justify-content-center">
        <b-col sm="10">
          <b-button @click.prevent="saveUser()" class="w-50">Guardar</b-button>
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
        nombre: "",
        apellido: "",
        fecha: new Date().getTime(),
        horaIni: "",
        horaFin: "",
        rol: "",
      },
    };
  },
  methods: {
    saveUser() {
      const formData = {
        nombre: this.form.nombre,
        apellido: this.form.apellido,
        fecha: new Date(this.form.fecha).getTime(),
        horaIni: this.form.horaIni,
        horaFin: this.form.horaFin,
        rol: this.form.rol,
      };
      console.log(formData);
        axios
          .post("http://localhost:8081/api/create-user", this.form)
          .then((res) => {
            console.log(res);
            window.location.reload()
          });
    },
  },
};
</script>
<style lang="scss">
.usuarios {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>