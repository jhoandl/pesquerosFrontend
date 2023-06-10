<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-transparent"
  >
    <div class="p-8 rounded-lg shadow-md z-10">
      <h1 class="text-4xl font-medium mb-4 font-mono text-white">
        ¿Has olvidado tu contraseña?
      </h1>
      <h3
        class="text-2xl font-medium mb-4 font-mono text-white w-96 ml-auto mr-auto"
      >
        Ingrese su correo electronico y le enviaremos instrucciones para
        recuperar su contraseña.
      </h3>
      <form @submit.prevent="send()">
        <div class="mb-4 input-group-prepend flex justify-center">
          <!-- <div class="input-group-prepend"> -->
          <span class="input-group-text rounded-l-sm">
            <i class="fa-solid fa-envelope mt-2 ml-1"></i>
          </span>
          <!-- </div> -->
          <div>
            <input
              placeholder="Correo electronico"
              name="Correo"
              type="email"
              v-model="email"
              id="email"
              class="w-96 rounded-r-sm py-2 px-3 username"
              v-validate="'required'"
              data-vv-rules="required"
            />
          </div>
        </div>
        <small
          class="text-red-500 text-xs relative top-1 mr-28 truncate w-full"
          v-if="errors && errors.has('Correo')"
        >
          <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
          {{ errors.first("Correo") }}
        </small>
        <div class="flex justify-center">
          <button
            @click.prevent="send()"
            class="text-white rounded-full py-2 px-4 hover:bg-gray-800 btn mt-2"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RecoveryComponent",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    send() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          axios
            .post("http://52.91.104.43/api/auth/recovery-password", null, {
              params: {
                email: this.email,
              },
            })
            .then(() => {
              this.$toast.success("Se envio un correo con las instrucciones", {
                position: "top-right",
                timeout: 2500,
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
            .finally(() => {
              setTimeout(() => {
                this.$router.push({ name: "login" });
              }, 3000);
            });
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
