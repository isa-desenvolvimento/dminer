<template>
  <div class="conatiner_login">
    <div class="login_img"></div>
    <div class="login_form">
      <div class="form_container">
        <fild-input
          :text="'Usuário'"
          v-model="value.user"
          :value="value.user"
          required
          :isError="isError && !value.user"
        />
        <fild-input
          text="Senha"
          v-model="value.password"
          :value="value.password"
          required
          :isError="isError && !value.password"
          type="password"
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
import FildSelect from '@/components/input/FildSelect.vue'
import Send from '@/components/button/Send.vue'

export default {
  data() {
    return {
      isLoading: false,
      isSuccess: false,
      isError: false,
      value: {
        user: '',
        password: ''
      }
    }
  },
  setup() {},

  methods: {
    sendForm() {
      this.isLoading = true
      if (this.validForm()) {
        let result
        if (this.isEdit) {
          result = this.update(this.value)
        } else {
          result = this.create(this.value)
        }

        this.isLoading = false
        if (result) {
          this.isSuccess = true
          setTimeout(() => {
            this.isSuccess = false
            this.$emit('close')
          }, 3000)
        }
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
    FildSelect
  }
}
</script>
<style scoped>
.conatiner_login {
  display: grid;
  grid-template-columns: 65% 35%;
  height: 100vh;
  width: 100vw;
}

.login_img {
  background-color: #ddd;
}

.login_form {
  display: grid;
  align-items: center;
  justify-self: center;
  width: 100%;
  padding: 1rem;
  background-color: aliceblue;
}

.login_button {
  width: 30%;
  margin: auto;
}

.form_container {
  padding: 5rem;
  font-size: 1.5rem;
}
</style>
