<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-transparent"
  >
    <div class="p-8 rounded-lg shadow-md z-10">
      <h1 class="text-4xl font-medium mb-4 font-mono text-white">
        Bienvenido a Pesqueros
      </h1>
      <h3 class="text-2xl font-medium mb-4 font-mono text-white">
        INGRESE SUS CREDENCIALES
      </h3>
      <form>
        <div class="mb-4 input-group-prepend flex">
          <!-- <div class="input-group-prepend"> -->
          <span class="input-group-text rounded-l-sm">
            <i class="fas fa-user mt-2 ml-1"></i>
          </span>
          <!-- </div> -->
          <input
            placeholder="Usuario"
            type="text"
            id="email"
            class="w-full rounded-r-sm py-2 px-3 username"
          />
        </div>
        <div class="mb-4 input-group-prepend flex">
          <span class="input-group-text rounded-l-sm">
            <i class="fa-solid fa-lock mt-2 ml-1"></i>
          </span>
          <input
            placeholder="Contraseña"
            type="password"
            id="password"
            class="w-full rounded-r-sm py-2 px-3 password"
          />
        </div>
        <router-link
          to="passwordRecovery"
          class="cursor-pointer text-white text-xs mr-5 text-right flex justify-end"
        >
          ¿Olvidaste tu contraseña?
        </router-link>
        <div class="flex justify-center">
          <button
            @click.prevent="login()"
            type="submit"
            class="text-white rounded-full py-2 px-4 hover:bg-gray-800 btn"
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  methods: {
    login() {
      localStorage.setItem("user", true);
      this.$router.push({ name: "home" });
      // this.$emit("login-success");
    },
    passwordRecovery() {
      this.$router.push({ name: "passwordRecovery" });
      // this.$emit("login-success");
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
