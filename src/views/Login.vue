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
      <form @submit.prevent="login()">
        <div class="relative mb-4 input-group-prepend flex">
          <span class="input-group-text rounded-l-sm">
            <i class="fas fa-user mt-2 ml-1"></i>
          </span>
          <input
            autocomplete="off"
            placeholder="Usuario"
            type="text"
            name="Usuario"
            class="w-full rounded-r-sm py-2 px-3 username"
            v-model="form.username"
            v-validate="'required'"
            data-vv-rules="required"
          />
          <small
            class="text-red-500 text-xs absolute top-10 mt-2 mr-2"
            v-if="errors && errors.has('Usuario')"
          >
            <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
            {{ errors.first("Usuario") }}
          </small>
        </div>
        <div class="relative mb-4 input-group-prepend flex top-4">
          <span class="input-group-text rounded-l-sm">
            <i class="fa-solid fa-lock mt-2 ml-1"></i>
          </span>
          <input
            placeholder="Contraseña"
            type="password"
            name="Contraseña"
            class="w-full rounded-r-sm py-2 px-3 password"
            v-model="form.password"
            v-validate="'required'"
            data-vv-rules="required"
          />
          <small
            class="text-red-500 text-xs absolute top-10 mt-2 mr-2"
            v-if="errors && errors.has('Contraseña')"
          >
            <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
            {{ errors.first("Contraseña") }}
          </small>
        </div>
        <router-link
          to="passwordRecovery"
          class="cursor-pointer text-white text-xs mr-5 text-right flex justify-end top-2 relative"
        >
          ¿Olvidaste tu contraseña?
        </router-link>
        <div class="flex justify-center relative top-4">
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
import User from "../model/user";

export default {
  name: "LoginComponent",
  data() {
    return {
      form: new User("", ""),
    };
  },
  methods: {
    login() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          this.$store
            .dispatch("auth/login", this.form)
            .then((res) => {
              localStorage.setItem("accessToken", res.token);
              const userData = {
                email: res.email,
                id: res.id,
                roles: res.roles,
                username: res.username,
                namesAndLastNames: res.namesAndLastNames,
                phoneNumber: res.phoneNumber,
              };
              localStorage.setItem("user", JSON.stringify(userData));
              this.$router.push({ name: "home" });
              this.$toast.success("Bienvenido a pesqueros", {
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
            .catch((err) => {
              console.log("error ", err);
              this.$toast.error("Usuario o contraseña incorrecta", {
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
            .finally(() => {});
        }
      });
    },
    passwordRecovery() {
      this.$router.push({ name: "passwordRecovery" });
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
