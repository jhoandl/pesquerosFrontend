<template>
  <div>
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
img {
  display: block;
  margin: 0 auto;
  width: 40%;
  opacity: 0.2;
  margin-top: -4cm;
}
</style>
