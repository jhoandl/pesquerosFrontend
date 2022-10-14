<template>
  <div class="alimentacion">
    <b-container fluid style="margin-top: 300px">
      <b-row class="my-1">
        <b-col sm="2"> </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-small"
            size="sm"
            placeholder="Ingresa la hora de alimentacion"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1" style="margin-top: 600px">
        <b-col sm="2"> </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-small"
            placeholder="Ingresa la cantidad"
          ></b-form-input>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
.alimentacion {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
