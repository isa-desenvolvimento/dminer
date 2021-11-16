<template>
  <transition name="modal">
    <widget-modal
      v-if="showModal"
      layout="icon-modal-folder"
      :title="'cadastro de usuário'"
    >
      <template v-slot:body>
        <div class="form_container">
          <fild-input
            :text="'nome'"
            :value="user.name"
            v-model="user.name"
            required
            :isError="isError && !user.name"
          />

          <div class="form_container_text">
            <fild-date
              :text="'data de nascimento'"
              v-model="user.dtBirthday"
              :value="user.dtBirthday"
              required
              :isError="isError && !user.dtBirthday"
            />
            <fild-input
              :text="'cargo'"
              v-model="user.area"
              :value="user.area"
              required
              :isError="isError && !user.area"
            />
            <fild-input
              :text="'e-mail'"
              v-model="user.email"
              :value="user.email"
              required
              :isError="isError && !user.email"
            />
            <!-- <fild-input
              :text="'equipe'"
              v-model="user.area"
              :value="user.area"
              required
              :isError="isError && !user.area"
            /> -->

            <fild-input
              :text="'linkedin'"
              v-model="user.linkedin"
              :value="user.linkedin"
              required
              :isError="isError && !user.linkedin"
            />
            <fild-select
              :text="'Permissão'"
              v-model="value.permission"
              :value="value.permission"
              required
              :isError="isError && !value.permission"
              :options="getPermission"
            />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <send
          :isLoading="isLoading"
          :isSuccess="isSuccess"
          :isError="isError"
          @click="sendForm"
        ></send>
      </template>
    </widget-modal>
  </transition>
</template>
<script>
import FildInput from '@/components/input/Fild.vue'
import FildDate from '@/components/input/FildDate.vue'
import IconBase from '@/components/icons/IconBase.vue'
import IconFrame from '@/components/icons/IconFrame.vue'
import Send from '@/components/button/Send.vue'
import WidgetModal from '@/components/widget/WidgetModal.vue'
import FildSelect from '@/components/input/FildSelect.vue'

import useUser from '@/composables/useUser.js'
import usePermission from '@/composables/usePermission'

export default {
  data() {
    return {
      isLoading: false,
      isSuccess: false,
      isError: false
    }
  },
  components: {
    FildInput,
    FildDate,
    IconFrame,
    IconBase,
    Send,
    WidgetModal,
    FildSelect
  },
  props: {
    showModal: { type: Boolean, required: true },
    isEdit: false,
    user: {
      type: String,
      required: false,
      default: {
        dtBirthday: null,
        name: '',
        profile: '',
        area: '',
        nickname: '',
        linkedin: '',
        email: ''
      }
    }
  },
  setup() {
    const { createUser } = useUser()
    const { getPermission } = usePermission()

    return { createUser, getPermission }
  },

  methods: {
    changeInput(index, value) {
      this.value[index] = typeof value == 'object' ? value.id : value
    },
    sendForm() {
      this.isLoading = true
      if (this.validForm()) {
        if (this.isEdit) {
          const result = this.createUser(this.user)
        } else {
          const result = this.createUser(this.user)
        }

        this.isLoading = false
        if (result) {
          this.isSuccess = true
          setTimeout(() => {
            this.isSuccess = false
            this.$router.push('/equipe')
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
      let _user = { ...this.user }
      delete _user.nickname
      return Object.values(_user).every((item) => !!item)
    }
  }
}
</script>

<style scope>
.form_container {
  /* display: grid;
  background-image: url(/src/assets/widget/frame-team.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  margin: auto;
  justify-items: stretch;
  padding: 2rem; */

  width: 80%;
  margin: auto;
}

.form_container_text {
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 10%;
}
</style>
