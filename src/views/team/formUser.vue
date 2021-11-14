<template>
  <transition name="modal">
    <widget-modal
      v-if="showModal"
      layout="icon-modal-folder"
      :title="'cadastro de usuário'"
    >
      <template v-slot:body>
        <div class="form_container">
          <fild-input :text="'nome'" v-model="user.name" />

          <div class="form_container_text">
            <fild-date :text="'data de nascimento'" v-model="user.dtBirthday" />
            <fild-input :text="'cargo'" v-model="user.profile" />
            <fild-input :text="'e-mail'" v-model="user.email" />
            <fild-input :text="'equipe'" v-model="user.area" />
            <!-- <fild-input :text="'apelido'" v-model="user.nickname" /> -->
            <fild-input :text="'linkedin'" v-model="user.linkedin" />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <send @click="sendForm"></send>
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

import useUser from '@/composables/useUser.js'

export default {
  components: { FildInput, FildDate, IconFrame, IconBase, Send, WidgetModal },

  props: {
    showModal: { type: Boolean, required: true },
    user: {
      type: String,
      required: false,
      default: {
        dtBirthday: null,
        name: '',
        profile: '',
        area: '',
        // nickname: '',
        linkedin: '',
        email: ''
      }
    }
  },
  setup() {
    const { createUser } = useUser()

    return { createUser }
  },
  methods: {
    changeInput(index, value) {
      this.user[index] = value
    },
    sendForm() {
      console.table(this.user)

      const isValid = this.validForm()
      if (isValid) {
        this.createUser(this.user)
      }
    },
    validForm() {
      return true
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
