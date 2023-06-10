<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-transparent"
  >
    <div class="p-8 rounded-lg shadow-md z-10">
      <h1 class="text-4xl font-medium mb-4 font-mono text-white">
        Ingrese su nueva contraseña
      </h1>
      <form @submit.prevent="send()">
        <div class="mb-4 input-group-prepend flex justify-center">
          <!-- <div class="input-group-prepend"> -->
          <span class="input-group-text rounded-l-sm">
            <i class="fa-solid fa-envelope mt-2 ml-1"></i>
          </span>
          <!-- </div> -->
          <input
            placeholder="Confirmar contraseña"
            type="password"
            name="Contraseña"
            v-model="password"
            id="password"
            class="w-full rounded-r-sm py-2 px-3 password"
            v-validate="'required'"
            data-vv-rules="required"
          />
        </div>
        <small
          class="text-red-500 text-xs relative top-1 mr-72 truncate w-full"
          v-if="errors && errors.has('Contraseña')"
        >
          <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
          {{ errors.first("Contraseña") }}
        </small>
        <div class="mb-4 input-group-prepend flex justify-center">
          <!-- <div class="input-group-prepend"> -->
          <span class="input-group-text rounded-l-sm mt-2">
            <i class="fa-solid fa-envelope mt-2 ml-1"></i>
          </span>
          <!-- </div> -->
          <input
            placeholder="Contraseña"
            type="password"
            name="Confirmar contraseña"
            id="password"
            v-model="confirPassword"
            class="w-full rounded-r-sm py-2 px-3 password mt-2"
            v-validate="'required'"
            data-vv-rules="required"
          />
        </div>
        <small
          class="text-red-500 text-xs relative top-1 mr-56 truncate w-full"
          v-if="errors && errors.has('Confirmar contraseña')"
        >
          <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
          {{ errors.first("Confirmar contraseña") }}
        </small>
        <div class="flex justify-center mt-2">
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
import axios from "axios";

export default {
  name: "UpdateComponent",
  data() {
    return {
      id: null,
      password: null,
      confirPassword: null,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  methods: {
    send() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          if (this.password === this.confirPassword) {
            axios
              .post(
                `http://52.91.104.43/api/auth/new-password/${this.id}`,
                null,
                {
                  params: {
                    password: this.password,
                  },
                }
              )
              .then(() => {
                this.$toast.success("Contrarseña actualizada correctamente", {
                  position: "top-right",
                  timeout: 2000,
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
                this.$toast.error("Ocurrio un error", {
                  position: "top-right",
                  timeout: 2000,
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
              .finally(() => {
                setTimeout(() => {
                  this.$router.push({ name: "login" });
                }, 2500);
              });
          } else {
            this.$toast.error("Las contraseñas no coinciden", {
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
          }
          console.log("success");
        }
      });
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
