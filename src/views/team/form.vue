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
            :value="value.name"
            v-model="value.name"
            required
            :isError="isError && !value.name"
          />

          <div class="form_container_text">
            <fild-date
              :text="'data de nascimento'"
              v-model="value.dtBirthday"
              :value="value.dtBirthday"
              required
              :isError="isError && !value.dtBirthday"
            />
            <fild-input
              :text="'cargo'"
              v-model="value.area"
              :value="value.area"
              required
              :isError="isError && !value.area"
            />
            <fild-input
              :text="'e-mail'"
              v-model="value.email"
              :value="value.email"
              required
              :isError="isError && !value.email"
            />
            <!-- <fild-input
              :text="'equipe'"
              v-model="value.area"
              :value="value.area"
              required
              :isError="isError && !value.area"
            /> -->

            <fild-input
              :text="'linkedin'"
              v-model="value.linkedin"
              :value="value.linkedin"
              required
              :isError="isError && !value.linkedin"
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
import { dateHourFormarUs } from '@/util/date'

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
    value: {
      type: Object,
      required: false,
      default: {
        dtBirthday: null,
        name: '',
        permission: 0,
        area: '',
        linkedin: '',
        email: '',
        avatar: '',
        banner: ''
      }
    }
  },
  setup() {
    const { createUser } = useUser()
    const { getPermission } = usePermission()

    return { createUser, getPermission }
  },

  methods: {
    sendForm() {
      this.isLoading = true
      if (this.validForm()) {
        this.value.dtBirthday = dateHourFormarUs(this.value.dtBirthday)

        if (this.isEdit) {
          const result = this.createUser(this.value)
        } else {
          const result = this.createUser(this.value)
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
      let _user = { ...this.value }
      delete _user.avatar
      delete _user.banner
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
