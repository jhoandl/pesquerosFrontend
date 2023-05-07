<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-transparent"
  >
    <div class="p-8 rounded-lg shadow-md z-10">
      <h1 class="text-4xl font-medium mb-4 font-mono text-white">
        Ingrese su nueva contraseña
      </h1>
      <form>
        <div class="mb-4 input-group-prepend flex justify-center">
          <!-- <div class="input-group-prepend"> -->
          <span class="input-group-text rounded-l-sm">
            <i class="fa-solid fa-envelope mt-2 ml-1"></i>
          </span>
          <!-- </div> -->
          <input
            placeholder="Confirmar contraseña"
            type="password"
            id="password"
            class="w-full rounded-r-sm py-2 px-3 password"
          />
        </div>
        <div class="mb-4 input-group-prepend flex justify-center">
          <!-- <div class="input-group-prepend"> -->
          <span class="input-group-text rounded-l-sm">
            <i class="fa-solid fa-envelope mt-2 ml-1"></i>
          </span>
          <!-- </div> -->
          <input
            placeholder="Contraseña"
            type="password"
            id="password"
            class="w-full rounded-r-sm py-2 px-3 password"
          />
        </div>
        <div class="flex justify-center">
          <button
            @click.prevent="send()"
            class="text-white rounded-full py-2 px-4 hover:bg-gray-800 btn"
          >
            Actualizar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateComponent",
  methods: {
    send() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg-gradient-to-b {
  background-image: url("../assets/login.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.bg-gradient-to-b::before {
  content: "";
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, #000, #000);
  opacity: 0.9;
}
.username,
.password {
  background-color: rgba($color: #d9d9d9, $alpha: 0.4);
  border: none;
  border-color: none;
}
.input-group-text {
  background-color: rgba($color: #d9d9d9, $alpha: 0.4);
  border: none;
  color: #333;
}
.input-group-text i {
  font-size: 20px;
}
.input-group-prepend {
  margin-right: 10px;
}
.fa-user,
.fa-lock {
  color: rgba($color: #ffffff, $alpha: 0.4);
}
.btn {
  background-color: rgba($color: #ffffff, $alpha: 0.4);
}
</style>
