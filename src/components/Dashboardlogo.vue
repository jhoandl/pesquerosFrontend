<template>
  <div class="dashboard-logo-component">
    <img src="../assets/pez.png" alt="Imagen Dashboard" />
  </div>
</template>

<script>
export default {
  name: "DashboardlogoComponent",
  props: {
    msg: String,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dashboard-logo-component {
  position: relative;
}
img {
  margin-top: -50%;
  position: relative;
  display: block;
  margin: 0 auto;
  width: 40%;
  z-index: -1;
  opacity: 0.5;
  margin-top: -4cm;
}
</style>
