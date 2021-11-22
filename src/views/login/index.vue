<template>
  <div class="conatiner_login">
    <div class="login_img"></div>
    <div class="login_form">
      <div class="login_form_container">
        <fild-input
          :text="'Usuário'"
          v-model="value.userName"
          :value="value.userName"
          required
          :isError="isError && !value.userName"
        />
        <fild-input
          text="Senha"
          v-model="value.userPassword"
          :value="value.userPassword"
          required
          :isError="isError && !value.userPassword"
          type="password"
        />

        <fild-checkbox
          text="Lembrar senha"
          v-model="reminderPassword"
          :value="reminderPassword"
          :isError="isError && !reminderPassword"
          type="checkbox"
        />
        <div class="login_button">
          <send
            :isLoading="isLoading"
            :isSuccess="isSuccess"
            :isError="isError"
            @click="sendForm"
            text="Entrar"
            width="100%"
          ></send>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FildInput from '@/components/input/Fild.vue'
import FildCheckbox from '@/components/input/FildCheckbox.vue'
import FildSelect from '@/components/input/FildSelect.vue'
import Send from '@/components/button/Send.vue'

export default {
  data() {
    return {
      isLoading: false,
      isSuccess: false,
      isError: false,
      reminderPassword: false,
      value: {
        userName: '',
        userPassword: '',
        type: 'painel'
      }
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/')
    }
  },

  methods: {
    sendForm() {
      this.isLoading = true

      if (this.validForm()) {
        console.log(this.value)
        this.$store.dispatch('auth/login', this.value).then(
          () => {
            this.isLoading = false
            this.isSuccess = true

            this.$router.push('/')
            setTimeout(() => {
              this.isSuccess = false
              this.$emit('close')
            }, 3000)
          },
          (error) => {
            this.isLoading = false
            this.isError = true
            setTimeout(() => {
              this.isError = false
            }, 3000)
          }
        )
      } else {
        this.isLoading = false
        this.isError = true
        setTimeout(() => {
          this.isError = false
        }, 3000)
      }
    },
    validForm() {
      return Object.values(this.value).every((item) => !!item)
    }
  },
  components: {
    FildInput,
    Send,
    FildSelect,
    FildCheckbox
  }
}
</script>
<style scoped>
.conatiner_login {
  display: grid;
  grid-template-columns: 65% 35%;
  height: 100vh;
  width: 100vw;
  transition: all 0.5s 0s ease;
}

.login_img {
  display: block;
  background-color: #ddd;

  transition: all 0.5s 0s ease;
}

.login_form {
  display: grid;
  align-items: center;
  justify-self: center;
  width: 100%;
  padding: 1rem;
}

.login_button {
  width: 30%;
  margin: auto;
}

.login_form_container {
  padding: 5rem;
  font-size: 1.5rem;
  height: auto;
}

@media only screen and (max-width: 1080px) {
  .login_img {
    display: none;
  }

  .conatiner_login {
    display: grid;
    grid-template-columns: 100%;
    height: 100vh;
    width: 100vw;
  }
}
</style>
